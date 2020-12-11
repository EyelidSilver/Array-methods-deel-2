//A
  const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]
  
  const findSpiderMan = superheroes.find(({name}) => name === 'Spiderman');
  
  console.log(findSpiderMan) 
 

//B
  doubleArrayValues = [1, 2, 3];

  const doubledArray = doubleArrayValues.map(x => x * 2);

  console.log(doubledArray)


//C
const array1 = [1, 4, 3, 6, 9, 7, 11];
const array2 = [1,2,1,2,1,2];

const containsNumberBiggerThan10 = array1.some(x => x > 10);

const containsNumberBiggerThan10 = array2.some(x => x > 10);

console.log(containsNumberBiggerThan10)



//D
const TheGreat7 = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];

const isItalyInTheGreat7 = TheGreat7.some(x => x == 'Italy');

console.log(isItalyInTheGreat7)


//E
   const tenfold = function () { 
        
        const integers = [ 1, 4, 3, 6, 9, 7, 11 ]; 
        const copy = []; 
  
        integers.forEach(function (integer) { 
            copy.push(integer * 10); 
        }); 
  
       console.log(copy); 
    } 
    tenfold(); 



//F
const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];

const isBelow100 = numbers.every(x => x < 100);

console.log(isBelow100)

//G
const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const bigSum = numbers.reduce((total, num) => total + num);

  console.log(bigSum)

  