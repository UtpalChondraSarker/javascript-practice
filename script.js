var myName='utpal';
if(myName==='utpal'){
    console.log('excecuted');
}
var myName='utpal';
if(myName==='kamal'){
    console.log('this is code excecuted');
}

var myAge=20;
if(9>10){
    console.log('Good to go');
}
if(myAge>=20){
    console.log('your are adult')
}
if(myAge<20){
    console.log('your are not adult')
}

var myNumber=40;
if(20>40){
    console.log('this is result');
}
if(40>=40){
    console.log('this corret answer');
}
if(myNumber<30){
    console.log('this is rong answer')
}

var myAge=21;
if(myAge>10 && myAge<60){
    console.log('this is result');
}
else{
    console.log('this is not result')
}

var whatDay='sunday';
if(whatDay==='friday'){
    console.log('It is closed to day')
}
else if(whatDay==='thursday'){
    console.log('It is partaily closeday');
}
else if(whatDay==='saturday'){
    console.log('Some offic and to day');
}
else{
    console.log('It normal working day to day');
}

var myNumber=100;
if(10>100){
    console.log('this is some result')
}
else if(100>50 && 100>=100){
    console.log('this is right answer') 
}
else if(90>100){
    console.log('this not a corret answer')
}
else{
    console.log('It is down a result')
}

var number1=10;
var number2=20;
var number3=50;

if(number1<number3){
    console.log('this is first big number')
}
else if(number2<number1){
    console.log('this is second bfig number')
}
else if(number3<number2){
    console.log('this  is third big number ')
}
else{
    console.log('this is not right answer')
}

var num=10;
if(num>1){
    if(num>=10){
        console.log('gerther than 10')
    }
    else{
        console.log('Somewhere between 2-10');
    }
}

var number=10;
if(number>2){
    if(number>10){
        console.log('this is aswer')
    }
    else{
        console.log('Somewhere between 2 - 10'); 
    }
}
//switch

var weekday='Sunday';
switch(weekday){
    case 'Saturday':
        console.log('saturday,today is closed')
        break;

     case 'Sunday':
         console.log('Sunday,it is normal day');
         break;
         
     case 'Monday':
         console.log('Monday, it is naomal day ');
         break;
       
     case 'Tuesday':
         console.log('Tuesday,it is normal day');
         break;
         
     case 'Wednesday':
         console.log('Wednesday, it is normalday');
         break;
         
     case 'Thursday':
         console.log('Thusday, it is normalday');
         break;
         
     case 'Friday':
         console.log('Friday,it is closed day');
         break;
         
     default:
         console.log('Not a day');    
}

//Swithch

var mark=80;
switch(mark){
    case 80:
        console.log('this is Grade A+');
        break;

    case 70:
        console.log('this is Grade A');
        break;
        
     case 60:
         console.log('this is Grade A-');
         break;
         
     case 50:
         console.log('this is Grade B');
         break;
         
     case 40:
         console.log('this is Grade C');
         break;
         
     case 33 :
         console.log('this is Grade D');
         break;
         
     default:
         console.log('this is Faile')    
}

//for Loop

for(var i=0; i<10; i++){
    console.log('this is result');
}

for(var i=0; i<40; i++){
    console.log(' result')
}

//do while
var num=15;
do{
    console.log('inside the loop,num is:'+num);
    num +=1;
}
while(num<10);
console.log('outsite the loop');

//do while
var num =10;
do{
    console.log('this is loop:')
    num +=1;
}while(num<20);
console.log('outside loop');

//break

for(let i=0; i<10; i++){
    if(i===5){
        break;
    }
    console.log('this is result');
}

for( let i=0; i<20; i++){
    if(i===8){
        break;
    }
    console.log('this loop result:')
}

//continue

for(let i=0; i<10;i++){
    if(i===5){
        console.log('result');
        continue;
    }
    console.log('i is now at:')
}

for (let i=0; i<10;i++){
    if(i===4){
        console.log('this is continue');

        continue;
    }
    console.log(' i is now at');
}

//arry
var arrayName=new Array('utpal','shanto','Rakib','shakib')
console.log(arrayName)

var arrName=['sushanto','raju','utpal','shakib','shanto']
console.log(arrName);

var arrabName=['bangladesh','dhaka','kishoregonj','japan']
console.log(arrabName);

var utpal={
    fullName:'ratri sarker',
    age:20,
    address:'dhaka',
    job:'job holder'

}
console.log('utpal');

var sushanto={
    thisName:'car',
    price:23000,
    address:'mirpur',
    color:'blue',
}


var sushanto={
    companyName:'bd task',
    location:'dhaka mirpur',
    phone:01767,
    job:'webdeveloper',
    salary:34000,
    welcomeMeg:function(){
        console.log('Hello there');

    }
}
for(item in sushanto){
    console.log(item);
}

var objArry={
    myName:'utpal sarker',
    name:['sushto','utpal','shanto','rone','roju'],
    age:[10,30,40,50,60,],
}
console.log(objArry);

//function
function funcName(params) {
    
    console.log('this is function')
}
funcName();

var funcName=function(params) {
    console.log('this is code exceuted')
    
}
funcName()

function sumMachine(a,b){
    sum=a+b;
    return sum;
}
console.log(sumMachine(2,2));
console.log(sumMachine(4,4));

//function

var myfunc=function(a,b){
    sum=a+b;
    return sum;
}
console.log(myfunc(4,5))

function addition(x,y){
    add=x-y;
    return add;
}
console.log(addition(10,30));

