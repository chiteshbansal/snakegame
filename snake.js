const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');
let container = document.getElementById('gameover');
// Unit//
const box = 32;

// Image //

const ground =new Image();
ground.src = "images/ground.png";

let snakeheadcolor='green';


const foodImg = new Image();
foodImg.src = "images/food.png";

// audio files for the game
const dead = new Audio();
const left = new Audio();
const right = new Audio();
const eat= new Audio();
const up = new Audio();
const down = new Audio();


dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
left.src = "audio/left.mp3";
up.src = "audio/up.mp3";
down.src = "audio/down.mp3";
right.src = "audio/right.mp3";
// create the snake

let snake= [];
snake[0]= {
	x :9*box,
	y :10*box
}

let maze = Array(17*14);
maze[0]={x:2*box,y:(3+3)*box}
maze[1]={x:3*box,y:(3+3)*box}
maze[2]={x:4*box,y:(3+3)*box}
maze[3]={x:4*box,y:(2+3)*box}
maze[4]={x:4*box,y:(1+3)*box}
maze[5]={x:14*box,y:(3+3)*box}
maze[6]={x:15*box,y:(3+3)*box}
maze[7]={x:14*box,y:(3+3)*box}
maze[8]={x:14*box,y:(2+3)*box}
maze[9]={x:14*box,y:(1+3)*box}
maze[10]={x:14*box,y:(11+3)*box}
maze[11]={x:15*box,y:(11+3)*box}
maze[12]={x:16*box,y:(11+3)*box}
maze[13]={x:14*box,y:(12+3)*box}
maze[14]={x:14*box,y:(13+3)*box}
maze[15]={x:2*box,y:(11+3)*box}
maze[16]={x:3*box,y:(11+3)*box}
maze[17]={x:4*box,y:(11+3)*box}
maze[18]={x:4*box,y:(12+3)*box}
maze[19]={x:4*box,y:(13+3)*box}
maze[20]={x:6*box,y:(4+3)*box}
maze[21]={x:6*box,y:(5+3)*box}
maze[22]={x:6*box,y:(6+3)*box}
maze[23]={x:6*box,y:(8+3)*box}
maze[24]={x:6*box,y:(9+3)*box}
maze[25]={x:6*box,y:(10+3)*box}
maze[26]={x:7*box,y:(10+3)*box}
maze[27]={x:8*box,y:(10+3)*box}
maze[28]={x:7*box,y:(4+3)*box}
maze[29]={x:8*box,y:(4+3)*box}
maze[30]={x:10*box,y:(4+3)*box}
maze[31]={x:11*box,y:(4+3)*box}
maze[32]={x:12*box,y:(4+3)*box}
maze[33]={x:12*box,y:(5+3)*box}
maze[34]={x:12*box,y:(6+3)*box}
maze[35]={x:12*box,y:(8+3)*box}
maze[36]={x:12*box,y:(9+3)*box}
maze[37]={x:12*box,y:(10+3)*box}
maze[38]={x:11*box,y:(10+3)*box}
maze[39]={x:10*box,y:(10+3)*box}
maze[40]={x:16*box,y:(3+3)*box}

