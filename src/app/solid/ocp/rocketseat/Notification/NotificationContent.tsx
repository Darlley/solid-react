type NotificationContentProps = {
  content: string;
};

export default function NotificationContent({ content }: NotificationContentProps) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
        {content}
      </p>
      <div className="text-xs text-zinc-400 flex items-center gap-1">
        <span>Convite</span>
        <span>Há 3 min</span>
      </div>
    </div>
  );
}
