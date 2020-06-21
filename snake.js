const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');
let container = document.getElementById('gameover');
// Unit//
const box = 32;

//speed of the snake

// speed of hte snake increase with the increase in score
let speed = 0;

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
	}else if(btn.className==='rotate2' && gamestatus!=0) {
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
		btn.className='rotate3';
		}else if (btn.className==='rotate3' && gamestatus!=0)
		{
		maze[0]={x:2*box,y:(1+3)*box}
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
		maze[16]={x:2*box,y:(13+3)*box}
		maze[17]={x:2*box,y:(13+3)*box}
		maze[18]={x:3*box,y:(12+3)*box}
		maze[19]={x:3*box,y:(11+3)*box}
		maze[20]={x:3*box,y:(10+3)*box}
		maze[21]={x:4*box,y:(12+3)*box}
		maze[22]={x:5*box,y:(12+3)*box}
		maze[23]={x:6*box,y:(12+3)*box}
		maze[24]={x:16*box,y:(13+3)*box}
		maze[25]={x:16*box,y:(13+3)*box}
		maze[26]={x:15*box,y:(12+3)*box}
		maze[27]={x:15*box,y:(11+3)*box}
		maze[28]={x:15*box,y:(10+3)*box}
		maze[29]={x:14*box,y:(12+3)*box}
		maze[30]={x:13*box,y:(12+3)*box}
		maze[31]={x:12*box,y:(12+3)*box}
		maze[33]={x:2*box,y:(1+3)*box}
		maze[34]={x:2*box,y:(1+3)*box}
		maze[35]={x:2*box,y:(1+3)*box}
		maze[36]={x:2*box,y:(1+3)*box}
		maze[32]={x:2*box,y:(1+3)*box}
		maze[37]={x:2*box,y:(1+3)*box}
		maze[38]={x:2*box,y:(1+3)*box}
		maze[39]={x:2*box,y:(1+3)*box}
		maze[40]={x:2*box,y:(1+3)*box}
		btn.className="rotate4";

	}else if(btn.className==='rotate4' && gamestatus!=0)
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
// checking collison with the walls of the game 
function wallcollision(dir)
{
	if(dir.x<box || dir.x>17*box || dir.y<3*box || dir.y>17*box)
		return false;
	else
		return true;
}
// making the game autonomous in maze mode 

