//~ AS a programmer in javascript start with HELLO World, it is act like python languege
// console.log("Hello world");

/*
! In any languege their are some basic Idea present
@1. data type and Variable(it syntex different from C language)
@2. operator and operand (some mislenious operator)
@3. condition and branching(Same as C language)
@4. looping , break , continue (break and continue are same C languege)
@5. function(Same as C language)
@6. non premitive data type and structure(some nonpremitive ds -- array , object(map) )
@7. class and dynamic allocation
@8. library and import files

! some part for working with of Wed development
@1. Dom(Document object model) manupulation in Javascript
@2. quary of document
@3. Events in javascript
@4. settime and setinterval
@5. local storage javascripts
@6. JSon --> is a javascirpt notation object (it is very improtance for transpotation information)
@7. version of javascript and ECMAScript version 

*/


//* taking input in javascripts
// const prompt = require('prompt-sync')();
// var name = prompt('What is your name? ');
// console.log('Hi ' + name);


//* some print type of methode for javascript
// console.log("Hello world",(4+6),"another log");
// console.warn("warning the JS");
// console.assert(4==(6-2));
// console.clear();

//* variable in javascript
// number type variable
// var num1 = 23 ;
// var num2 = 34 ;
// console.log(num1+num2);

// string type variable
// var str1 = "This is also a string";
// console.log(str1);

// object type(map type) variable
// var obj ={
//         deb : 34 ,
//         raj : 35 ,
//     	das : 353 ,
//     };
// console.log(obj);

// boolean type variable

// var a = false ;
// var b = true ;
// console.log(a, b);
// console.log(typeof(str1));  // typeof use for see the type of variable
// if(a)
//     console.log("This variable is true");
// else
//     console.log("this variable is false");

//* any variable by default undefine
// e.g, var  und  ; then also it print undefined
// var und = undefined ;
// console.log(und);
// console.clear();

//* IN higher leval data types are two type
// 1. Primitive data type - undefine(default) , null , number , string , boolean , symbol
// 2. Reference data type - array(like other languege)  , object(like map data struture)

// array example (it act like a vector of C++ except it store different type variable)
// var arr = [2, 4 , "hello" , 6];
// console.log(arr);
// string can be 'hello' or "hello"

//* operator of javascript completly same as C languege
// arithmatic operator
// var a = 9 ;
// var b = 93 ;
// console.log("sum of a + b : ",a+b);
// console.log("division is a/b = ",a/b);

// assignment operator
// var a = 98 ;
// var b = a ;
// b += (b+23);
// console.log(b);

// their some basic operator in logical operator -->
// 1. comparation operator (< , <= , > , >= , == , != )
// 2 . logical operator (and(&&) , or(||) , not(!) , bitwish_operator(like c languege) )

// var a = 9;
// var b = 0;
// if (a < b) console.log("hello world every one");
// else console.log("nice to meet you");

// console.log(a && 1);

//* function (basic idea on function) same as C execpt Variable definition
// DRY = Do not repeat yourself
// function sum(a, b) {
//   var c = a + b;
//   return c;
// }

// console.log(sum(23, 624));

//* conditional statement in js same a C languege
// if else
// swith case
// var a ;
// a = (1>2)? 6:7 ;
// console.log(a);

//* looping statement as C languege execpt for each loop
// var arr = [2, 4, 5, 5, 6, 6];
// for loop
// for(var i = 0 ; i<arr.length;++i)
// console.log(arr[i]);

// for each loop
// arr.forEach(function (element) {
//   console.log(element);
// });

// while loop
// var i = 0 ;
// while(i<arr.length)
// {
//   console.log(arr[i]);
//   ++i ;
// }

// Do while loop
// var i = 0;
// do {
//   console.log(arr[i]);
//   ++i;
// } while (i < arr.length);

//* let is local type variable
// {
//   let a = 09;
//   console.log(a);
// }

// console.log(a); // there a is not present so a error in code
// const a = 0;
// a += 2; // constant variable vaule you can not change
// console.log(a);

/*
~ some variable idea
*  gobal -- var
*  local -- let
*  constant -- const
*  static -- 

*/

//* Some array method
// var arr = [2, "Debraj Das", null, undefined, { nume: 3 }, true, [3, 35]];
// console.log(arr.length, typeof(arr));
// for (let i = 0; i < arr.length; ++i) console.log(typeof arr[i]);

