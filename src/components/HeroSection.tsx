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
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase [text-shadow:2px_0px_8px_#c00]">
            Menu
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you&apos;d like to <br className="hidden md:block" /> place an
            order, use the &quot;Order Online&quot; button located below the
            menu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
