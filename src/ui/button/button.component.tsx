interface IButtonProps {
  children: string | JSX.Element | JSX.Element[];
  handler?: () => void;
  hoverColor?: string;
}

interface HoverColor {
  default: 'zinc-700';
  success: 'emerald-700';
  alert: 'red-700';
}

const Button = ({ children, handler }: IButtonProps) => {
  return (
    <button
      className={`px-2 py-1 rounded border bg-zinc-800 border-zinc-800 hover:border-zinc-600 transition`}
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Button;
