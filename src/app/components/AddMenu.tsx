// import React, { useState } from "react";
// import Modal from "./Modal";

// const MenuApp: React.FC = () => {
//   const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
//   const [isItemModalOpen, setIsItemModalOpen] = useState(false);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Menus</h1>
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={() => setIsMenuModalOpen(true)}
//       >
//         Add Menu
//       </button>
//       <button
//         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-4"
//         onClick={() => setIsItemModalOpen(true)}
//       >
//         Add Item
//       </button>

//       {/* Menu Modal */}
//       <Modal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)}>
//         <h2 className="text-xl font-bold mb-4">Add New Menu</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block font-semibold mb-2">Menu Name</label>
//             <input
//               type="text"
//               className="w-full border rounded p-2"
//               placeholder="Enter menu name"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold mb-2">Description</label>
//             <textarea
//               className="w-full border rounded p-2"
//               placeholder="Enter menu description"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Save Menu
//           </button>
//         </form>
//       </Modal>

//       {/* Item Modal */}
//       <Modal isOpen={isItemModalOpen} onClose={() => setIsItemModalOpen(false)}>
//         <h2 className="text-xl font-bold mb-4">Add New Item</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block font-semibold mb-2">Item Name</label>
//             <input
//               type="text"
//               className="w-full border rounded p-2"
//               placeholder="Enter item name"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold mb-2">Description</label>
//             <textarea
//               className="w-full border rounded p-2"
//               placeholder="Enter item description"
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold mb-2">Price</label>
//             <input
//               type="number"
//               className="w-full border rounded p-2"
//               placeholder="Enter price"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           >
//             Save Item
//           </button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default MenuApp;
