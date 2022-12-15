import { Notification } from './notification';
import { Content } from './notification/content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'example-recipient-id',
      content: new Content('Você tem uma nova notificação'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