// Change the maze 
function changeMaze()
{
	let btn = document.getElementById('mazebutton');
	if(btn.className==="rotate1" && gamestatus!=0)
	{
		maze[0]={x:2*box,y:(3+3)*box}
		maze[1]={x:2*box,y:(2+3)*box}
		maze[2]={x:2*box,y:(1+3)*box}
		maze[3]={x:3*box,y:(1+3)*box}
		maze[4]={x:4*box,y:(1+3)*box}
		maze[5]={x:14*box,y:(1+3)*box}
		maze[6]={x:15*box,y:(1+3)*box}
		maze[7]={x:16*box,y:(1+3)*box}
		maze[8]={x:16*box,y:(2+3)*box}
		maze[9]={x:16*box,y:(3+3)*box}
		maze[10]={x:14*box,y:(13+3)*box}
		maze[11]={x:15*box,y:(13+3)*box}
		maze[12]={x:16*box,y:(11+3)*box}
		maze[13]={x:16*box,y:(12+3)*box}
		maze[14]={x:16*box,y:(13+3)*box}
		maze[15]={x:2*box,y:(13+3)*box}
		maze[16]={x:3*box,y:(13+3)*box}
		maze[17]={x:2*box,y:(11+3)*box}
		maze[18]={x:2*box,y:(12+3)*box}
		maze[19]={x:2*box,y:(13+3)*box}
		maze[20]={x:6*box,y:(5+3)*box}
		maze[21]={x:6*box,y:(6+3)*box}
		maze[22]={x:6*box,y:(7+3)*box}
		maze[23]={x:6*box,y:(8+3)*box}
		maze[24]={x:6*box,y:(9+3)*box}
		maze[25]={x:6*box,y:(10+3)*box}
		maze[26]={x:7*box,y:(10+3)*box}
		maze[27]={x:8*box,y:(10+3)*box}
		maze[28]={x:7*box,y:(5+3)*box}
		maze[29]={x:8*box,y:(5+3)*box}
		maze[30]={x:10*box,y:(5+3)*box}
		maze[31]={x:11*box,y:(5+3)*box}
		maze[32]={x:12*box,y:(5+3)*box}
		maze[33]={x:12*box,y:(6+3)*box}
		maze[34]={x:12*box,y:(7+3)*box}
		maze[35]={x:12*box,y:(8+3)*box}
		maze[36]={x:12*box,y:(9+3)*box}
		maze[37]={x:12*box,y:(10+3)*box}
		maze[38]={x:11*box,y:(10+3)*box}
		maze[39]={x:10*box,y:(10+3)*box}
		maze[40]={x:4*box,y:(13+3)*box}
		btn.className='rotate2';
	}else if (btn.className==='rotate2' && gamestatus!=0)
	{	
		maze[0]={x:1*box,y:(1+3)*box}
		maze[1]={x:2*box,y:(1+3)*box}
		maze[2]={x:3*box,y:(2+3)*box}
		maze[3]={x:3*box,y:(3+3)*box}
		maze[4]={x:3*box,y:(4+3)*box}
		maze[5]={x:4*box,y:(2+3)*box}
		maze[6]={x:5*box,y:(2+3)*box}
		maze[7]={x:6*box,y:(2+3)*box}
		maze[8]={x:16*box,y:(1+3)*box}
		maze[9]={x:16*box,y:(1+3)*box}
		maze[10]={x:15*box,y:(2+3)*box}
		maze[11]={x:14*box,y:(2+3)*box}
		maze[12]={x:13*box,y:(2+3)*box}
		maze[13]={x:15*box,y:(3+3)*box}
		maze[14]={x:15*box,y:(4+3)*box}
		maze[15]={x:12*box,y:(2+3)*box}
		maze[16]={x:1*box,y:(14+3)*box}
		maze[17]={x:2*box,y:(13+3)*box}
		maze[18]={x:3*box,y:(12+3)*box}
		maze[19]={x:3*box,y:(11+3)*box}
		maze[20]={x:3*box,y:(10+3)*box}
		maze[21]={x:4*box,y:(12+3)*box}
		maze[22]={x:5*box,y:(12+3)*box}
		maze[23]={x:6*box,y:(12+3)*box}
		maze[24]={x:17*box,y:(14+3)*box}
		maze[25]={x:16*box,y:(13+3)*box}
		maze[26]={x:15*box,y:(12+3)*box}
		maze[27]={x:15*box,y:(11+3)*box}
		maze[28]={x:15*box,y:(10+3)*box}
		maze[29]={x:14*box,y:(12+3)*box}
		maze[30]={x:13*box,y:(12+3)*box}
		maze[31]={x:12*box,y:(12+3)*box}
		maze[32]={x:1*box,y:(0+3)*box}
		maze[33]={x:1*box,y:(0+3)*box}
		maze[34]={x:1*box,y:(0+3)*box}
		maze[35]={x:1*box,y:(0+3)*box}
		maze[36]={x:1*box,y:(0+3)*box}
		maze[37]={x:1*box,y:(0+3)*box}
		maze[38]={x:1*box,y:(0+3)*box}
		maze[39]={x:1*box,y:(0+3)*box}
		maze[40]={x:1*box,y:(0+3)*box}
		btn.className="rotate3";

	}else if(btn.className==='rotate3' && gamestatus!=0)
	{
		for(i=0 ;i<=40;i++)
		{
			maze[i].x=17*box;
			maze[i].y=(1)*box;
		}

		btn.className='rotate1';
	}
}


// change snake head color when clicked
function changecolor()
{
	let btn = document.getElementById('snakeheadcolor');
	if(btn.className==='color1')
	{
		snakeheadcolor='yellow';
		btn.className='color2';
	}else if(btn.className==='color2')
	{
		snakeheadcolor='cyan';
		btn.className='color3';
	}else if(btn.className==='color3')
	{
		snakeheadcolor='purple';
		btn.className='color4';
	}else if(btn.className==='color4')
	{
		snakeheadcolor='red';
		btn.className='color5';
	}else if(btn.className==='color5')
	{
		snakeheadcolor='violet';
		btn.className='color6';
	}else if(btn.className==='color6')
	{
		snakeheadcolor='indigo';
		btn.className='color1';
	}
}

