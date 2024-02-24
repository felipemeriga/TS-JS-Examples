


// ES12 - ES2021 New features

// String.prototype.replaceAll()
// With this function you can replace all occurrences of a substring on a string
// Before we only had replace, which replaces only the first occurrence

let str = "I like programming. I like my job."
str.replaceAll ( "like" , "love" )
console.log(str)


// Promise.any()
// Basically, get executed whenever the first promise resolves, and doesn't care about the another ones
Promise.any ([ new Promise ( ( resolve, reject ) =>
    setTimeout (reject, 100 , '1st' )),
    new Promise (( resolve, reject ) => setTimeout (resolve, 200, '2nd')) ])
    .then ( value => console .log ( `first completed process: $ {value} `))
    .catch (err => console .log (err))



 // WeakRef
// Creates a reference to an object, and if it's not strongly referenced, it will be sent to garbage collector.
const student = {
    name: 'John Doe',
    age: 20,
    address: {
        number: 365,
        street: 'Flower street'
    }
}
const ref = new WeakRef(student);
ref.deref().age;


// Private class methods
class Auth {
    #getToken() {
        return "12345678";
    }
    isAuth() {
        return this.#getToken();
    }
}
const auth = new Auth();
auth.isAuth(); //output: 12345678

// Logical Nullish assignment
// This one assign a value to a property that has not been defined

const person = { name: 'John' };
person.name ??= 'User 1';
console.log(person.name);
// output: John
// person.age ??= 18;
// console.log(person.age);
// output: 18

// Logical AND assignment
// If the property already exists, a new value will be assigned to it, otherwise it will remain undefined
const product = { stocks: 10 };
product.stocks &&= 20;
console.log(product.stocks);
// output: 20
// product.exp &&= '12/31/2021';
// console.log(product.exp);
// output: undefined

