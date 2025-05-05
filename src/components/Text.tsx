interface TextProps {
  size: "small" | "medium" | "large";
  color: "primary" | "secondary";
  text: string;
}

const Text = ({size, color, text}: TextProps) => {
    const defaultClass =  "flex items-center rounded-md size-fit font-semibold";
    const classes = {
        colors: {
          primary: {
            text: "text-red-500 font-sans",
          },
          secondary: {
            text: "text-sky-500 font-serif",
          },
        },
        sizes: {
          small: "text-base",
          medium: "text-xl",
          large: "text-3xl",
        },
    };
    return (
        <div className={defaultClass + " " + classes.sizes[size] + " " + classes.colors[color].text}>
            {text}
        </div>
    )
}

export default Text