import clsx from 'clsx';
import { ButtonHTMLAttributes, ElementType } from 'react';

interface NotificationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export default function NotificationButton({
  icon: Icon,
  className,
  ...rest
}: NotificationButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "size-8 rounded flex items-center justify-center",
        className ?? 'bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800'
      )}
    >
      <Icon className="size-3 text-zinc-50" />
    </button>
  );
}
