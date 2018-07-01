/**
 * Hit Ball
 */

var hitball = {};



function Starthitball() {
	if (hitball.LevelUp) {
		// stage change code
	} else {
		init();
	}
	print(hitball.table, hitball.rows, hitball.column, hitball.grass);
	var col=( Math.floor(Math.random() * (hitball.column-2 - 1 + 1)) +1); 
	hitball.ball.Column=col;
	hitball.ball.NextColumn=col;
	hitball.table.rows[1].cells[col].innerHTML=hitball.ballPic;
	hitball.table.rows[1].cells[col].style.width=hitball.side;
	hitball.table.rows[1].cells[col].style.height=hitball.side;
	hitball.ball.thrown=true;
	if(col%2==0)
	{
	hitball.ball.direction="LeftDown";
	}
	else 
	{
		hitball.ball.direction="RightDown";
	}
	document.getElementById("notify").innerHTML = "STAGE : " + hitball.Stage;
}

function willStart() {
	hitball.LockScreen = false;
	hitball.refreshIntervalId = setInterval(throwBall, hitball.ballSpeed);
}

function Reset() {
	cleanGround();
	clearInterval(hitball.refreshIntervalId);
	Starthitball();

}

function throwBall()
{
	if(0<hitball.ball.Row && hitball.ball.Row<hitball.rows-1 && 0<hitball.ball.Column && hitball.ball.Column<hitball.column-1)
		{
		stepCalculate();
		hitball.table.rows[hitball.ball.Row].cells[hitball.ball.Column].innerHTML = ".";
		hitball.table.rows[hitball.ball.NextRow].cells[hitball.ball.NextColumn].innerHTML = hitball.ballPic;
		hitball.table.rows[hitball.ball.NextRow].cells[hitball.ball.NextColumn].style.width=hitball.side;
		hitball.table.rows[hitball.ball.NextRow].cells[hitball.ball.NextColumn].style.height=hitball.side;
		
		
	}
}

function stepCalculate()
{
	hitball.ball.Row=hitball.ball.NextRow;
	hitball.ball.Column=hitball.ball.NextColumn;
	switch(hitball.ball.direction)
	{
	case "LeftDown" :
		LeftDown();
		break;
	case "LeftUp" :  
		LeftUp();
		break;
	case "RightDown" :  
		RightDown();
		break;
	case "RightUp" :  
		RightUp();
		break;
	default : break;
	}
}

function LeftDown()
{

// if ball at the second last row, game over
// ball in the mid, so col-- and row++
// ball at the green side, so row++ and col++ and direction=rightdown
	// ball at the botton corner
		//next row and column is gree, so direction =rightup and , row-- and column++
		//if next row and column or row++ and column++ not green , Game Over
// ball at the third last row
	//if next row and col gree, so row-- and col-- and direction=leftup



if(hitball.ball.Row==hitball.rows-2)
{
//Game Over
}else if(hitball.ball.Column==1)
{
	if(hitball.table.rows[hitball.ball.Row+1].cells[hitball.ball.Column].style.backgroundColor == "green" ||
	hitball.table.rows[hitball.ball.Row+1].cells[hitball.ball.Column+1].style.backgroundColor == "green")
	{
		hitball.ball.NextRow=hitball.ball.Row-1;
		hitball.ball.NextColumn=hitball.ball.Column+1;
		hitball.ball.direction="RightUp";
	}
	else 
	{
		hitball.ball.NextRow=hitball.ball.Row+1;
		hitball.ball.NextColumn=hitball.ball.Column+1;
		hitball.ball.direction="RightDown";
	}

}
else if(hitball.table.rows[hitball.ball.Row+1].cells[hitball.ball.Column].style.backgroundColor == "green")
{
	hitball.ball.NextRow=hitball.ball.Row-1;
	hitball.ball.NextColumn=hitball.ball.Column-1;
	hitball.ball.direction="LeftUp";
}
else
{
	hitball.ball.NextRow=hitball.ball.Row+1;
	hitball.ball.NextColumn=hitball.ball.Column-1;
}
}

