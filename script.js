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
