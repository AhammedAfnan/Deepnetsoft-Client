"use client";
import { useState, useCallback, useEffect, Fragment } from "react";
import Modal from "react-modal";
import CreateCategoryModal from "./CreateCategoryModal";
import {useCategories} from "@/context/CategoryContext"

Modal.setAppElement("body");

export default function AddMenu() {
  const [open, setOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState('-1');
  const {categories} = useCategories();
  const [isLoading, setIsLoading] = useState(false);
  const [menus, setMenus] = useState([
    { name: "", description: "", price: "", category },
  ]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);
  

  const handleClose = useCallback(() => {
    setOpen(false);
    setCategory("");
    if (categoryModalopen) {
      setCategoryModalopen(false);
    }
  }, [setOpen, categoryModalOpen, setCategoryModalOpen]);

  const handleAddRow = () => {
    setMenus((prev) => [
      ...prev,
      {
        name: "",
        description: "",
        price: "",
        category,
      },
    ]);
  };

  function onChange(index: number) {
    return function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const {name, value} = e.target
      setMenus(prev => {
        return prev.map((menu, ind) => {
          if (ind === index) {
            return {
              ...menu,
              [name]: value
            }
          }
          return menu
        })
      })
    }
  }

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:8080/api/menus/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(menus.filter(menu => Object.values(menu).some(value => value.trim() !== ''))),
        mode: 'cors'
      });
      if (!res.ok) {
        throw await res.json()
      }
    } catch (err) {
      console.log(err);
    } finally {
      setCategory('-1');
      setMenus([{name: '', description: '', price: '', category}])
      handleClose()
    }
  };

  return (
    <div className="fixed right-0 bottom-0 mb-6 mr-6 pointer-events-none">
      <button
        onClick={handleOpen}
        className="rounded-2xl h-[68px] w-[82px] flex items-center justify-center pointer-events-auto select-none bg-[rgb(24,24,24)] shadow border-[0.5px] border-solid border-[rgba(243,245,247,.15)]"
      >
        <svg
          aria-label="Create"
          role="img"
          viewBox="0 0 12 12"
          className="h-6 w-6 text-white"
          fill="currentColor"
        >
          <title>Create</title>
          <path
            d="M6 2v8m4-4H2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
          ></path>
        </svg>
      </button>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        overlayClassName="flex fixed inset-0 bg-[rgba(24,24,24,.9)] grid place-items-center"
        className="bg-[rgb(24,24,24)] border-[.5px] border-solid border-[rgb(243,245,247,0.15)] rounded-2xl shadow-lg p-4 w-[500px] max-w-full relative max-h-[80vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-white">
          Create a menu item
        </h2>

        {isLoading ? (
          <div>loading...</div>
        ) : (
          <>
            <div className="mb-3">
              <select
                className="h-10 block w-full rounded-md text-white border border-solid border-[#3e4042] p-2 bg-transparent text-sm outline-none"
                value={category}
                onChange={(e) => {
                  if (parseInt(e.target.value) === 0) {
                    setCategoryModalOpen(true);
                    return
                  }
                  setCategory(e.target.value);
                  setMenus(prev => prev.map(menu => ({...menu, category: e.target.value})))
                }}
              >
                <option value={-1}>
                  -- Select a cateory or create one --
                </option>
                {categories?.map((cat) => (
                  <option value={cat._id} key={cat._id}>
                    {cat.name}
                  </option>
                ))}
                <option value={0}>Create new category</option>
              </select>
              <CreateCategoryModal
                open={categoryModalOpen}
                onOpenChange={() => {
                  setCategoryModalOpen(false)
                }}
              />
            </div>
            <form onSubmit={handleSubmit}>
              {menus.map((menu, index) => (
                <Fragment key={`ReactModalMenuItem::${index}`}>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Item name"
                      name='name'
                      value={menus[index].name}
                      onChange={onChange(index)}
                      className="h-10 block w-full rounded-md text-white border border-solid border-[#3e4042] p-2 bg-transparent text-sm outline-none"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      placeholder="Item description"
                      rows={3}
                      name='description'
                      value={menus[index].description}
                      onChange={onChange(index)}
                      className="block w-full rounded-md text-white border border-solid border-[#3e4042] p-2 bg-transparent text-sm outline-none resize-none"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Price"
                      name='price'
                      value={menus[index].price}
                      onChange={onChange(index)}
                      className="h-10 block w-full rounded-md text-white border border-solid border-[#3e4042] p-2 bg-transparent text-sm outline-none"
                    />
                  </div>
                  {index !== menus.length - 1 && (
                    <div className='flex items-center w-full'>
                      <hr className="border-t border-solid border-t-white/10 my-4 flex-grow" />
                    </div>
                  )}
                </Fragment>
              ))}
              <button type="button" onClick={handleAddRow} className='h-9 px-4 bg-white/10 text-white rounded-lg'>
                Add new menu item
              </button>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="h-9 rounded-lg px-10 bg-[rgb(29,155,240)] text-white text-[15px] font-medium select-none"
                >
                  Create
                </button>
              </div>
            </form>
          </>
        )}

        <button
          onClick={handleClose}
          className="h-9 w-9 rounded-full absolute top-[10px] right-[10px] bg-[rgb(255,255,255,.1)] text-white shadow-md flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </Modal>
    </div>
  );
}