function LeftUp()
{
//if ball column is 1
	//if ball row is 1, so row++ and col++ and direction=rightdown
	//else row-- and col++ and direction rightUp
//else row-- and col--
if(hitball.ball.Column==1)
{
	if(hitball.ball.Row==1)
	{
		hitball.ball.NextRow=hitball.ball.Row+1;
		hitball.ball.NextColumn=hitball.ball.Column+1;
		hitball.ball.direction="RightDown";
	}
	else
	{
		hitball.ball.NextRow=hitball.ball.Row-1;
		hitball.ball.NextColumn=hitball.ball.Column+1;
		hitball.ball.direction="RightUp";
	}
}
else if(hitball.ball.Row==1)
{
		hitball.ball.NextRow=hitball.ball.Row+1;
		hitball.ball.NextColumn=hitball.ball.Column-1;
		hitball.ball.direction="LeftDown";
}
else
{
	hitball.ball.NextRow=hitball.ball.Row-1;
	hitball.ball.NextColumn=hitball.ball.Column-1;

}
}

function RightDown()
{
// if ball at the second last row, game over
// ball in the mid, so col and row++
// ball at the green side, so row++ and col-- and direction=rightdown
	// ball at the botton corner
		//next row and column is gree, so direction =rightup and , row-- and column++
		//if next row and column or row++ and column++ not green , Game Over
// ball at the third last row
	//if next row and col gree, so row-- and col-- and direction=leftup

if(hitball.ball.Row==hitball.rows-2)
{
//Game Over
}else if(hitball.ball.Column==hitball.column-2)
{
	if(hitball.table.rows[hitball.ball.Row+1].cells[hitball.ball.Column].style.backgroundColor == "green" ||
	   hitball.table.rows[hitball.ball.Row+1].cells[hitball.ball.Column-1].style.backgroundColor == "green")
	{
		hitball.ball.NextRow=hitball.ball.Row-1;
		hitball.ball.NextColumn=hitball.ball.Column-1;
		hitball.ball.direction="LeftUp";
	}
	else 
	{
		hitball.ball.NextRow=hitball.ball.Row+1;
		hitball.ball.NextColumn=hitball.ball.Column-1;
		hitball.ball.direction="LeftDown";
	}

}
else if(hitball.table.rows[hitball.ball.Row+1].cells[hitball.ball.Column].style.backgroundColor == "green")
{
	hitball.ball.NextRow=hitball.ball.Row-1;
	hitball.ball.NextColumn=hitball.ball.Column+1;
	hitball.ball.direction="RightUp";
}
else
{
	hitball.ball.NextRow=hitball.ball.Row+1;
	hitball.ball.NextColumn=hitball.ball.Column+1;
}

}

function RightUp()
{
//if ball column is 1
	//if ball row is 1, so row++ and col++ and direction=rightdown
	//else row-- and col++ and direction rightUp
//else row-- and col--
if(hitball.ball.Column==hitball.column-2)
{
	if(hitball.ball.Row==1)
	{
		hitball.ball.NextRow=hitball.ball.Row+1;
		hitball.ball.NextColumn=hitball.ball.Column-1;
		hitball.ball.direction="LeftDown";
	}
	else
	{
		hitball.ball.NextRow=hitball.ball.Row-1;
		hitball.ball.NextColumn=hitball.ball.Column-1;
		hitball.ball.direction="LeftUp";
	}
}
else if(hitball.ball.Row==1)
{
		hitball.ball.NextRow=hitball.ball.Row+1;
		hitball.ball.NextColumn=hitball.ball.Column+1;
		hitball.ball.direction="RightDown";
}
else
{
	hitball.ball.NextRow=hitball.ball.Row-1;
	hitball.ball.NextColumn=hitball.ball.Column+1;

}
}


