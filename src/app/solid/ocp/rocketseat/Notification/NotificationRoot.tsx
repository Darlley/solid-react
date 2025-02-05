import { ReactNode } from "react";

type NotificationRootProps = {
  children: ReactNode;
};

export default function NotificationRoot({
  children,
}: NotificationRootProps) {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 px-9 py-4 flex items-start gap-6">
      {children}
    </div>
  );
}
