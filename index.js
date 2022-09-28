// const playlist = {
//   name: [1, 2, 3],
//   a: 5,
//   b: 10,
// };
// console.log(playlist);
// ============================================================================

// const playlist = {
//   name: `Мой супер плейлист`,
//   rating: 5,
//   tracks: [`track-1`, `track-2`],
//   trackCount: 3,
// };

// // new свойство || changes
// playlist.hjbdf = 5;
// console.log(playlist);

// const propertyName = `tracks`;
// ==================================== Короткая запись ===========================
// console.log(playlist[propertyName]);

// const userName = `Mango`;
// const email = `mango@mail.com`;

// const signupData = {
//   userName,
//   email,
// };
// console.log(signupData);

// ==================================== Вычесляэмые свойства =========================

// <input name = `color` value = `tomato`>

// const inputName = `color`;
// const inputValue = `tomato`;

// const colorPickerData = {
//   [inputName]: inputValue,
// };
// console.log(colorPickerData);

// ===================================== Ссылочный тип {} === {}========================
// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.c = 100;

// console.log(a);
// console.log(b);

// ==================================== Массиві и функции это обьекты ====================
// const arr = [1, 2, 3];

// arr.hello = 4;

// console.log(arr);

// const fn = function () {
//   console.log(`hello`);
// };
// fn.hello = `:)`;
// console.dir(fn);
// ==================================== Methods ========================================

// const playlist = {
//   name: `Мой супер плейлист`,
//   rating: 5,
//   tracks: [`track-1`, `track-2`],
//   trackCount: 3,
//   //   getName: function () {
//   //     console.log(`"This is function get :`);
//   //   },
//   getName() {
//     console.log(`"This is function get :`);
//   },
// };

// playlist.getName();

const playlist = {
  name: `Мой супер плейлист`,
  rating: 5,
  tracks: [`track-1`, `track-2`],
  //   trackCount: 2,
  changeName(newName) {
    // console.log(this);

    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
    // this.trackCount = this.tracks.length;
  },
  updateRating(rating) {
    this.rating = rating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

// console.log(playlist);
console.log(playlist.getTrackCount());
playlist.changeName(`New name`);
playlist.addTrack(`track-3`);
console.log(playlist.getTrackCount());
playlist.updateRating(7);

console.log(playlist);
