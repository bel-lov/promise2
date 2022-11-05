import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  const a = new GameSavingLoader;
  // const object = saving;
  // console.log(object)
  const object = JSON.parse(saving);
  // console.log(object)
  console.log(Object.getPrototypeOf(object));
}, (error) => {
  throw (new Error(error));
});