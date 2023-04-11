import { motion } from 'framer-motion';

interface IButtonProps {
  children: string | JSX.Element | JSX.Element[];
  handler?: () => void;
  buttonHoverType?: 'default' | 'success' | 'alert';
}
// const hoverColors = {
//   default: 'border-zinc-600',
//   success: 'border-emerald-600',
//   alert: 'border-red-600',
// };

const Button = ({
  children,
  handler,
  buttonHoverType = 'default',
}: IButtonProps) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      className={`text-sm px-2 py-1 rounded border bg-zinc-800 border-zinc-800 ${
        buttonHoverType === 'default' ? 'hover:border-zinc-600' : ''
      } ${buttonHoverType === 'success' ? 'hover:border-emerald-600' : ''} ${
        buttonHoverType === 'alert' ? 'hover:border-red-600' : ''
      }`}
      onClick={handler}
    >
      {children}
    </motion.button>
  );
};

export default Button;
