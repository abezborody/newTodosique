import { motion } from 'framer-motion';

interface IButtonProps {
  children: string | JSX.Element | JSX.Element[];
  handler?: () => void;
  buttonHoverType?: hoverType;
}

type hoverType = 'zinc' | 'emerald' | 'red';

const Button = ({
  children,
  handler,
  buttonHoverType = 'zinc',
}: IButtonProps) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      className={`text-sm px-2 py-1 rounded border bg-zinc-800 border-zinc-800 hover:border-${buttonHoverType}-600 `}
      onClick={handler}
    >
      {children}
    </motion.button>
  );
};

export default Button;
