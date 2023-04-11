import { motion } from 'framer-motion';

interface IButtonProps {
  children: string | JSX.Element | JSX.Element[];
  handler?: () => void;
  buttonHoverType?: hoverType;
}

export enum hoverType {
  default = 'border-zinc-600',
  success = 'border-emerald-600',
  alert = 'border-red-600',
}

const Button = ({
  children,
  handler,
  buttonHoverType = hoverType.default,
}: IButtonProps) => {
  const hoverColor = buttonHoverType;
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      className={`text-sm px-2 py-1 rounded border bg-zinc-800 border-zinc-800 hover:${hoverColor}`}
      onClick={handler}
    >
      {children}
    </motion.button>
  );
};

export default Button;
