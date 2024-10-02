// 3-all.js
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
        .then((values) => {
            const { body } = values[0];  // From uploadPhoto
            const { firstName, lastName } = values[1];  // From createUser
            console.log(`${body} ${firstName} ${lastName}`);
        })
        .catch(() => {
            console.log('Signup system offline');
        });
}
