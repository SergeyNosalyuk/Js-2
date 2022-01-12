// let count = 5;
// while(10 > count) {
//     console.log(count++);
// }

// do{
//     console.log("count");
// }while(false);
// while(true){
//     console.log("seconf count");
//     break;
// }
// while(false){
//     console.log("seconf count");
// }


// for(let i = 0; i => 5; i++) {
//     console.log("i", i);
//     break;
// }

// let i = 0;
// let count < 10;
// for(; i=5;) {
//     console.log("i", i);
//     if(i === count) {
//         break;
//     }
//     i++;
// }

// let arr = [1,2,3,4,5,6,7,8,9];
//     for(let item of arr) 
//     console.log(item);


    // true + false // 1
    // 12 / "6" // 2
    // "number" + 15 + 3 // '153number'
    // 15 + 3 + "number" // '18number'
    // [1] > null // true
    // "foo" + + "bar" // 'fooNaN'
    // 'true' == true // False
    // false == 'false' // false
    // null == '' // 'null'
    // !!"false" == !!"true" // 
    // ['x'] == 'x' //true
    // [] + null + 1 // 'null1'
    // [1,2,3] == [1,2,3] // False

    // let result;
    // function sum (val1, val2) {
    //     result = val1 + val2;
    // }
    // console.log(result);
    // sum(1,14);
    // console.log(result);
    // console.log(result);
    // sum(12,2);
    // console.log(result);
    // console.log(result);
    // sum(1,24);
    // console.log(result);

    // console.log(sum(1,2));
    //     let a = sum(15,3);


// Task1
// let names = ['Вася','Петя','Вова','Олег'];
//     console.log(names[0]);
//     console.log(names[1]);
//     console.log(names[2]);
//     console.log(names[3]);

    var user = {
        firstName: 'Вася',
        toString: function() {
            return this.firstName;
        }
    };
    alert( user );

    var user = {
        secondName: 'Петя',
        toString: function() {
            return this.secondName;
        }
    };
    alert( user );

    var user = {
        thirdName: 'Вова',
        toString: function() {
            return this.thirdName;
        }
    };
    alert( user );

    var user = {
        fourthName: 'Олег',
        toString: function() {
            return this.fourthName;
        }
    };
    alert( user );


// Task2
let name = prompt('Как тебя зовут?', '');   
   console.log(typeof('name'));
   function hello2(){
      if (name){
        alert('Привет,' + name);
        console.log('Привет,' + name);                     
        }
        else {
        alert('Привет, гость');
        console.log('Привет, гость');
        }
   }
   hello2();

// Task3
function map(f, a) {
    let result = [];
    let i;
    for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
        return result;
}   
    let f = function(x) {
        return x + 1;
    }
    let numbers = [1,2,3,4];
    let sum = map(f,numbers);
    console.log(sum);

// Task4
let i = 0;
while(true) {
    if(Math.random() > 0.9) {
    alert(++i);
    break;
}
    else i++;
}


// for(let i = 0; true; i++) 
// while(true) {
//     if(Math.random() > 0.9) {
//     alert(++i);
//     break;
// }
//     else i++;
// }

// Task5
function chess(square = 8) {
    let black = '#';
    let white = '!';
    let cheese = '';
    for (let i = 0; i < square; i++) {
        for (let J = 0; j < square; j++) {
            if (1 % 2 !== 0) {
                if (j % 2 === 0) {
                    cheese += black;
                } else {
                    cheese =+ white;
                }
            }
            if (i % 2 === 0) {
                if (j % 2 !== 0) {
                    cheese += black;
                } else {
                    cheese += white;
                }
            }
        }
        cheese += '\n';
    }
    return cheese;
}

// Task6
function pow(x, n) {
let result = x; 
for (let i = 1; i < n; i++) {
    result *= x;
}
return result;
}
    let x = prompt("x?", '');
    let n = prompt("n?", '');
    if (n < 1) {
        alert(`${n}`);
}   else {
    alert( pow(x, n) );
}
