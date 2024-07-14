// // number occurance
// let a=[2,3,4,5,3,4,5,7,8,2,3,8,7];
// let c=[];
// a.sort((x,y)=>x-y)
// for(let i=0;i<a.length;i++){
//     let d=0;
//     for(let j=0;j<a.length;j++){
//         if(a[i]==a[j]){
//             d++;
//         }
//     } 
//        c.push(`${a[i]} -> ${d}`);

//     i+=d-1;
//  }
// console.log(c)



//find duplicate 
// let a=[2,3,45,5,43,2,23,5,2,9]
// let n=2;
// let c=0;
// for(let i=0;i<a.length;i++){
//     if(n===a[i]){
// c++;    }
// }
// console.log(c)


//given number intger
// let a=8.4
// console.log(Number.isInteger(a))

//sort arr
// let a=[2,3,7,1,9]
// a.sort((x,y)=>x-y)
// console.log(a)

//sort string

// let a='ewwkerwhn'
// let b=a.split('');
// console.log(b)
// //string element thaka normal b.sort onlt arry thakala sort hoi
// b.sort()
//  let c=b.join('');
// console.log(c)

//find unique value

// let a=[2,2,3,3,4,832,8,9,8,9]
// for(let i=0;i<a.length;i++){
//     let c=0;
//     for(let j=0;j<a.length;j++){
// if(a[i]==a[j]){
//     c++;
// }
//     }
//     if(c==1){
//         console.log(a[i])
//     }
// }

 //make sentence from arr

//  let a=['berwj','rwji','erwrh'];
//  let c=a.join(' ')
//  console.log(c)

//elemet present of am=nother arr

// let a=[2,3,4,5,6]
// let b=[5,8,9,0,0,0];
// for(let i=0;i<a.length;i++){
//     if(a.includes(b[i])){
//         console.log('true')
//         console.log(b[i])
//     }
    
// }
// console.log('no')


//string anagram
// let s='dfsji'
// let g='ijdfs'
// let b=s.split('')
// let c=g.split('')
// b.sort();
// c.sort();
// s=b.join('');
// g=c.join('');
// console.log(s==g)

//or
// let v='iout';
// let g='luoi';
// if(v.length!==g.length){
//     console.log(false);
// }
//  for(let j=0;j<g.length;j++)
// {
// if(!v.includes(g[j])){
//     console.log(false)
// }
// }
 
//filter
// let a=[3,5,6,8,2,8,9]
// let c=a.filter((v,i)=>{
//     return a[i]<5;
// })
// console.log(c)

//filter obj
// let obj={ar:[{a:4},{a:7},{a:8},{a:9},{a:1}]}
//  let v=obj.ar.filter((v,i)=>{
// return v.a>5
//  })
//  console.log(v)

//check is arr
// let a=[3,5,6,7,2]
// console.log(Array.isArray(a))

//reverse each word of string
// let a='bdffj rwnkr ewji kerwerj jrwij'
// let b='';
// for(let i=a.length-1;i>=0;i--){
// b+=a[i]


// }console.log(b)

//how to emptyarray
// let a=[7,8,4,3,'efkk']
// a.splice(0,a.length)
// console.log(a)


//concat of combine two array
// let a=[4,2,3,7,89]
// let b=[6,7,23,45,6,7]
// let c=[...a,...b]
// console.log(c)

// // or
//  let a=[4,2,3,7,89]
//  let b=[6,7,23,45,6,7]
// let c=a.concat(b);
// console.log(c)

//sort and rev of arry with o0ut changing arr
// let a=[4,2,3,7,89]
// let b=[...a]
//  let c=b.reverse();
// console.log(c)
// b.sort();
// console.log(b)

//replace index ele
// let a=[3,4,5,566,6,3];
// a[2]=8999999
// console.log(a)

//insert specific
// let a=[4,3,6,8,3,6,0];
// a.splice(2,0,5498459);
// console.log(a)

//delete specific
// let a=[3,5,8,9,566,5]
// a.splice(3,1)
// console.log(a)

