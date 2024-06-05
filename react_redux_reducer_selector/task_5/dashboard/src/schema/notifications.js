import { normalize, schema } from 'normalizr';
import data from '../../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity(
    'notifications',
    {
        author: user,
        context: message,
    },
    { idAttribute: 'id' }
);

const normalizedData = normalize(data, [notification]);

const getAllNotificationsByUser = (userId) => {
    const { notifications } = normalizedData.entities;
    if (!notifications) return [];
    const userNotifications = normalizedData.result.filter(
        (notificationId) => notifications[notificationId]?.author?.id === userId
    );

    return userNotifications.map((notificationId) => notifications[notificationId].context);
};

export const { notifications, users, messages } = normalizedData.entities;
export { getAllNotificationsByUser };