function callMyName(Name,callback){
    var myAge=20;
    callback(myAge);
    console.log('Is it interestinng?Yes it is Mr.'+ name);
}
function hello (age){
    console.log('I am passed through argumet and my age is:'+ age);
}
callMyName('Zonayed Ahmed',hello);   

function callMyName(name,callback){
    var myAge=20;
    callback(myAge);
    console.log('Is it intersting? yes it is Mr.' + name);
}
function hello(age){
    console.log('I am past tho argument and my age is:'+ age);
}
callMyName('utpal sarker',hello)

function printAText(){
    console.log('this is small of the bangladesh in the country .')
}
printAText();

function addTwoNum(x,y){
    var sum=x+y;
    console.log('this is sum: '+ x + ' and ' + y +' is:' + sum)
    
}
addTwoNum(5,12);
addTwoNum(4,5);
addTwoNum(10,10)

// hoisting 
aFunc();
function aFunc(){
    var a=10;
    var b=20;
    var sum=a+b;
    console.log('sum', + sum);
}

aAdd();
function aAdd(){
    var a=30;
    var b=40;
    var sum=a+b;
    console.log('sum' +sum)
}

//scope
//localscope

function localscope(){
    var local ='I am local to my own function'
    console.log(local)
}
localscope();

// function localscope(){
//     var local ='I am local to my own function'
//     console.log(local)
// }
// localscope();
// console.log(local);

//globalscope variable

var globalVar='I am globalscope variable';
function globalScope(){
    console.log('outside a function:' + globalVar)
}
globalScope();
console.log('outside:'+ globalVar);

function objectFunc(){
    var localObj={
        name:'utpal sarker',
        age:20
    }
    console.log(localObj)
}

objectFunc()



// function objectFunc(){
//     var localObj={
//         name:'utpal sarker',
//         age:20
//     }
//     console.log(localObj)
// }

// objectFunc()
// console.log(localObj) 

//IIFE
function aDemoFunc(){
    console.log('Hello world')
}
aDemoFunc();

//or

var  aDemoFunc=(function(){
    console.log('Bangladesh is small country')
})
aDemoFunc();

//IIFE

(function aDemoFunc(){
    console.log('How are you');
})
();

var sum = (function(){
    return 30+40;
})();

var arrayName=['utpal','sushanto','hridoy','shanto','chinnmoy','rakib']
console.log(arrayName[0]);
console.log(arrayName[3])
console.log(arrayName.length)
arrayName[2]='shojib'
console.log(arrayName)
console.log(arrayName.length);
console.log(arrayName['length']);
console.log((arrayName[5]='ratul'));
console.log(arrayName);

for(var i = 0;i<arrayName.length;i++){
   console.log('Name:' +arrayName[i]);
}

arrayName.push('shakib')
console.log(arrayName)
arrayName.unshift('ratri')
console.log(arrayName);

arrayName.pop();
console.log(arrayName)

arrayName.shift(arrayName)
console.log(arrayName);

arrayName.indexOf('shanto');
console.log(arrayName);

arrayName.splice(3,5)
console.log(arrayName)

var newArr=[1,2,3,4,5,6,7,8,9,0]
console.log(newArr);

var spliceArr=newArr.splice(3,12)
console.log(newArr)
console.log(spliceArr)

//object

var shakib={
    fullName:'shakib all shan',
    age:21,
    address:'dhaka',
    job:'job holder'
}
console.log(shakib);

console.log(shakib.fullName);
console.log(shakib)
console.log(shakib['fullName'])
console.log(shakib.zipcode=305);
console.log(shakib)
console.log(shakib.job='student')
console.log(shakib)

shakib.welcomeMeg=function(){
    console.log('hello there')
}

console.log(shakib)

console.log(shakib.welcomeMeg())


var shakib={
    fullName:'shakib all shasan',
    age:21,
    address:'dhaka',
    job:'job holder',
    welcomeMeg:function(){
        console.log('hello there')
    }
}
for(item in shakib){
    console.log(item)
}

var objArry={
    normal:'normal item',
    name:['rahim','shanto','shovo','raju'],
    age:[10,20,30,40,50,60]

}
console.log(objArry)
console.log(objArry.name['1'])

for(item in objArry){
    console.log(item)
    
}

var arrObj=[
    'sushanto',
    {
        name:'utpal',
        age:21,
        job:'student'
    },
    'bangladesh'
]
console.log(arrObj);
console.log(arrObj[1].name)

for(item in arrObj){
    console.log(item)
} 


 function funName (a,b){
    var sum =a+b;
    return sum;
}
console.log(funName(2,2));
console.log(funName(4,4));

var onionPrice='21.55';
var eggPrice='21';
var totalPrice=( parseInt(onionPrice)+parseInt(eggPrice));

console.log(totalPrice)

var eggPrice='33.50';
var meathPrice='30';
var totalValue=parseFloat(eggPrice)+parseFloat(meathPrice);
console.log(totalValue);

var eggPrice=+'33.56';
var meathPrice=+'30';
var totalValue=eggPrice+meathPrice;
console.log(totalValue);


var tShritPrice=200;
console.log(typeof tShritPrice);
var tshritPrice2='200';
console.log(typeof tshritPrice2);

var isRining=false;
console.log(typeof isRining);

var isRining2;
console.log(isRining2);

var today= Date();
console.log(today);

var yesterday= new Date();
console.log(yesterday);

var firstNumber=0.1;
var secondNumber=0.2;
var totalNumber=firstNumber+secondNumber;
//console.log(parseFloat( totalNumber.toFixed(1)));
var value2=totalNumber.toFixed(1);
var result=parseFloat(value2);
console.log(result);

var watchPrice=200;
watchPrice=250;
console.log(watchPrice);














