// function bb(){
//     var a = 'sad';
// }


// function isUserValid(bool){
//     return bool;
// }

// var ans = isUserValid(true) ? "Come" : "noi" ;



// let and constant

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
}


// objects

const name = 'John Smith';

const obj = {
    [name]: 'hello',
    [3+2]: 'hihi'
}

// string formatting

const n = 'Abdul';
const age = 22;

console.log(`Yo ${n} my age is ${age}`);


// arrow function

let add = (a,b) => a+b;


// Closures - https://javascript.info/closure

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second
}

const newFunc = first();
newFunc();


// Currying

const mul = (a,b) => a*b;

const curry = (a) => (b) => a * b ;

curry(2);

// Compose 

const compose = (function1, function2) => (some_parameter) => function1(function2(some_parameter));

const compose_broken = function (f1, f2) {
    return function inner_func (new_parameter) {
        return f1(f2(new_parameter));
    };
};

// for each 
// for each method runs a function provided on each element of the array it iterates on 
const double = [];
array.forEach( (num) => double.push(num+1) );



// map , filter, reduce
// map transforms the array and returns a result 
// map never mutates the original array, it always returns new.
arr = [1,2,3,4];
const mapArr = arr.map((num) => {
    return num*2;
});
console.log('map', mapArr);

// filter
// filter will check the condition mentioned , that is if the element satisfies it or not and then return it
const filter = arr.filter(num => num>5);

// reduce


// complex example - flattening array

const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];

function flatten(data) {
    const helperArr = [];

    return data.reduce((acc,item) => {
        console.log(acc,item);
        return acc.concat(Array.isArray(item) ? flatten(item) : item);
    }, helperArr);
}

flatten(numArray);

// let - best resource : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// let variables are defined in scope {...}
// they cannot be accessed before initilization
// the TDZ starts from block scope and terminates at initilization of variable
// we can write variables inside function that havent been declared yet, but after they are declared, we can run that function
// before the TDZ has ended, variables cannot be accessed.



// reference type in js
// in js, similar to python stuff are objects

let object1 = {val:10}; // creates a object at memory location with val :10 ( say this is a box1)
let object2 = object1; // binds a reference to the box created previously (to box1) 
let object3 = {val:10}; // new {} braces create a new box (data structure of type object , at a new mem loc)

object2.val  = 15 // will change object1.val as well. as they refer to same box ( or mem location )

[] === [] ; // will give false as both of the arrays are diff data structures
// we do this with objects only because we can save space
// objects can be deep copied by doing: 

let obj = {a:'1', b:'2', c:'3'};
let clone = Object.assign({}, obj);
// or
let clone2  = {...obj}

// however, primitive types like variables are passed by value
var a = 5;
var b = a; // a is not passed as reference, b is given the copy 
b++ ;
console.log(a); // gives 5
console.log(b); // gives 6

// CONTEXT vs scope
// this is scope
function b() {
    let a = 4;
    // the {} for let creates its own universe, or simply scope. accessing this outside this {} block of it gives error.
}

// context

const object4 = {
    a: function() {
        console.log(this);
    }
};


// Object oriented and this key word

