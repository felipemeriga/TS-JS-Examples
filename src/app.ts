// Important Links

// Stack and Queue Implementing on Typescript
// https://dev.to/glebirovich/typescript-data-structures-stack-and-queue-hld

// Big O cheat sheet
// https://www.bigocheatsheet.com/

// Inline IF
// @ts-ignore
// @ts-ignore

const var1: boolean = true
const var2: boolean = false

const var3: boolean = var1 === true && var2 === false

type YewlType<T> = () => T

interface Animal<T> {
    race: string
    yewl: YewlType<T>
}

interface Men<T> extends Animal<T> {
}

const ReturnMan = (): Men<string> => ({
        race: "Man",
        yewl() {
            return "It's me!"
        }
    }
)
interface Random {
    apply<T>(data: T): () => string
}

const returnRandom = (): Random => {
    return {
        apply<T>(data: T): () => string {
            return function () {
                return 'ae'
            }
        }
    }
}

const submit = (name: string) => {
    console.log(name)
}

const submitComplex = (name: string) => {
    return function () {
        console.log(name)
    }
}

const returnFunctions = () => {
    return {
        submitNormal: submit,
        submitWithData: (params?: any) => submitComplex(params.name)()
    }
}

const functions = returnFunctions()
functions.submitNormal('Felipe')
functions.submitWithData({
    name: 'Pedro'
})

// Promises and Event Loop

// Javascript is a single thread languages, and with the power if the callback queue and event loop, offered by the
// runtime environment, this makes us think that it's a multithread language, but it's not.
// Promises were revealed on ES2016, to solve the callback hell, which is when we have a lot of callbacks, one inside others,
// and for every callback repsonse you will need to do an if-else clause, to check if it was sucessfull or not, with Promises, we have
// a more readable code, with the option to use .catch and then, to evaluate errors or the results.
// Everytime you use .then or .catch, which is assynchronous, you are sending it to the callback queue, and when the
// main callstack is free, it will be pushed to it, by event loop.
// Promises have priorities over timeouts, because they are placed in the microtask queue.
const returnPromiseTimeout = (): Promise<string> => new Promise<string>(resolve => resolve('This value will be printed first!'))

setTimeout(function(){
    console.log("This value will be printed second!")
},0)

setTimeout(function(){
    console.log("This value will be printed third!")
},0)

returnPromiseTimeout().then(r => console.log(r))

setTimeout(() => console.log('Hello World'), 5000)

// Promises and API Calls
// function api<T>(url: string): Promise<void | T> {
//     return fetch(url).then(
//         response => {
//             if(response.ok) {
//                 return response.json()
//             }
//         }
//     ).catch(err => console.log(err))
// }


function API<T>(url: string): Promise<T> {
    return fetch(url).then(response => {
        if(response.ok) {
            return response.json()
        }
    }).catch(err => console.log(err))
}

// We can use Promise notation on Typescript, to create a generic way of resolve promises,
// for example, if you have a function that executes a fetch on an API endpoint, regardless the
// endpoint you are doing the request, you can catch errors, and return them on a standardized way
// that suits your project needs
interface APIError {
    errorCode: number
    message: string
}
function CustomAPI<T>(url: string): Promise<T | APIError> {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => {
            if(response.ok) {
                resolve(response.json())
            }
        }).catch(err => reject({
            errorCode: 120,
            message: err
        }))
    })
}

// Event Loop Promise Creation

// This next function, even that returns a promise, it's totally synchronous, if you call it,
// you will see that the 'Resolving promise' will be printed right away.
// This happens, because we are just creating the promise, but we are not evaluating that, if we call
// this function, the registers on the main call stack will be added in this following order
// 1 - returnPromise is added to the bottom of the stack
// 2 - new Promise will be added to the stack
// 3 - console.log will be added to the stack, will be executed synchronously and removed right away
// 4 - new Promise will be removed from the stack
// 5 - returnPromise will be removed from the stack
function returnPromise(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        console.log('Resolving promise')
        resolve('Hello World!')
    })
}

