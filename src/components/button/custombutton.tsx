const CustomButton = (props: any) => {
  const { children, className, onClick, style = "purple" } = props;

  return (
    <div
      className={`${className} w-fit capitalize hover:scale-101 active:scale-99 ${
        style === "purple"
          ? "bg-primary text-white hover:bg-primary-600 active:bg-primary-500 transition-colors"
          : "bg-white text-primary hover:bg-primary-200 active:bg-primary-100 transition-colors"
      } flex gap-2  h-fit shadow-[4px_2px_12px_0_rgba(0,0,0,0.1)] px-8 py-3 cursor-pointer items-center justify-center`}
      onClick={onClick}
    >
      <span className="flex gap-2 items-center">{children}</span>
    </div>
  );
};

export default CustomButton;
