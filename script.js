'use sctrict';
// Task 1 : find sum of all elements 
function sumThemAll (...args){
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
console.log(sumThemAll(1,5,3,10));

// Task 2 : The task of using closure
function multiply(a) {
    return function(b) {
        return a * b;
    };
}
const result = multiply(3)(4);
console.log(result); 

// Task 3 : sort movies array  
const movies = [
    {
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},

	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];
//movies.sort((a,b) => a.releaseYear - b.releaseYear );
console.log(movies);

function byProperty (propertyName, direction){
    
        /*let sortOrder;
        if (direction === '>') {
        sortOrder = 1;
        } else {
        sortOrder = -1;
        }
        */
        //const moviesCopy = [...movies];
        return function (a, b) {
            const sortOrder = direction === '>' ? 1 : -1;
        
            if (typeof a[propertyName] === 'string') {
              return sortOrder * a[propertyName].localeCompare(b[propertyName]);
            }
        
            return sortOrder * (a[propertyName] - b[propertyName]);
          };
    
}
console.log(movies.slice().sort(byProperty('releaseYear', '>')));
console.log(movies.slice().sort(byProperty('runningTimeInMinutes', '<')));
console.log(movies.slice().sort(byProperty('movieName', '>')));

// Task 4 Напишіть функцію яка відфільтрує масив унікальних значень
const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
  const uniqueSet = new Set(array);
  return [...uniqueSet];
}
console.log(userNames);
console.log(filterUnique(userNames));

