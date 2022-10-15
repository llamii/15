export default class Helpers {
     shuffleArray = (arr) => arr
        .map(e => ({ e, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ e }) => e)

     canBeMoved = (moved, empty) => {
          return moved - 1 === empty || moved + 1 === empty || moved + 4 === empty || moved - 4 === empty;
     }
}