class Player {
    constructor(name,type) {
        console.log('player',this);
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`hi I am ${this.name} and of type ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name,type) {
        super(name, type)
        console.log('wizard', this);
    }

    play() {
        console.log(`hello i iz ${this.type}`);
    }
}

const wizard1 = new Wizard('Shawn','Healer');

// this = object
// when we write new, it creates a object wizard
// this wizard object has a name called wizard1
// when an object is created using new keyword, constructor runs
// this constructor defines initial conditions about the object
// in our case, the constructor takes two arguments, for the object created, and asks the parent class for further declaration
// the this word, binds wizard1.name = shawn, and wizard2.type = healer 



// includes:
pet = ['dog', 'cat', 'bird'];

pet.includes('dog');


// exponential
const sqr = (x) => x**2;


// object iteration :

let obje = {
    username0 : 'Abdul',
    username1 : 'Muneeb',
    username2 : 'Sad'
};

Object.entries(obje).forEach(value => {console.log(value);});

Object.values(obje).forEach(val => console.log(val));

Object.keys(obje).forEach(val => console.log(obje[val]));

// #3) Get the below object to go from:
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  // to this:
  'my name is Rudolf the raindeer'
  
Object.entries(obj).map(value => value.join(" ")).join(' ')

// flat
// flat takes how deep the arr should go
// if there is deep nested array, just put a damn big number in it 
const arr = [1,2,[3,4],[5,6]]
arr.flat()


// trim

const usernam = '     lol';
console.log(usernam.trimStart())
const nn = 'ss  '
console.log(nn.trimEnd())


// form entries
// makes a array into object
const prof = [['sad',12],['not',50]];
Object.fromEntries(prof);


// try catch

// try tries a piece of code
// catch occurs if error occurs

try {
    bob + 'hi';
} catch (error) {
    console.log('rip u ' + error);
}

// forof - like 'in' of python

let basket = ['apples','oranges']

for (item of basket){
    console.log(item);
}

// can also do
// iterables can be iterated with for of - array and strings

for (element of 'YoIterateOverThisString'){
    console.log(element);
}

// for in loop works for objects
// allows to loop and see object properties
// for enumerating = objects
let detailBasket = {
    apples : 5,
    oranges : 10,
    grapes : 15
};

for (item in detailBasket){
    console.log(item);
}

// for in on an array gives indexes. as arrays are also objects with keys starting from 0

// Max value in js
Number.MAX_SAFE_INTEGER;


// level 1 flattening with debugger

const arre = [[1,2],[3,4],[5,6]];

const fla = arre.reduce((acc,item) => {
    debugger;
    return acc.concat(item);
},[]);


// Async and promises

setTimeout(() => {
    console.log('Timer is done');
}, 2000);

console.log("hello");
console.log("hi");

// another example

const fetchData = takeSomeFunction => {
    setTimeout(() => {
        takeSomeFunction('Take some Function is running');
    }, 1500);
};

setTimeout(() => {
    console.log('Main timer (2s) is now done');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

// promise


const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 1500);
    })

};

setTimeout(() => {
    console.log('Main timer (2s) is now done');
    fetchData(text => {
        console.log(text);
    });
}, 2000);


// Synchronous code is executed line by line in a single flow
// Async code is to start something now and finish it later , as some tasks like network requests or api calls take more time, so we can run the latter code , but along with that we can start the slower process and get the result later

// js can only execute one thing at a time though


const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            callback(undefined,request.responseText);
        }
        else if(request.readyState === 4){
            callback('Cannot Fetch Data',undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    request.send();
};



getTodos((err, data) => {
    console.log('callback is fired');
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});


// Promise concept - 

//  1. Make a function, that does some kind of network / api request. 
//  2. When the data from the request is received, then , use the call back function passed in the original function to do stuff. :D

const getSomething = () => {
    return new Promise((resolve, reject) => {
        // fetch something
        resolve('some data'); // resolve and reject are in built in the promise api.
        // reject('some error instead');
    });
}
 

// When we call getsomething, we return a new promise, we return success and resolve some data

// getSomething();

// when we call it, it returns a promise, and inside that promise it will resolve or reject
// promise says , " i will do something at some point, im either gonna resolve or reject at some point"
// okay, so put a .then method and I will fire that function when we resolve the promise

getSomething().then(
    (data) => {
        console.log(data); // if resolved, data is run
},
    (err) => {
        console.log(err);  // if rejected, err is thrown
    });


// when we resolve something in the promise, it fires the then method and whatever function is in then method, it will run it.
//  promises - we either resolve something, or reject something. then fire one of those two functions depending on them

// another way -

getSomething().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


//  practical promise example 

const getTodos = () => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4){
                reject('error getting data');
            }
        });
    
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.send();
    });

};



getTodos().then((data) => {
    console.log('promise resolved: ', data);
}).catch((err) => {
    console.log('promise rejected: ', err);
})


// Chaining promises

const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4){
                reject('error getting data');
            }
        });
    
        request.open('GET', resource);
        request.send();
    });

};



getTodos('sad.json').then((data) => {
    console.log('promise 1 resolved: ', data);
    return getTodos('sad2.json');
}).then((data) => {
    console.log('promise 2 resolved: ', data);
}).catch((err) => {
    console.log('promise rejected: ', err);
})


// fetch api

// fetch api

fetch('sad.json').then((response) => { // fetch returns a promise, and fires a function when it is resolved
    console.log('resolved', response);
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});


//  fetch is a new way of making requests 
// fetch only rejects when there is network error 
// if the resource cannot be found, the output is still obtained but has 404 status
// we can get the actual data by returning the response.json() which returns a promise
// now this can be returned, so the whole function returns a promise
// when this promise is returned, we can add a then method to access the data

// see, then runs on a PROMISE only. then runs when there is success, that is RESOLVE, and catch runs the same but on reject 

// ASync and await

const getTodos = async () => {
    const response = await fetch('sad.json'); // returns a promise, await replaces the need to attach a then method after fetch returns a resolved promise
    // await tells to stall javascript untill a response is got
    // then, after getting a response it gives it to the variable. this is also a response 
    // earlier we had to put a return statement and then put a then method on this response also
    // but , like i mentioned, await replaces the need for then() and return 

    if(response.status !== 200){
        throw new Error(); // creating new error object throws a new error
        //  the promise returned by async function is rejected if an error is throw
        //  we do this as the fetch still gets a response even if there is error at source. For that we need to check its status, if its anything except 200 it is a problem. 
        //  so we throw an error after the response is got
    }
    

    const data = await response.json(); // access the promises's json , which is a promise

    return data;
};

// an async keyword makes getTodos a promise , it is non blocking.

console.log(1);
console.log(2);

getTodos() // the whole thing also returns a promise. Promise has only two things. then() --> resolve, catch()--> reject
    .then(data => console.log('resolved: ', data)) // use then to get resolved data
    .catch(err => console.log('error fetching: ', err.message));

// console.log(test);

console.log(3);
console.log(4);


// ADvantages of async await -
// 1. Non blocking code, and systematically defined in one function. A function, just for pure async task.
// 2. Readable code, can easily chain promises one after other