//arry clone
// let a=[8,6,7,3,55]
// let b=[...a]
// console.log(a)
// //or
// b=a.concat([]);
// console.log(b)

//obj clone
// let a={
//     d:8,l:9,u:5,k:0
// }
// let b={...a}
// console.log(b)

//add ele at begin
// let a=[4,6,7,8,90,2];
// a.unshift(900000)
// console.log(a)


//remove at endd
//  let a=[4,6,7,8,90,2];
// a.pop()
// console.log(a)

//split sentence in arr
// let a='efj rwkrr jrrewrjkrerwj ikrjrrwjew ikewfjew '
// let b=a.split(' ')
// console.log(b)


//replace existing element in obj
// let a={
//     w:4,t:8,h:9,e:4
// }
// let v={...a,t:9000}
//  console.log(v)

//add ele in obj
// let a={
//     w:4,t:8,h:9,e:4
// }
// let v={...a,p:9000}
//  console.log(v)

//obj concat
// let a={
//     w:4,t:8,h:9,e:4
// }
// let j={
//     l:9,m:8,o:9,e:4000000
// }
// let v={...a,...j}
//  console.log(v)

//delete obhj key
// let a={
//     w:4,t:8,h:9,e:4
// }
// delete a.t;
// //no effct
// delete a

// console.log(a)

//replqce string ather find

// let a=['brrer','keprep','pop','rereire']
//  for(let i=0;i<a.length;i++){
//     if(a[i]=='pop'){
//         a[i]='hsdjdsjidsiidsihdsdsih';
//     }    
// }
// console.log(a)

//desimal num to small desimal/integer
// let a=45.99929929239239992
// let b=a.toFixed();
// console.log(b)

//string alphabatic order
// let a=['nsis','pkojw','jewjoeo','abf','ljreji0','hfhfh']
// a.sort();
// console.log(a)

//remove which is not string
// let a=[4,5,6,'lefek','ewkek',6,0,'ewkk']
// let b=[]
//  for(let i=0;i<a.length;i++){
//     if(typeof(a[i])==='string'){
//        //typeo()retuen kora string type 'string' or'number'
// b.push(a[i])  
//   }

// }
// console.log(b)

//array of obj filter

// let a=[
//     {w:'male'},{w:'female'},{w:'male'},{w:'fe,al'}
// ]
// let b=a.filter(v=>{
//     return v.w=='male'
// })
// console.log(b)


//flatened array

// let a=[4,5,6,[84,5,0,[90606,404]]]
// let b=a.flat()
// console.log(b)

//let and var of settimeout
 
// let stander
// for(let i=0;i<5;i++){
// setTimeout(()=>{
//     console.log(i);
// 
// },2000)
// }


// var not stander
// function fun(){
//     for(var i=0;i<5;i++){

// setTimeout(()=>{
//          console.log(i);
    
//     },2000)
// }
// }
// fun() 

