import { motion } from 'framer-motion';

interface IButtonProps {
  children: string | JSX.Element | JSX.Element[];
  handler?: () => void;
  hoverColor?: string;
}

const HoverColor = {
  default: 'zinc',
  success: 'emerald',
  alert: 'red',
};

const Button = ({
  children,
  handler,
  hoverColor = HoverColor.default,
}: IButtonProps) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      className={`text-sm px-2 py-1 rounded border bg-zinc-800 border-zinc-800 hover:border-${hoverColor}-600 `}
      onClick={handler}
    >
      {children}
    </motion.button>
  );
};

export default Button;