//# pop and push method of array
// arr.pop();
// arr.push(323);

//# shift(front_pop) and unshift(front_push) (it is like pop and push at front)
// arr.shift();
// arr.unshift("bappy"); // it return length of new string

//# other method present(H.W for finding and used all of it)
// sort
//

// arr.forEach(function (element) {
//   console.log(element);
// });

//* String method in Javascript

// let str = "my name is Debraj Das is";
// console.log(str.length);
// console.log(str.indexOf("is"));
// console.log(str.lastIndexOf("is"));
// console.log(str.slice(4, 7));  // 4 index include but 7 index exclude
// other method see in internet for use time
// e.g - substring , replace etc

//* Java script Data
// let das = new Date();
// console.log(das.getTime());
// console.log(das.getFullYear());
// console.log(das.getDate());
// find out other method of Date Object in internet and use it

//* new keyword for dynamic allocation and delete keyword for delete dynamic object

/*
! Dom(Document object model) manupulation in Javascript
 It is importance for Web development Courses
 Because it give to intereact with web page

Some comment for Dom manupulation

  document
  document.location
  document -- element get and also run different type operation 
  as example document.getElementbytagname('nav'); etc
  


*/

// document
// document.location
// dom mean which visuable for use in Web page

// document.images

// it can do by user interaction or internet fatch other reason
// document.getElementById("name").style.border = '2px  dashed red';

// var n =  document.getElementById('name');
// console.log(n);
// n.style.margin = '3px' ;
// n.style.border = '2px solid red';
// n.style.color = 'aqua' ;
// n.style.backgroundColor = 'black';
// console.log(n.innerText);

// var tag = document.getElementsByClassName('red');
// console.log(tag);

// var cr = document.createElement('p');
// cr.innerText = 'This is a paragraph';

// tag[0].appendChild(cr);
// internet search for different function

//* quary of document

// var sel = document.querySelector('.red'); // it use like CSS so if you good at css you use it frequently
// console.log(sel);

//@ Events in javascript

// window.onload = function()
// {
//   console.log("page load safely");
// }

//*
// function clicked()
// {
//   console.log('the button is click');
// }

// head.addEventListener('mouseover',function(){
//   console.log('mouse is over in the head container');
// })

// head.addEventListener('mouseout',function(){
//   console.log('mouse is out in the head container');
// })

//*
// let red = document.querySelector('#code') ;

// let prevhtml = red.innerHTML ;

// head.addEventListener('mouseup',function(){
//   red.innerHTML = prevhtml ;
//   console.log('mouse is up in the head container');
// })

// head.addEventListener('mousedown',function(){
//   red.innerHTML = "<b> This is clicked </b>";
//   console.log('mouse is down in the head container');
// })

//*
// let log = document.querySelector('#log');
// document.addEventListener('click', logKey);

// function logKey(e) {
//   log.textContent = `The ctrl key is pressed: ${e.ctrlKey}`;
// }

//* settime and setinterval
//~ arrow function (it is alter to defined a function)
// function sum(a, b)
// {
//   return a+b ;
// }
// this above function can be define
// summ = (a , b) =>{
//   return a+b ;
// }

//~ setTimer

// logko = () => {
//   console.log("I am your log");
// };

// clr = setTimeout(logko , 4000);
// clr =  setInterval(logko , 4000);
// use clearinterval(clr)/cleartimeout(clr) to cancel setInterval/setTimeout

// setInterval(() => {
//   console.log("nice");
// }, 3000);
// setInterval(() => {
//   console.log("object");
// }, 2000);


//~ local storage javascripts
// store in local device of browser
// localStorage.setItem('name','debraj');
// localStorage ;
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

//! JSon --> is a javascirpt notation object (it is very improtance for transpotation information)
// var obj ={'name':'debraj',length:1,a:{this:"this"}};
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso); 
// parsed = JSON.parse(`{"name":"debraj","length":1,"a":{"this":"this"}}`);
// console.log(parsed);


//~ version of javascript and ECMAScript version
// it give the idea on javascript version and running world use of javascript
// ECMAScript is standered for maintain for javascrips version

// Templates literals - Backticks
// var a = 34 ;
// console.log(`this is a variable : ${a}`);

//* Finished the javascripts