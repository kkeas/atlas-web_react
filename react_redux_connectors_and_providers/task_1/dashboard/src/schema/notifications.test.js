import { normalizedData, getAllNotificationsByUser } from './notifications';

describe('Normalized Data', () => {
    it('contains correct result array', () => {
        const resultArray = [
            '5debd76480edafc8af244228',
            '5debd764507712e7a1307303',
        ];

        expect(Object.keys(normalizedData.entities.notifications)).toEqual(expect.arrayContaining(resultArray));
    });

    it('contains correct users entity', () => {
        const userId = '5debd764a7c57c7839d722e9';
        const expectedUser = {
            age: 25,
            email: 'poole.sanders@holberton.nz',
            id: userId,
            name: { first: 'Poole', last: 'Sanders' },
            picture: 'http://placehold.it/32x32',
        };

        expect(normalizedData.entities.users[userId]).toEqual(expectedUser);
    });

    it('contains correct messages entity', () => {
        const messageGuid = 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41';
        const expectedMessage = {
            guid: messageGuid,
            isRead: false,
            type: 'default',
            value: 'Cursus risus at ultrices mi.',
        };

        expect(normalizedData.entities.messages[messageGuid]).toEqual(expectedMessage);
    });

    it('contains correct notifications entity', () => {
        const notificationId = '5debd7642e815cd350407777';
        const expectedNotification = {
            author: '5debd764f8452ef92346c772',
            context: '3068c575-d619-40af-bf12-dece1ee18dd3',
            id: notificationId,
        };

        expect(normalizedData.entities.notifications[notificationId]).toEqual(expectedNotification);
    });
});

describe('getAllNotificationsByUser', () => {
    it('returns correct notifications for a given user', () => {
        const userId = '5debd764a7c57c7839d722e9';
        const result = getAllNotificationsByUser(userId);

        const expected = [
            {
                guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
                isRead: true,
                type: 'urgent',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            },
            {
                guid: '280913fe-38dd-4abd-8ab6-acdb4105f922',
                isRead: false,
                type: 'urgent',
                value: 'Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed',
            },
        ];

        expect(result).toEqual(expect.arrayContaining(expected));
    });
});
