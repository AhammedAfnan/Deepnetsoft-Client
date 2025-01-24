const MealsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-0"> {/* Remove padding top and bottom from section */}
      {/* Header Section */}
      <div className="relative h-[79px]" 
      style={{
        backgroundImage: 'url(/image1.png)'
      }}
      >
        {/* Overlay with Buttons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-4">
            <button className="bg-black text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-200">
              Food
            </button>
            <button className="bg-black text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-200">
              Drinks
            </button>
            <button className="bg-black text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-200">
              Brunch
            </button>
          </div>
        </div>
      </div>

      {/* Another Image Section */}
      <div className="mt-0"> {/* Remove margin-top */}
        <img
          src="/image2.png"
          alt="Meals Details"
          className="w-full h-96 object-cover rounded"
        />
      </div>
    </section>
  );
};

export default MealsSection;
