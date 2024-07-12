import { UserPlus2 } from 'lucide-react';
import { InputHTMLAttributes, ReactNode } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  leftIcon?: boolean;
  id?: string;
  children?: ReactNode;
};

export default function Input({
  id,
  label,
  leftIcon = false,
  children,
  ...rest
}: InputProps) {
  return (
    <div className="flex">
      {children}
      <input type="text" />
      {leftIcon && <UserPlus2 className="size-5" />}
    </div>
  );
}
