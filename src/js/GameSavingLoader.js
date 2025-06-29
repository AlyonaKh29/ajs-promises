import { read } from './reader';
import { json } from './parser'
import { GameSaving } from './GameSaving';

export class GameSavingLoader {
  static load() {
    return read()
      .then(response => json(response))
      .then(data => {
        return new Promise(resolve => {
          const parsedData = JSON.parse(data);
          const savedGame = new GameSaving(parsedData);
          resolve(savedGame);
        })
      })
  }
}
