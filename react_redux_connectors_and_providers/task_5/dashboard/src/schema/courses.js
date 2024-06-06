import { schema } from 'normalizr';

export const courseSchema = new schema.Entity('courses');

export const coursesNormalizer = data => normalize(data, [courseSchema]);
