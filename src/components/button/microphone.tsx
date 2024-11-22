"use client";

const MicrophoneButton = (props: any) => {
  const { children, className, onClick } = props;

  return (
    <>
      <div
        className={`${className} relative gap-2 flex items-center transition-colors rounded-xl h-fit px-3 py-3 cursor-pointer group `}
        onClick={onClick}
      >
        <span className="flex gap-2 items-center">{children}</span>
      </div>
    </>
  );
};

export default MicrophoneButton;
