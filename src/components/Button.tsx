interface ButtonProps {
  size: "small" | "medium" | "large";
  color: "primary" | "secondary";
  title: string;
  onClick: () => void;
}

const Button = ({ size, color, title, onClick }: ButtonProps) => {
  const defaultClass = "flex items-center rounded-full py-1 px-4 border size-fit";
  const classes = {
    borders: {
      primary: "border-white text-white",
      secondary: "border-black text-black",
    },
    sizes: {
      small: "text-base",
      medium: "text-xl",
      large: "text-3xl",
    },
  };

  return (
    <button
      className={`${defaultClass} ${classes.sizes[size]} ${classes.borders[color]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;