import Link from "next/link";

const FooterButton = (props: any) => {
  const { children, href, className, active } = props;

  return (
    <Link
      href={href}
      className={`${className}  h-fit hover:text-primary active:bg-primary-200 p-1 text-[14px]`}
    >
      {children}
    </Link>
  );
};

export { FooterButton };
