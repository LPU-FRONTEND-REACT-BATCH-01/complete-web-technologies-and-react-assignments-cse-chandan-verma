var a;   // we can declare 
let b;     // we can declare
const c;    /* cannot declare without initialization*/

a = 10;   //intialize
b = 20;    //initilize
c = 10;    /* cannot initialize and declare differently*/

var a;   //we can re-declare
let b;   //we can't re-declare
const c;   //we can't re-declare

a = 10;   //intialize
b = 20;    //initilize
c = 10;   

var x = 10;
let y = 20;
const z = 10;

var x = 20;
let y = 30;    //can't redeclare and re-initilize
const z = 10;  //can't redeclare and re-initilize