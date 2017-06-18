var globalcontext;
var i=false;
var xMax;
var yMax;

function drawPic(id)
{
	var div=document.getElementById(id);
	var canvas=document.createElement("canvas");
	div.appendChild(canvas);
	var context=null;
	if(canvas.getContext){
		context=canvas.getContext('2d');
		globalcontext=context;
	}
	else{
		alert("not support canvas");
	}
	xMax=document.documentElement.clientWidth;
	yMax=document.documentElement.clientHeight;
	canvas.width = xMax;
	canvas.height = yMax;
	
	setInterval(rotate,1000);
	//drawTaiji(context,xMax,yMax);
	//drawbagua(context,0.15*yMax,xMax,yMax);
	
	//drawImg(context);
	
}

function rotate(){
	if(i){
		globalcontext.clearRect(0,0,xMax,yMax);
		globalcontext.translate((xMax+yMax)/2,(yMax-xMax)/2);
		globalcontext.rotate(Math.PI/2);
	}else{
		i=true;
	}
	
	//drawTaiji(globalcontext,xMax,yMax);
	drawbagua(globalcontext,0.15*yMax,xMax,yMax);	
	//drawImg(globalcontext);
}

function drawImg(context){
	image =new Image();
	image.src="pic/1.png";
	context.drawImage(image,0,0);
	
}

function drawTaiji(context,xMax,yMax){
	
	var radius1=yMax*0.3;
	
	//negetive half circle
	context.beginPath();	
	context.arc(xMax/2,yMax*0.35,radius1/2,Math.PI/2*3,Math.PI/2,false);    
	context.arc(xMax/2,yMax*0.65,radius1/2,Math.PI/2*3,Math.PI/2,true);
	context.arc(xMax/2,yMax/2,radius1,Math.PI/2,Math.PI/2*3,false);	
    context.closePath();
	context.fillStyle = "#000000";
	context.fill();
	
	//positive half circle
	context.beginPath();	
	context.arc(xMax/2,yMax*0.35,radius1/2,Math.PI/2*3,Math.PI/2,false);    
	context.arc(xMax/2,yMax*0.65,radius1/2,Math.PI/2*3,Math.PI/2,true);
	context.arc(xMax/2,yMax/2,radius1,Math.PI/2,Math.PI/2*3,true);	
    context.closePath();
	context.fillStyle = "#ffffff";
	context.fill();
	
	//positive circle
	context.beginPath();
	context.arc(xMax/2,yMax*0.35,radius1*0.156,0,Math.PI*2,true);
    //context.arc(xMax/2,(yMax-radius1)/2,radius1/2*0.618,0,Math.PI*2,true);
	context.closePath();
	context.fillStyle = "#ffffff";
	context.fill();
	
	//negetive circle
	context.beginPath();
	context.arc(xMax/2,yMax*0.65,radius1*0.156,0,Math.PI*2,true);
    //context.arc(xMax/2,(yMax+radius1)/2,radius1/2*0.618,0,Math.PI*2,true);
	context.closePath();
	context.fillStyle = "#000000";
	context.fill();
}

function drawbagua(context,length,xMax,yMax){
	drawFirst(context,length,xMax,yMax);
	drawSecond(context,length,xMax,yMax);
	drawThird(context,length,xMax,yMax);
	drawFourth(context,length,xMax,yMax);
	drawFifth(context,length,xMax,yMax);
	drawSixth(context,length,xMax,yMax);
	drawSecondventh(context,length,xMax,yMax);
	drawEighth(context,length,xMax,yMax);
}

function drawFirst(context,length,xMax,yMax){
	var x=(xMax-length)/2;
	drawyangyao(context,length,x,yMax*0.05,x+length,yMax*0.05);
	drawyangyao(context,length,x,yMax*0.10,x+length,yMax*0.10);
	drawyangyao(context,length,x,yMax*0.15,x+length,yMax*0.15);
}

function drawSecond(context,length,xMax,yMax){
	var x=(xMax-length)/2;
	drawyinyao(context,length,x,yMax*0.85,x+length,yMax*0.85);
	drawyinyao(context,length,x,yMax*0.90,x+length,yMax*0.90);
	drawyinyao(context,length,x,yMax*0.95,x+length,yMax*0.95);
}

function drawThird(context,length,xMax,yMax){
	var y=(yMax-length)/2;
	drawyinyao(context,length,xMax/2-yMax*0.45,y,xMax/2-yMax*0.45,y+length);
	drawyangyao(context,length,xMax/2-yMax*0.40,y,xMax/2-yMax*0.40,y+length);
	drawyinyao(context,length,xMax/2-yMax*0.35,y,xMax/2-yMax*0.35,y+length);
}

function drawFourth(context,length,xMax,yMax){
	var y=(yMax-length)/2;
	drawyangyao(context,length,xMax/2+yMax*0.45,y,xMax/2+yMax*0.45,y+length);
	drawyinyao(context,length,xMax/2+yMax*0.40,y,xMax/2+yMax*0.40,y+length);
	drawyangyao(context,length,xMax/2+yMax*0.35,y,xMax/2+yMax*0.35,y+length);
}

