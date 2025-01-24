const MealsSection: React.FC = () => {
    return (
      <section className="bg-gray-100 py-12">
        {/* Header Section */}
        <div className="relative h-64">
          {/* Background Image */}
          <img
            src="/image1.png"
            alt="Meals Header"
            className="w-full h-full object-cover"
          />
          {/* Overlay with Buttons */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-4">
              <button className="bg-white text-black font-bold py-2 px-4 rounded shadow hover:bg-gray-200">
                Food
              </button>
              <button className="bg-white text-black font-bold py-2 px-4 rounded shadow hover:bg-gray-200">
                Drinks
              </button>
              <button className="bg-white text-black font-bold py-2 px-4 rounded shadow hover:bg-gray-200">
                Brunch
              </button>
            </div>
          </div>
        </div>
  
        {/* Another Image Section */}
        <div className="mt-8">
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
  