// eslint-disable-next-line no-unused-vars
import photosDB from './photos.json';
// eslint-disable-next-line no-unused-vars
import friendsDB from './friends.json';

export default {
<<<<<<< HEAD
<<<<<<< HEAD
  getRandomElement(array) {
    if (!array.length) {
      return null;
    }

    const index = Math.round(Math.random() * (array.length - 1));

    return array[index];
  },
  getNextPhoto() {
    const friend = this.getRandomElement(friendsDB);
    const photos = photosDB[friend.id];
    const photo = this.getRandomElement(photos);

    return { friend, url: photo.url };
  },
=======
  getRandomElement(array) {},
  getNextPhoto() {},
>>>>>>> 102c093 (loft photo)
=======
  getRandomElement(array) {},
  getNextPhoto() {},
>>>>>>> 102c093 (loft photo)
};
