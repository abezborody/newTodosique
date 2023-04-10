interface IButtonProps {
  children: string | JSX.Element | JSX.Element[];
}

const Button = ({ children }: IButtonProps) => {
  return <button className='px-2 py-1 rounded'>{children}</button>;
};

export default Button;