function drawmaze(){
	
	for(i = 0 ;i<41;i++)
	{
		ctx.fillStyle = 'yellow';
		ctx.fillRect(maze[i].x,maze[i].y,box,box);
		ctx.strokeStyle = 'white';
		ctx.strokeRect(maze[i].x , maze[i].y, box ,box);

	}
}

// when the game is over
 function gameover(scores)
 {
 	container.innerHTML = "Gameover!!!! <br> Better Luck next time<br> Your Score: " + score + "<br>" + container.innerHTML;
 	container.style.display = "block";

 }


// create food 

let food = {
	x:Math.floor(Math.random()*17+1)*box ,
	y:Math.floor(Math.random()*15+3)*box
}

let score = 0 ;


// control the snake
let d ; 

document.addEventListener("keydown",direction);

function direction(event){
	if(event.keyCode == 37 && d!="RIGHT" )
	{
		left.play();
		d = "LEFT";

	}else if(event.keyCode == 38 && d!="DOWN" )
	{
		up.play();
		d = "UP";

	}else if(event.keyCode == 39 && d!="LEFT" )
	{
		right.play();
		d = "RIGHT";

	}else if(event.keyCode == 40 && d!="UP" )
	{
		down.play();
		d = "DOWN";

	}
}
// chech that the food do not overlap with maze
 function checkfood(food,array)
 {
 	for( i = 0 ;i<41;i++)
 	{
 		if(food.x==array[i].x && food.y == array[i].y || food.y == array[i].x && food.x == array[i].y)
 			return true;
 	}
 	return false;
 }

// check the collision of snake with it's own body
function collision(head,array)
{
	for(i = 0 ;i<array.length;i++)
	{
		if(head.x == array[i].x && head.y == array[i].y)
			return true;
	}

	return false;
}
// collision with the maze
function collisionmaze(head,maze)
{
	for(i = 0 ;i<41 ;i++)
	{
		if(head.x == maze[i].x && head.y == maze[i].y)
			return true;
	}

	return false;
}

// just a variable to avoid maze change when the game is over
let gamestatus =1 

// draw everything on the screen

let foodpos;
function draw(){
	ctx.drawImage(ground,0,0);

	for(i =0 ;i< snake.length ;i++)
	{
		ctx.fillStyle=i==0?snakeheadcolor:"white";
		ctx.fillRect(snake[i].x,snake[i].y,box,box);
		ctx.strokeStyle = 'white';
		ctx.strokeRect(snake[i].x,snake[i].y,box,box);
	}

	// old head position
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	// remove the tail

	if(d == "LEFT") snakeX -=box;
	if(d == "UP") snakeY -=box;
	if(d == "RIGHT") snakeX +=box;
	if(d == "DOWN") snakeY +=box;


	if(snakeX==food.x && snakeY== food.y)
	{
		score++;
		eat.play();
		food = {
			x:Math.floor(Math.random()*17+1)*box ,
			y:Math.floor(Math.random()*15+3)*box
			}
		
	}else {
		snake.pop();
	}
	let newhead = {
		x :snakeX,
		y  : snakeY
	}

	if(snakeX < box || snakeX > 17*box || snakeY<3*box || snakeY>17*box || collision(newhead,snake)||collisionmaze(newhead,maze))
	{
		gamestatus =0;
		dead.play();
		clearInterval(game);
		gameover(score);
	}
	
	foodpos = checkfood(food,maze);

		while(foodpos==true)
		{
			
			food={
				x:Math.floor(Math.random()*17+1)*box ,
				y:Math.floor(Math.random()*15+3)*box
			}
			foodpos = checkfood(food,maze);
		}

	snake.unshift(newhead);

	ctx.drawImage(foodImg,food.x,food.y);
	ctx.fillStyle = "white";
	ctx.font = "35px Changa one";
	ctx.fillText(score,(2.5)*box,1.6*box);
	ctx.fillstyle = "blue";
	ctx.font = "35px Changa one";
	// ctx.fillText("speed",5*box, 1.6*box);
	// ctx.fillText(Number(document.getElementById('speedbutton').value), 8*box , 1.6*box);
}

let game = setInterval(draw,120);
let Maze = setInterval(drawmaze,120);
