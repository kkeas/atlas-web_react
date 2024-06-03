import data from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
    return data
        .filter((notification) => notification.author.id === userId)
        .map(({ context }) => context);
};

export { getAllNotificationsByUser };
