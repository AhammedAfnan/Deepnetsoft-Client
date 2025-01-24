import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="h-[311px] w-full relative">
      <Image
        src="/image.jpeg"
        alt="Descriptive Alt Text"
        width={1440}
        height={311}
        className="absolute h-full w-full left-0 right-0 object-[top_left] object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold">Menu</h1>
        <p className="text-lg mt-2">Please take a look at our menu featuring food,drinks,and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
      </div>
    </div>
  );
};

export default HeroSection;