function controls() {
	if (hitball.hitcount == hitball.Stage * 10) 
	{
		hitball.Stage++;
		hitball.LockScreen = true;
		hitball.LevelUp = true;
		Reset();

	}
	if (!hitball.LockScreen) {
		var x = event.which || event.keyCode;
		switch (x) {
		case 37:
			if(hitball.pad[0]>1)
			{
				hitball.allowedRange=true;
			}
			move("Left");
			break;
		case 39:
			if(hitball.pad[2]<hitball.column-2)
			{
				hitball.allowedRange=true;
			}
			move("Right");
			break;
		/*
		 * case 38: moveUp(hitball.hero); break; case 40:
		 * moveDown(hitball.hero); break;
		 */
		default:
			document.getElementById("notify").innerHTML = "Wrong key";
		}
		
		recolorPad();

	}
}

function recolorPad()
{
	for(var i=0;i<hitball.pad.length;i++)
	{
	hitball.table.rows[hitball.rows - 2].cells[hitball.pad[i]].style.backgroundColor = "Green";
	hitball.table.rows[hitball.rows - 2].cells[hitball.pad[i]].innerHTML = "";
	}
}

function move(direction)
{
		for(var i=0;i<hitball.pad.length;i++)
		{
			if(direction=="Left")
			{
				if(hitball.allowedRange)
				{
				hitball.table.rows[hitball.rows - 2].cells[hitball.pad[i]].style.backgroundColor = "Black";
				hitball.table.rows[hitball.rows - 2].cells[hitball.pad[i]].innerHTML = ".";
				hitball.pad[i]-=1;
				}
			}
			if(direction=="Right")
			{
				if(hitball.allowedRange)
				{				
				hitball.table.rows[hitball.rows - 2].cells[hitball.pad[i]].style.backgroundColor = "Black";
				hitball.table.rows[hitball.rows - 2].cells[hitball.pad[i]].innerHTML = ".";
				hitball.pad[i]+=1;
				}
			}
		}
		hitball.allowedRange=false;
}


function print(table, rows, column, data) {
	for (var i = 0; i < rows; i++) {
		var row = table.insertRow(0);
		for (var j = 0; j < column; j++) {
			var cell = row.insertCell(0);
			cell.innerHTML = ".";
		}
	}
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < column; j++) {
			if ((j == 0 || j == column - 1 || i == 0) && i != rows - 1) {
				hitball.table.rows[i].cells[j].innerHTML = "";
				hitball.table.rows[i].cells[j].style.backgroundColor = "green";
setCellDimension(i,j,hitball.side);

			}
			if (i == rows - 1) {
				hitball.table.rows[i].cells[j].innerHTML = "";
				hitball.table.rows[i].cells[j].style.backgroundColor = "red";
			}
			setCellDimension(i,j,hitball.cell);		
		}
	}

	// draw hit pad
	for(var i=0;i<hitball.pad.length;i++)
	{
	hitball.table.rows[hitball.rows - 2].cells[hitball.pad[i]].innerHTML = "";
	hitball.table.rows[hitball.rows - 2].cells[hitball.pad[i]].style.backgroundColor = "green";
	setCellDimension(hitball.rows - 2,hitball.pad[i],hitball.side);
	}
}

function setCellDimension(row,col,data)
{

	hitball.table.rows[row].cells[col].style.width = data;
	hitball.table.rows[row].cells[col].style.height = data;
}
function cleanGround() {
	for (var i = 0; i < hitball.rows; i++) {
		hitball.table.deleteRow(0);
	}
}

function init() {
	hitball.side="20px";
	hitball.cell="40px";
	hitball.rows = 10;
	hitball.column = 20;
	hitball.postball = "*";
	hitball.clearFlag = false;
	hitball.table = document.getElementById("GameGround");
	hitball.EmptyGround = ".";
	hitball.ballSpeed = 500;
	hitball.Stage = 1;
	hitball.hitcount = 0;
	hitball.ballPic='<img class="imgpac" src="ball.gif">';
	hitball.LockScreen = true;
	hitball.allowedRange=false;
	hitball.LevelUp = false;
	hitball.ball = {
		Row : 1,
		Column : 1,
		NextRow : 1,
		NextColumn : 1,
		direction : "",
		thrown : false
			
	};
	hitball.pad = [hitball.column / 2 - 1,hitball.column / 2,hitball.column / 2 + 1];
}
