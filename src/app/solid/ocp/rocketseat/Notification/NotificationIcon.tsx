import { ElementType } from 'react';

type NotificationIconProps = {
  icon?: ElementType;
};

export default function NotificationIcon({
  icon: Icon,
}: NotificationIconProps) {
  return (
    <div className="size-6 text-violet-500 mt-3">
      {Icon && <Icon className="size-6 mt-3 text-violet-500" />}
    </div>
  );
}