// Await and Async
// Were inserted on ES2017, like promise came to make having a callback chaining easier, Await came as a syntactic sugar
// for promise chaining, improving the readability. But, many people things that this blocks the code, but let's take a
// look on what really happens.
async function getUserData(){
    let response1 = await fetch('https://jsonplaceholder.typicode.com/users');
    let response2 = await fetch('https://jsonplaceholder.typicode.com/users');
    let response3 = await
        fetch('https://jsonplaceholder.typicode.com/users');
    console.log("After all promise is executed");
}
getUserData();
console.log('This will be first')
// You will see that Hello World will be printed first, because the getUserData will be sent to callback queue since
// it's assynchronous. But as we said, await is just a syntactic sugar, what await is doing on the background is like this:
// function getUserData()
// promise.then(response1 => {
//     promise.then(response2 => {
//         promise.then(response3 => {
//             console.log("Inside the promise"); // Will be printed later
//         }}
// }}
// })
// getUserData()


// List manipulation

// Array methods
// concat - Joins two or more arrays, and returns a copy of the joined arrays
// copyWithin - Copies array elements within the array, to and from specified positions
// entries - Returns a key/value pair Array Iteration Object
// every - Checks if every element in an array pass a test
// fill - Fill the elements in an array with a static value
// filter - Creates a new array with every element in an array that pass a test
// find - Returns the value of the first element in an array that pass a test
// findIndex - Returns the index of the first element in an array that pass a test
// forEach - Calls a function for each array element
// from - Creates an array from an object
// includes - 	Check if an array contains the specified element
// indexOf - Search the array for an element and returns its position
// isArray - Checks whether an object is an array
// join - Joins all elements of an array into a string
// keys - Returns an Array Iteration Object, containing the keys of the original array
// lastIndexOf - Search the array for an element, starting at the end, and returns its position
// map - Creates a new array with the result of calling a function for each array element
// pop - Removes the last element o f an array, and returns that element
// push - Adds new elements to the end of an array, and returns the new length
// reduce - Reduce the values of an array to a single value (going left-to-right)
// reduceRight - Reduce the values of an array to a single value (going right-to-left)
// reverse - Reverses the order of the elements in an array
// shift - Removes the first element of an array, and returns that element
// slice - Selects a part of an array, and returns the new array
// some - Checks if any of the elements in an array pass a test
// sort - Sorts the elements of an array
// splice - Adds/Removes elements from an array
// unshift - Adds new elements to the beginning of an array, and returns the new length

// ES19 + methods
// flat - flat inner arrays inside outer array, changing it to a single array


interface _Iterable extends Iterable<{}> {
    length: number;
}

class _Array extends Array {
    static range(from: number, to: number, step: number): number[] {
        return Array.from(
            <_Iterable>{length: Math.floor((to - from) / step) + 1},
            (v, k) => from + k * step
        );
    }
}

const list1 = _Array.range(0, 9, 1);

const list2 = Array.from([1, 2, 3, 4, 5], (v, k) => v > 2 ? k : 0)


class Counter implements Iterator<number> {
    private counter = 0;

    constructor(public myList: number[]) {
    }

    public next(): IteratorResult<number> {
        const len = this.myList.length;
        if (this.counter + 1 > len) {
            return {
                done: true,
                value: null
            }
        }
        return {
            done: false,
            value: this.myList[this.counter++]
        }
    }
}

// String Methods
// concat - Returns two or more joined strings
// endsWith - Returns if a string ends with a specified value
// includes - Returns if a string contains a specified value
// indexOf - Returns the index (position) of the first occurrence of a value in a string
// lastIndexOf - Returns the index (position) of the last occurrence of a value in a string
// match - 	Searches a string for a value, or a regular expression, and returns the matches
// replace - 	Searches a string for a value, or a regular expression, and returns a string where the values are replaced
// search - Searches a string for a value, or regular expression, and returns the index (position) of the match
// slice - Extracts a part of a string and returns a new string
// split - Splits a string into an array of substrings
// startsWith - Checks whether a string begins with specified characters
// substring - Extracts characters from a string, between two specified indices (positions)
// trim - Returns a string with removed whitespaces


