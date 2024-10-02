// 100-await.js
import { uploadPhoto, createUser } from './utils'; // Adjust the path as necessary

export default async function asyncUploadUser() {
    try {
        const photo = await uploadPhoto('photo-profile-1'); // Call uploadPhoto and await the response
        const user = await createUser('Guillaume', 'Salva'); // Call createUser and await the response
        return { photo, user }; // Return the responses in an object
    } catch (error) {
        return { photo: null, user: null }; // Return an empty object if any promise fails
    }
}
