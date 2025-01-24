export default function AddMenu() {
  return (
    <div className="fixed right-0 bottom-0 mb-6 mr-6 pointer-events-none">
      <button className="rounded-2xl h-[68px] w-[82px] flex items-center justify-center pointer-events-auto select-none bg-[rgb(24,24,24)] shadow border-[0.5px] border-solid border-[rgba(243,245,247,.15)]">
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
      
    </div>
  );
}
