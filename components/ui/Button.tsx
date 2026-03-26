interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  colorType?: "dark" | "light";
  icon?: React.ReactNode;
}

export default function Button({
  children,
  onClick,
  backgroundColor,
  colorType,
  icon,
}: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`py-2 px-5 ${backgroundColor} rounded-full w-min-content shadow-md hover:shadow-lg transition-shadow duration-300 font-medium ${colorType === "dark" ? "text-white" : "text-black"} flex flex-row items-center gap-2`}
      >
        {icon ? icon : null}
        {children}
      </button>
    </>
  );
}