//ster print
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= 5; j++) {
//         if (i >=j) {
//             row += '* ';
//         } else {
//             row += '  ';
//         }
//     }
//     console.log(row);
// }

// fibonachi

// function fib(n){
//     if(n==1 || n==0){
//         return n;
//     }
//     else{
//         return fib(n-1)+fib(n-2)
//     }
// }
// console.log(fib(4))


// fristlatter capital
// let a='sjsjjs sllsds nfm fllf oot'
// let c=''
//  c+=a[0].toUpperCase();
// for(let i=1;i<a.length;i++){
//     if(a[i]===' '){
//         c+=a[i];
//         c+=a[i+1].toUpperCase();
//         i++;
//     }
//     else{
//         c+=a[i];
//     }
//   }
//   console.log(c)


// intersection of two arr
// let a=[3,4,5,9];
// let b=[4,5,2,1,0];
// let c=[];
// for(let i=0;i<a.length;i++){
//     if(b.includes(a[i])){
// c.push(a[i]);
//     }
// }
// console.log(c)

// swap two var with out 3

// let a=4;
// let b=8;
//   a=a+b;
//   b=a-b;
//   a=a-b;
//   console.log(a,b)

// 2nd largest ele
// let a=[2,2,14,90,8]
// a.sort((x,y)=>x-y)
// console.log(a[a.length-2])

// even odd
//  let a=[2,2,14,90,81,9,77]
// let b=[];
// let c=[];
// for(let i=0;i<a.length;i++){
//   if(a[i]%2==0){
//     b.push(a[i])
//   }
//   else{
//     c.push(a[i])
//   }
// }
// console.log(b,c)

// vowel of a string
// let a='wjwjnn uio sa cksiou www wkkkw kwmew'
// let b='aeiou'
// let c=''
// for(let i=0;i<a.length;i++){
//   if(b.includes(a[i])){
// c+=a[i]
//   }
// }
// console.log(c)


// reverse str
// let s='eeiie ewwow ewewo'
// let b=s.split(' ')
// s=b.reverse().join(' ');
// console.log(s)


// replace  to #
// let a='eree jrrjrreer eir ir e'
// let c=a.replaceAll(' ',"#")
// console.log(c)

//find occurance of num
// let a=[22,3,2,2,3,2,34,4,3,4,1]
// let b=[];
// a.sort((x,y)=>x-y);
// for(let i=0;i<a.length;i++){
//   let c=0;
//   for(let j=0;j<a.length;j++){
// if(a[i]==a[j]){
//   c++;
// }
//   }
//   b.push(`${a[i]}-> ${c}`);
//   i+=c-1;
// }
// console.log(b)

// sort arrof obj

// let a=[{age:3},
//   {age:2},{age:38},{age:23},{age:4},{age:53},{age:13},
// ]
// for sort
// a.sort((x,y)=>{
// x.age-y.age
// })

// for filter
// let b=a.filter(v=>{
//   return v.age>20
// })
// console.log(a)



//reveerse a num
// let n=575755
// let s=0;
// while(n!=0){
//   let r=n%10;
//   s=10*s+r;
//   n=Math.floor(n/10)
// }
// console.log(s)

//  ********************  chunk arrr ***********************
// let a=[2,3,4,1,2,3,33333,45,6,5]
// n=3;
// let c=[]
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<n;j++){
// let b=new Array();
// }


// unique char

// let a='apmdl';
// for(let i=0;i<a.length-1;i++){
//     for(let j=i+1;j<a.length;j++){
// if(a[i]==a[j]){
//     console.log(false)
// }
//     }
// }
// console.log(true)


//camel case
// let a='bdsj kdfj ndffi';
// let c='';
// for(let i=0;i<a.length;i++){
//     if(a[i]==' '){
//         c+=a[i+1].toUpperCase();
//         i++;
//     }
//     else{
//         c+=a[i];
//     }
// }
// console.log(c)

//check is upper or lower
// let a='V'
// if(a===a.toLowerCase()){
//     console.log(true)
// }
// else{
//     console.log('isUpperCase')
// }

//start with specific sub str
// let a='hjk ghwe'
// let b='hjk';
// let c=0
// for(let i=0;i<a.length;i++){
//     c++;
// if(a[i]===' '){
//     break;
// }}
// let v=a.substring(0,c-1);
// if(b==v){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// //********* mach num of rep[et ele? *********
// let a=[3,4,5,6,3,4,4]
// let v=a.sort((x,y)=>{x-y})
// let b=[]
// for(let i=0;i<v.length;i++){
//     let c=0;
//     for(let j=0;j<v.length;j++){
//         if(v[i]==v[j]){
// c++;
//         }
//     }
//     b.push(c);
//     b.push(` ${a[i]}`)
//     i+=c-1;
// }
// let m=0;
// let j=0;
// console.log(b) 


// repiting string
// let a='sjsjssd'
// let c=a.repeat(4)
// console.log(c)


// trancate string
// let a='jdjdjrjo roeere'
// let c=''
// for(let i=0;i<=5;i++){
//     c+=a[i]
// }
// c+='...'
// console.log(c)

// // generate arr in range

// let a=[];
// for(let i=2;i<=8;i++){
// a.push(i)
// }
// console.log(a)

// using recursion
// let a=[]
// function fun(n){
//     if(n==4){
//         a.push(4);

//          return 4
//     }
// a.push(n);
// return fun(n-1) 

// }
// console.log(  fun(6))
// console.log(a)


// empty obj find**********
// let obj={l:0}
// for(let i in obj){
//     if(obj.hasOwnProperty(i)){
//      console.log('not')
// }
// }
// console.log('empty')

//  sub sting true or false
// let a='wwwii wiw'
// let b='wwwii'
// console.log( a.includes(b))


 // 1. missing char ja kono missing char
// let a=[1,2,3,5];
// let b=[];
// for(let i=0;i<10;i++){
// if(!a.includes(i)){
//     b.push(i);
// }
// }
// console.log(b);
//2.  _ replec " "
//  let a='amk_orpr_poee';
//  let b=a.split('_');
// let c=b.join(' ')

//    console.log(c);

// 3.replace with cap word
// let x='jjw kwqkkq kqwqwk'
// c=x.replaceAll(" ","_");


// 4.occurance
// let a=[2,3,1,2,3,4,3,2,4];
// a.sort();
// for(let i=0;i<a.length-1;i++){
//     let c=0;
//   for(let j=i+1;j<a.length;j++){
//      if(a[i]===a[j]){
//         c++;
//     }


//  }
//  console.log(a[i],"->",c);
// }

 //  duplicat elemnt
//     let a=[2,3,5,2,5,4,3,4,1];
//     let b=[];
//     for(let i=0;i<a.length-1;i++){
//         for(let j=i+1;j<a.length;j++){
// if(a[i]==a[j]){
//     b.push(a[i])
// }
//         }

//     }
//     console.log(b)

// max min
// let a=[3,21,6,74,6,20];
// // 1
// a.sort((f,g)=>f-g);
// // 2.
// let min=a.reduce((w,t)=>{
//     return w<t?w:t;
// })
// let max=a.reduce((w,t)=>{
//     return w>t?w:t;
// })
// console.log(min,max )
// // secondlargest
// let a=[3,4,2,1,5,6,7];
// a.sort((e,r)=>e-r);
// // a.sort((a,d)=a-d);
// console.log(a[a.length-2])

// vowel count
// let a='ankur sasmal jeowkpq';

// let x=['a','e','i','o','u','A','E','I','O','U'];
// let v=[];
//  let c=0;
// for(let i=0;i<b.length;i++){
//     if(x.includes(b[i])){
// v.push(b[i]);
// c++;
//     }
// }

// console.log(v,c)
// rev
// let s='oeoeep';
// let g=''
// for(let i=s.length-1;i>=0;i--){
// g+=s[i];
// }
// console.log(g)

// swap
// let a=3;
// let b=5;
// console.log(a,b)
// a=b+a;
// b=a-b;
// a=a-b;
// console.log(a,b)

// add 2 arr
// let a=[2,3,5,1,2];
// let b=[4,6,79,2,1];
// let c=a.concat(b);
// console.log(c)
// palindrom
// let a='eemee'
// let y=true;

// for(let i=0;i<a.length/2;i++){
// if(a[i]!==a[a.length-1-i]){
// y=false;
// }
// }

// console.log(y)
// for num palindrom

//  let g=111;
//  let y=g;
//   let p=0;
//  while(g!=0){
//     let r=g%10;
//     console.log(r);
// p=(p*10)+r;
// console.log(p);
// // for int division
// g=Math.floor(g/10) 
//  }
//  console.log(p)
//  if(y==p){
//     console.log('ok')
//  }
//  else{
//     console.log('no')
//  }

// anstrong
// let g=1503;
// let v=g;
// let y=g.toString();
// let h=y.length;
// let p=0;
//   while(g!=0){
//     let r=g%10;
//  p+=(r**h);
//  // for int division
// g=Math.floor(g/10) 
//  }
//  console.log(v==p)
// table of num
// let a=prompt('enter');
// a=Number.parseInt(a);
// for(let i=0;i<a;i+=40000){
//     console.log(i)
// }

// no of occurance
// let s='kdowwwppwpwjkssssskkss'
// let c=0;
// for(let i=0;i<s.length;i++){
//     // s[i] . korla ok karon s[i ] ===k check korba
// if(s[i].includes('k')){
//             c++;
//     }
// }
// console.log(c)

// fibonachi
//   function fun(g){
// if(g==0 || g==1){
//     return g;
// }
//      return fun(g-1)+fun(g-2);

// }
// console.log(fun(8));
// frist latter upercase
// let s=' kdld'
// let t=s.trimStart();
// console.log(t)
// let p='';
// p+=t[0].toUpperCase();

// for(let i=1;i<t.length;i++){
//     p+=t[i];
//  }
//  console.log(p)

// union of arr
// let a=[2,3,5,1,2]
// let b=[4,2,3,7,1];
// let c=[];
// for(let i=0;i<b.length;i++){
//     if(a.includes(b[i])){
//         c.push(b[i])
//     }
// }
// a.sort((x,y)=>x-y)
// console.log(a)

// compare two array
// let a=[2,3,4,1,5]
// let b=[5,4,2,1]
// if(a.length!==b.length){
//     console.log('no')
// }
// for(let i=0;i<a.length;i++){
//     if(a[i!=b[i]]){
//         console.log(no);
//     }
// }
// console.log('yes')

// largest prime
// let a=[3,4,5,0,9,29,31];
// let s=[];
// let j=0;
// for(let i=0;i<a.length;i++){
//     for(  j=2;j<Math.floor(a[i]/2);j++){
//  if(a[i]%j===0){
// break;
//     }
// }
// if(j===Math.floor(a[i]/2)  ){
//     s.push(a[i])
// }

// }
// s.sort((c,v)=>c-v);

// console.log(s[s.length-1])

// duplicat remove
// let a=[3,2,3,42,6,3,2,1,42]

// for(let i=0;i<a.length-1;i++){
//     for(let j=i+1;j<a.length;j++){
// if(a[i]==a[j]){


//  a.splice(j,1);
//     }
//     }
// }
// console.log(a)

// full arr small part

//  let a=['jjjj jllb kk','lkl po kll','vv j nk']
//  let b=a.toString();
//  let c=b.split(' ');
// console.log(c);
// let r=c.join(' ');

// ex
//   let s='12389'
// //   repect arg 0 return empty str
// console.log(s.repeat(0))

// console.log(s.repeat(3.5))

// flat arr
//   let a=[[3,4,5],[3,4,1,2,4,[5,3,2]],[4,5,2,3,4]]
// //   console.log(a.flat(2))
// // 2 means level

// // ...a with out [...a]
// // let b=[].concat(...a);
// console.log(b);


// set time out on let and var

// function fun(){
// let
//             for(let i=0;i<3;i++){
// setTimeout(()=>{
//             console.log(i)

//         },i*1000)
// }
// }

// fun();
// ans=>1,2

// function fun(){
//     // var
//             for(
//                 var i=0;i<3;i++){
// setTimeout(()=>{
//             console.log(i)

//         },i*1000)
// }
// }

// fun();
// // ans=> 3 3 3
// because ->
// {1.
//     i
// }
// {2.
//     i
// }
// {3.
//     i
// }
// var last a change korba loop thaka baronor promp
//  3 all i a update hoa jaba

// string to number 
// let a='345'
// // ja kono aga + dila number type a porinoto hoba
// console.log(typeof(+a))


// git 
//1 let use
// let a=8;
// if(a===8){
//     let a=90;
// }
// console.log(a);


// 2 switch err
// let x=prompt('enter');
// switch(x){
//     case 1:
//         let name;
//     case 2:
//         // error same bolck a 2 bar declear not possible
//         let name;
// }

// 3 switch no eerr under block
// let x=prompt('enter');
// switch(x){
//     case 1:{
//         let name;
//     }
//     case 2:{
//         //no error same bolck a 2 bar declear not possible
//          let name;
//     }
// }


//4. encode and decode uri
// console.log(encodeURI('https://dummyjson.com/products'));
// console.log(decodeURI('https://dummyjson.com/products'));

// 5.delete
// let obj={
// a:9,m:3,p:4
// }
// delete obj;
// console.log(obj)
  