// Substring and Reversing Arrays
let myString = 'Hello World'
const reversedArray = myString.split('').reverse().join('')
// // You can use Array.from or spread operator, the first one always create a new array, spread doesn't create a new array
const reversedArray2 = [...myString].reverse().join('')
const reversedArray3 = Array.from(myString).reverse().join('')

// Removing numbers from arrays
const stringWithNumbers = 'asd1dshd217hdsahda'
const stringWithoutNumbers = stringWithNumbers.split('').filter(value => isNaN(Number(value))).join('')

// Different Types of For
const forArray = _Array.range(0, 10, 1)
for (let i: number = 0; i < 10; i++) {
    console.log(forArray[i])
}

for (let i in forArray) {
    console.log(forArray[i])
}

for (let i of forArray) {
    console.log(i)
}

// Iterables Generators
function* stringGen(): IterableIterator<string> {
    console.log("Begin execution");
    yield "This value was yielded";
    console.log("End execution");
}

const gen = stringGen()

function setApiVersion(constructor) {
    return class extends constructor {
        version = '0.0.1';

        test() {
            console.log('test')
        }
    }
}

@setApiVersion
class Wizard {
    public version

    constructor(version?: string) {
    }
}


const printMatrixRecursivelly = (matrix: number[][], row: number, column: number, visited: boolean[][]) => {
    if ((row >= matrix.length) || (column >= matrix[0].length)) {
        return
    }
    if (visited[row][column]) {
        return
    }

    visited[row][column] = true
    console.log(matrix[row][column])
    printMatrixRecursivelly(matrix, row + 1, column, visited)
    printMatrixRecursivelly(matrix, row, column + 1, visited)
}


(() => {
    const startingMatrix: number[][] = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    const visitedMatrix: boolean[][] = [[false, false, false], [false, false, false], [false, false, false]]

    printMatrixRecursivelly(startingMatrix, 0, 0, visitedMatrix)
})();

// Training map
const myArray = [1, 2, 3, 4, 5]
const myMapArray = myArray.map(a => a * 2)
console.log(myMapArray)

// Training Filter
console.log(myMapArray.filter(n => n % 2 == 0))

// Training Reduce
console.log(myMapArray.reduce((prev, next) => prev + next))

// Training splice
console.log(myMapArray.splice(0, myMapArray.length - 2))

// Training Sort
const unsortedArray = [10, 12, 4, 2]

unsortedArray.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
})

// Object manipulation
const data = {
    brazil: {
        name: 'Brazil',
        capital: 'Brasilia',
        currency: 'real'
    },
    unitedStates: {
        name: 'United States of America',
        capital: 'Washington DC',
        currency: 'dolar'
    },
    ireland: {
        name: 'Ireland',
        capital: 'Dublin',
        currency: 'euro'
    }
}
const mappedObject = Object.values(data).filter(country => country.currency === 'dolar')
console.log(Object.values(data))

const objectArray = Object.values(data).map(value => value)

// Object looping
Object.entries(data).forEach(([key, value]) => {
    if (key === 'brazil') {
        value.name = 'Brasa'
    }
})


const singleValues = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10]
const mappedArray = new Map(singleValues.map((value, index) => [index, value]))



singleValues.forEach((record: number, index: number, array: number[]) => {

    if(record === 3) {
        mappedArray.delete(index)
    }
})
console.log([...mappedArray.values()])

const values = [1, 1, 2, 3, 3, 3, 3, 4, 5, 6, 6, 6, 7, 7, 8, 9, 10, 10, 10, 10, 10]


values.forEach((record: number, index: number, array: number[]) => {
    const currentArrayLength = array.length
    let nextIndex = index + 1

    while(nextIndex < currentArrayLength) {
       if (record === array[nextIndex]) {
           array.splice(nextIndex, 1)
       } else {
           break
       }
    }
})



