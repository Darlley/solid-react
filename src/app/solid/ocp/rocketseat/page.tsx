'use client';

import { Check, Forward, Rocket, X } from 'lucide-react';
import { Notification } from './Notification';
import NotificationActions from './Notification/NotificationActions';

export default function page() {
  return (
    <div className="flex w-full justify-center items-center h-svh">
      <div className="w-[448px] rounded overflow-hidden shadow-2xl shadow-violet-500/20 border-4 border-zinc-800">
        {/* header */}
        <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
          <span className="font-bold">Notificações</span>
          <button className="text-violet-500 font-bold text-xs hover:text-violet-400 uppercase">
            Marcar todas como vistas
          </button>
        </div>

        {/* recent notification */}
        <div>
          <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
            Recentes
          </div>

          <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
            <Notification.Root>
              <Notification.Icon icon={Rocket} />
              <Notification.Content content="Você recebeu um convite para fazer parte da empresa Rocketseat." />
              <NotificationActions>
                <Notification.Button icon={X} onClick={() => alert('abort')} />
                <Notification.Button
                  icon={Check}
                  className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-800"
                  onClick={() => alert('confirm')}
                />
              </NotificationActions>
            </Notification.Root>

            <Notification.Root>
              <Notification.Content content="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            </Notification.Root>
          </div>

          <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
            Antigas
          </div>

          <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
            <Notification.Root>
              <Notification.Content content="Você recebeu um convite para fazer parte da empresa Rocketseat." />
              <NotificationActions>
                <Notification.Button
                  icon={Forward}
                  className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-800"
                  onClick={() => alert('forward')}
                />
              </NotificationActions>
            </Notification.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
