"use client";
import { useState, useEffect } from "react";
import { useCategories } from "@/context/CategoryContext";

const MealsSection: React.FC = () => {
  const { categories } = useCategories();

  // Safely initialize selectedCategory only if categories is non-empty
  const [selectedCategory, setSelectedCategory] = useState(() =>
    categories && categories.length > 0 ? categories[0] : null
  );

  const [menu, setMenu] = useState([]); // Menu should start as an empty array
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedCategory) return; // Prevent API call if selectedCategory is null

    async function fetchMenu() {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:8080/api/menus/${selectedCategory._id}`
        );
        const data = await res.json();
        setMenu(data.payload || []); // Safely handle response payload
      } catch (error) {
        console.error("Error fetching menu:", error);
        setMenu([]); // Reset menu on error
      } finally {
        setLoading(false);
      }
    }

    fetchMenu();
  }, [selectedCategory]);

  return (
    <section className="bg-gray-100 py-0">
      {/* Header Section */}
      <div
        className="relative h-[79px]"
        style={{
          backgroundImage: "url(/image1.png)",
        }}
      >
        {/* Overlay with Buttons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-4">
            {categories && categories.length > 0 ? (
              categories.map((category) => (
                <button
                  onClick={() => setSelectedCategory(category)}
                  className="bg-black text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-400"
                  key={`MealsSectionCategory::${category._id}`}
                >
                  {category?.name}
                </button>
              ))
            ) : (
              <p className="text-center text-white">No categories available</p>
            )}
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div
        className="relative mt-0"
        style={{
          backgroundImage: "url(/image2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-10">
          <div className="w-[80%] mx-auto border-2 border-solid border-white p-4">
            {/* Section Title */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-[100px] block border-t-2 border-solid border-white" />
              <h1 className="uppercase text-3xl font-bold text-white text-center [text-shadow:2px_0px_8px_#c00]">
                {selectedCategory?.description || "Select a category"}
              </h1>
              <span className="w-[100px] block border-t-2 border-solid border-white" />
            </div>

            {/* Menu Grid */}
            {loading ? (
              <p className="text-center text-white">Loading menu...</p>
            ) : menu && menu.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menu.map((m) => (
                  <div
                    key={m._id}
                    className="relative text-white border-b-2 border-dotted border-white pb-2"
                  >
                    <div className="flex flex-col md:flex-row justify-between mb-1">
                      <h3 className="font-bold">{m?.name}</h3>
                      <span className="text-lg">${m?.price}</span>
                    </div>
                    <p className="text-sm">{m?.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-white">No menu items available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealsSection;
