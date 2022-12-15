import { Notification, NotificationProps } from '@application/entities/notification';
import { Content } from '@application/entities/notification/content';

type OverrideProps = Partial<NotificationProps>;

export function makeNotification(override: OverrideProps = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Você tem uma nova notificação'),
    recipientId: 'recipient-2',
    ...override,
  });
}
