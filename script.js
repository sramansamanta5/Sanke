const gameboard=document.querySelector("#gameboard");
const ctx=gameboard.getContext("2d");
const scoretext=document.querySelector("#scoretext");
const resetbtn=document.querySelector("#resetbtn");
const gamewidth=gameboard.width;
const gameheight=gameboard.height;
const boardbackground="white";
const sankecolour="green";
const foodcolour="red";
let unitsize=25;
let running=false;
let Xvelocity=unitsize;
let Yvelocity=0
let foodX;
let foodY;
let score=0;
let snake=[
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

//Addded later 
let gameScore=0;
let finalScore=gameScore+5;


//Addded later 
let gameScore1=0;
let finalScorex=gameScore+10;


//Addded later 
let gameScore2=0;
let finalScore2=gameScore+5;
