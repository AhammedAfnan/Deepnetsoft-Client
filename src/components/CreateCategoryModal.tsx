'use client'
import {useState} from "react"
import Modal from "react-modal";
import {useCategories} from "@/context/CategoryContext"

interface CreateCategoryModalProps {
  open: boolean;
  onOpenChange(): void;
}

export default function CreateCategoryModal({
  open,
  onOpenChange,
}: CreateCategoryModalProps) {
  const [values, setValues] = useState({name: '', description: ''})
  const {setCategories} = useCategories()

  function handleChange (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = e.target
    setValues(prev => ({...prev, [name]: value}))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const res = await fetch(process.env.NEXT_APP_API_URL+'/categories/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
      mode: 'cors'
    })
    const data = await res.json()
    setCategories(prev => [...prev, data.payload])
    setValues({name: '', description: ''})
    onOpenChange()
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={onOpenChange}
      overlayClassName="flex fixed inset-0 bg-[rgba(24,24,24,.9)] grid place-items-center"
      className="bg-[rgb(24,24,24)] border-[.5px] border-solid border-[rgb(243,245,247,0.15)] rounded-2xl shadow-lg p-4 w-[500px] max-w-full relative"
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Create a category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Category name"
            name='name'
            value={values.name}
            onChange={handleChange}
            className="h-10 block w-full rounded-md border border-solid text-white border-[#3e4042] p-2 bg-transparent text-sm outline-none"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Category description"
            rows={3}
            name='description'
            value={values.description}
            onChange={handleChange}
            className="block w-full rounded-md text-white border border-solid border-[#3e4042] p-2 bg-transparent text-sm outline-none resize-none"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="h-9 rounded-lg px-10 bg-[rgb(29,155,240)] text-white text-[15px] font-medium select-none"
          >
            Create
          </button>
        </div>
      </form>
      <button
        onClick={onOpenChange}
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
  );
}
