"use client";

const MenuButton = (props: any) => {
  const { children, className, onClick, style = "purple" } = props;

  return (
    <>
      <div
        className={`${className} relative gap-2 flex items-center  text-primary rounded-xl h-fit px-3 py-3 cursor-pointer group hover:bg-gray-200 active:bg-gray-300 hover:text-blue-500 active:text-blue-700`}
        onClick={onClick}
      >
        <span className="flex gap-2 items-center">{children}</span>
      </div>
    </>
  );
};

export default MenuButton;