function drawFifth(context,length,xMax,yMax){
	var x11=xMax/2+(0.45*yMax-length/2)/Math.sqrt(2);
	var x21=xMax/2+(0.40*yMax-length/2)/Math.sqrt(2);
	var x31=xMax/2+(0.35*yMax-length/2)/Math.sqrt(2);
	var x12=xMax/2+(0.45*yMax+length/2)/Math.sqrt(2);
	var x22=xMax/2+(0.40*yMax+length/2)/Math.sqrt(2);
	var x32=xMax/2+(0.35*yMax+length/2)/Math.sqrt(2);
	var y11=yMax/2-(0.45*yMax+length/2)/Math.sqrt(2);
	var y21=yMax/2-(0.40*yMax+length/2)/Math.sqrt(2);
	var y31=yMax/2-(0.35*yMax+length/2)/Math.sqrt(2);
	var y12=yMax/2-(0.45*yMax-length/2)/Math.sqrt(2);
	var y22=yMax/2-(0.40*yMax-length/2)/Math.sqrt(2);
	var y32=yMax/2-(0.35*yMax-length/2)/Math.sqrt(2);
	drawyangyao(context,length,x11,y11,x12,y12);
	drawyinyao(context,length,x21,y21,x22,y22);
	drawyinyao(context,length,x31,y31,x32,y32);
}

function drawSixth(context,length,xMax,yMax){
	var x11=xMax/2-(0.45*yMax-length/2)/Math.sqrt(2);
	var x21=xMax/2-(0.40*yMax-length/2)/Math.sqrt(2);
	var x31=xMax/2-(0.35*yMax-length/2)/Math.sqrt(2);
	var x12=xMax/2-(0.45*yMax+length/2)/Math.sqrt(2);
	var x22=xMax/2-(0.40*yMax+length/2)/Math.sqrt(2);
	var x32=xMax/2-(0.35*yMax+length/2)/Math.sqrt(2);
	var y11=yMax/2-(0.45*yMax+length/2)/Math.sqrt(2);
	var y21=yMax/2-(0.40*yMax+length/2)/Math.sqrt(2);
	var y31=yMax/2-(0.35*yMax+length/2)/Math.sqrt(2);
	var y12=yMax/2-(0.45*yMax-length/2)/Math.sqrt(2);
	var y22=yMax/2-(0.40*yMax-length/2)/Math.sqrt(2);
	var y32=yMax/2-(0.35*yMax-length/2)/Math.sqrt(2);
	drawyinyao(context,length,x11,y11,x12,y12);
	drawyinyao(context,length,x21,y21,x22,y22);
	drawyangyao(context,length,x31,y31,x32,y32);
}

function drawSecondventh(context,length,xMax,yMax){
	var x11=xMax/2+(0.45*yMax-length/2)/Math.sqrt(2);
	var x21=xMax/2+(0.40*yMax-length/2)/Math.sqrt(2);
	var x31=xMax/2+(0.35*yMax-length/2)/Math.sqrt(2);
	var x12=xMax/2+(0.45*yMax+length/2)/Math.sqrt(2);
	var x22=xMax/2+(0.40*yMax+length/2)/Math.sqrt(2);
	var x32=xMax/2+(0.35*yMax+length/2)/Math.sqrt(2);
	var y11=yMax/2+(0.45*yMax+length/2)/Math.sqrt(2);
	var y21=yMax/2+(0.40*yMax+length/2)/Math.sqrt(2);
	var y31=yMax/2+(0.35*yMax+length/2)/Math.sqrt(2);
	var y12=yMax/2+(0.45*yMax-length/2)/Math.sqrt(2);
	var y22=yMax/2+(0.40*yMax-length/2)/Math.sqrt(2);
	var y32=yMax/2+(0.35*yMax-length/2)/Math.sqrt(2);
	drawyangyao(context,length,x11,y11,x12,y12);
	drawyangyao(context,length,x21,y21,x22,y22);
	drawyinyao(context,length,x31,y31,x32,y32);
}

function drawEighth(context,length,xMax,yMax){
	var x11=xMax/2-(0.45*yMax-length/2)/Math.sqrt(2);
	var x21=xMax/2-(0.40*yMax-length/2)/Math.sqrt(2);
	var x31=xMax/2-(0.35*yMax-length/2)/Math.sqrt(2);
	var x12=xMax/2-(0.45*yMax+length/2)/Math.sqrt(2);
	var x22=xMax/2-(0.40*yMax+length/2)/Math.sqrt(2);
	var x32=xMax/2-(0.35*yMax+length/2)/Math.sqrt(2);
	var y11=yMax/2+(0.45*yMax+length/2)/Math.sqrt(2);
	var y21=yMax/2+(0.40*yMax+length/2)/Math.sqrt(2);
	var y31=yMax/2+(0.35*yMax+length/2)/Math.sqrt(2);
	var y12=yMax/2+(0.45*yMax-length/2)/Math.sqrt(2);
	var y22=yMax/2+(0.40*yMax-length/2)/Math.sqrt(2);
	var y32=yMax/2+(0.35*yMax-length/2)/Math.sqrt(2);
	drawyinyao(context,length,x11,y11,x12,y12);
	drawyangyao(context,length,x21,y21,x22,y22);
	drawyangyao(context,length,x31,y31,x32,y32);
}

function drawyangyao(context,length,x,y,dx,dy){
	context.beginPath();
	context.lineWidth=10;
	context.moveTo(x,y);
	context.lineTo(dx,dy);
	context.closePath();
	context.stroke();
}

function drawyinyao(context,length,x,y,dx,dy){
	var x1 = x+(dx-x)*0.4;
	var y1 = y+(dy-y)*0.4;
	var x2 = x+(dx-x)*0.6;
	var y2 = y+(dy-y)*0.6;
	
	context.beginPath();
	context.lineWidth=10;
	
	context.moveTo(x,y);
	context.lineTo(x1,y1);
	context.moveTo(x2,y2);
	context.lineTo(dx,dy);
	context.closePath();
	context.stroke();
}