function autonomous(food,snakeX,snakeY)
{
	
		let dir1 = {
			x:snakeX-1*box,
			y:snakeY
		}
		let dir2 = {
			x:snakeX+1*box,
			y:snakeY
		}
		let dir3 = {
			x:snakeX,
			y:snakeY+1*box
		}
		let dir4 = {
			x:snakeX,
			y:snakeY-box
		}
		let initialdis =Math.abs(food.x-snakeX)+Math.abs(food.y-snakeY);
		let dis1 = (Math.abs(food.x-dir1.x)+Math.abs(food.y-dir1.y));
		let dis2 = (Math.abs(food.x-dir2.x)+Math.abs(food.y-dir2.y));
		let dis3 = (Math.abs(food.x-dir3.x)+Math.abs(food.y-dir3.y));
		let dis4 = (Math.abs(food.x-dir4.x)+Math.abs(food.y-dir4.y));

		if(dis1<initialdis && !collisionmaze(dir1,maze) && !collision(dir1,snake) && wallcollision(dir1))
		{
			if(dis2<dis1&& !collisionmaze(dir2,maze) && !collision(dir2,snake)&& wallcollision(dir2))
			{
				if(dis3<dis2 && !collisionmaze(dir3,maze) && !collision(dir3,snake)&& wallcollision(dir3))
				{
					if(dis4<dis3 && d!='DOWN'&& !collisionmaze(dir4,maze) && !collision(dir4,snake)&& wallcollision(dir4))
						return "UP";
					else 
						return 'DOWN'
				}else
				return'RIGHT';
			}else
			return "LEFT";
		}else if(dis2<initialdis&& !collisionmaze(dir2,maze) && !collision(dir2,snake)&& wallcollision(dir2))
		{
			if(dis3<dis2&& d!='UP'&& !collisionmaze(dir3,maze) && !collision(dir3,snake)&& wallcollision(dir3))
			{
				if(dis4<dis3 && d!='DOWN'&& !collisionmaze(dir4,maze) && !collision(dir4,snake)&& wallcollision(dir4))
				{
					return "UP";
				}else
				return'DOWN';
			}else
			return "RIGHT";
		}
		else if(dis3<initialdis&& !collisionmaze(dir3,maze) && !collision(dir3,snake)&& wallcollision(dir3))
		{
			if(dis4<dis3 && d!="DOWN"&& !collisionmaze(dir4,maze) && !collision(dir4,snake)&& wallcollision(dir4))
			{
				return 'UP';
			}else
			return "DOWN";
		}
		else if(dis4<initialdis&& !collisionmaze(dir4,maze) && !collision(dir4,snake)&& wallcollision(dir4))
		{
			return 'UP';
		}else if ( !collisionmaze(dir1,maze) && !collision(dir1,snake) && d!='RIGHT'&& wallcollision(dir1))
		{
			return "LEFT";
		}else if ( !collisionmaze(dir2,maze) && !collision(dir2,snake) && d!='LEFT'&& wallcollision(dir2))
		{
			return "RIGHT";
		}
	
		else if ( !collisionmaze(dir3,maze) && !collision(dir3,snake)&& d!='UP'&& wallcollision(dir3))
		{
			return "DOWN";
		}
	
		else if ( !collisionmaze(dir4,maze) && !collision(dir4,snake)&& d!='DOWN'&& wallcollision(dir4))
		{
			return "UP";
		}else if ( !collisionmaze(dir3,maze) && !collision(dir3,snake)&& d!='UP'&& wallcollision(dir3))
		{
			return "DOWN";
		}else if ( !collisionmaze(dir2,maze) && !collision(dir2,snake)&& d!='LEFT'&& wallcollision(dir2))
		{
			return "RIGHT";
		}
		else if ( !collisionmaze(dir1,maze) && !collision(dir1,snake)&& d!='RIGHT'&& wallcollision(dir1))
		{
			return "LEFT";
		}
	
}
// autonomous gameplay without maze 
function autonomouswithoutmaze(food,snakeX,snakeY)
{
	
		let dir1 = {
			x:snakeX-1*box,
			y:snakeY
		}
		
		
		let dir2 = {
			x:snakeX+1*box,
			y:snakeY
		}
		
		
		let dir3 = {
			x:snakeX,
			y:snakeY+1*box
		}
		
		
		let dir4 = {
			x:snakeX,
			y:snakeY-box
		}
		

		let initialdis =Math.abs(food.x-snakeX)+Math.abs(food.y-snakeY);
		let dis1 = (Math.abs(food.x-dir1.x)+Math.abs(food.y-dir1.y));
		let dis2 = (Math.abs(food.x-dir2.x)+Math.abs(food.y-dir2.y));
		let dis3 = (Math.abs(food.x-dir3.x)+Math.abs(food.y-dir3.y));
		let dis4 = (Math.abs(food.x-dir4.x)+Math.abs(food.y-dir4.y));

		if(dis1<initialdis &&!collision(dir1,snake)&& wallcollision(dir1))
		{
			if(dis2<dis1&&!collision(dir2,snake)&& wallcollision(dir2))
			{
				if(dis3<dis2 &&  !collision(dir3,snake)&& wallcollision(dir3))
				{
					if(dis4<dis3 && d!='DOWN'&& !collision(dir4,snake)&& wallcollision(dir4))
						return "UP";
					else 
						return 'DOWN'
				}else
				return'RIGHT';
			}else
			return "LEFT";
		}else if(dis2<initialdis&&  !collision(dir2,snake)&& wallcollision(dir2))
		{
			if(dis3<dis2&& d!='UP'&&  !collision(dir3,snake)&& wallcollision(dir3))
			{
				if(dis4<dis3 && d!='DOWN'&&  !collision(dir4,snake)&& wallcollision(dir4))
				{
					return "UP";
				}else
				return'DOWN';
			}else
			return "RIGHT";
		}
		else if(dis3<initialdis&&  !collision(dir3,snake)&& wallcollision(dir3))
		{
			if(dis4<dis3 && d!="DOWN"&&  !collision(dir4,snake)&& wallcollision(dir4))
			{
				return 'UP';
			}else
			return "DOWN";
		}
		else if(dis4<initialdis&&  !collision(dir4,snake) && wallcollision(dir4))
		{
			return 'UP';
		}else if (  !collision(dir1,snake) && d!='RIGHT' && wallcollision(dir1))
		{
			return "LEFT";
		}else if (  !collision(dir2,snake) && d!='LEFT' && wallcollision(dir2))
		{
			return "RIGHT";
		}
	
		else if (  !collision(dir3,snake)&& d!='UP' && wallcollision(dir3))
		{
			return "DOWN";
		}
	
		else if (  !collision(dir4,snake)&& d!='DOWN' && wallcollision(dir4))
		{
			return "UP";
		}else if (  !collision(dir3,snake)&& d!='UP' && wallcollision(dir3))
		{
			return "DOWN";
		}else if (  !collision(dir2,snake)&& d!='LEFT' && wallcollision(dir2))
		{
			return "RIGHT";
		}
		else if (  !collision(dir1,snake)&& d!='RIGHT' && wallcollision(dir1))
		{
			return "LEFT";
		}
	
}
// chech that the food do not overlap with maze
 function checkfood(food,array)
 {
 	for( i = 0 ;i<41;i++)
 	{
 		if(food.x==array[i].x && food.y == array[i].y )
 			return true;
 	}
 	return false;
 }
 // checking if the food cordinates are on any part of the snake when new food is created 
  function checkfoodonsnake(food,array)
 {
 	for( i = 0 ;i<array.length;i++)
 	{
 		if(food.x==array[i].x && food.y == array[i].y )
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
// function to make the game autonomous
function changetoauto()
{
	let btn = document.getElementById('changetoauto');
	if(btn.className==='manual')
	{
		btn.className='auto';
		// alert("autonomous play is recommended without maze!!! due to some issues however you can change the maze accordig to you wish");
		let mazebtn = document.getElementById('mazebutton');
		mazebtn.className='rotate4';
		changeMaze();

	}
	else
		btn.className='manual';
}
// just a variable to avoid maze change when the game is over
let gamestatus =1 

// draw everything on the screen

let foodpos;
let foodpos2;
let mazebtn = document.getElementById('mazebutton');
function draw(){
	ctx.drawImage(ground,0,0);

	for(i =0 ;i< snake.length ;i++)
	{
		ctx.fillStyle=i==0?snakeheadcolor:"white";
		ctx.fillRect(snake[i].x,snake[i].y,box,box);
		ctx.strokeStyle = snakeheadcolor;
		ctx.strokeRect(snake[i].x,snake[i].y,box,box);
	}

	// old head position
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	// remove the tail
	
	let autostatus = document.getElementById('changetoauto');
	
	if(autostatus.className==='auto')
	{
		if(mazebtn.className==='rotate1')
		{
			d=autonomouswithoutmaze(food,snakeX,snakeY);
			console.log('hi');
		}
		else
		{
			d=autonomous(food,snakeX,snakeY);
			console.log('bye');
		}

			// if the auto play  is without maze then we shift to a low calculation function
			// to increase efficiency 
			// else wiht maze we have  to use a heavy , less efficient funcion
	}

	if(d == "LEFT") snakeX -=box;
	if(d == "UP") snakeY -=box;
	if(d == "RIGHT") snakeX +=box;
	if(d == "DOWN") snakeY +=box;


	if(snakeX==food.x && snakeY== food.y)
	{
		score++;
		// speed++;
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
	foodpos2 = checkfoodonsnake(food,snake);

		while(foodpos==true || foodpos2==true)
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
	 let currentspeed = 3200/(120-speed);
	 ctx.fillText("speed",5*box, 1.6*box);
	
	ctx.fillText(String(currentspeed.toPrecision(4))+'px/ms', 8*box , 1.6*box);
}

let speedincreaseBtn =document.getElementById('increase');
let speeddecreaseBtn = document.getElementById('decrease');
let currentspeedscreen = document.getElementById('currentSpeed');

speedincreaseBtn.onclick = function(){
	speed++;
	let currentspeed = 3200/(120-speed);
	let speedinpx = String(currentspeed.toPrecision(4))+'px/ms';
	currentspeedscreen.innerText = speedinpx;
} 

speeddecreaseBtn.onclick = function(){
	speed--;
	let currentspeed = 3200/(120-speed);
	let speedinpx = String(currentspeed.toPrecision(4))+'px/ms';
	currentspeedscreen.innerText = speedinpx;
} 


let game = setInterval(draw,120-speed);
let Maze = setInterval(drawmaze,120-speed);
