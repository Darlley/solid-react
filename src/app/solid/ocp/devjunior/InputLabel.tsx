import { InputHTMLAttributes, ReactNode } from 'react';

type InputLabelProps = InputHTMLAttributes<HTMLInputElement> & {
  children: ReactNode;
  id?: string;
};

export default function InputLabel({ id, children }: InputLabelProps) {
  return <label htmlFor={id}>{children}</label>;
}
