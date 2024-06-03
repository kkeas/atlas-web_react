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

export { normalizedData };


import data from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
    return data
        .filter((notification) => notification.author.id === userId)
        .map(({ context }) => context);
};

export { getAllNotificationsByUser };
