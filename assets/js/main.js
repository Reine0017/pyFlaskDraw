const clearButton = document.querySelector('.clear');
const stroke_weight = document.querySelector('.stroke-weight');
const color_picker = document.querySelector('.color-picker');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = "assets/images/lena.jpg";

img.onload = () => {
	console.log(img.width + 'x' + img.height);
	console.log(canvas.width);
	console.log(canvas.height)
	const img_width = 600;
	const scaleFactor = img_width / img.width;
	const img_height = img.height * scaleFactor;
	ctx.drawImage(img, 0, 0,img_width,img_height);
}

//const fileName = e.target.files[0].name;

let isDrawing = false;

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

clearButton.addEventListener('click', clearCanvas);

function start(e){
	isDrawing = true;
	draw(e);
}

function draw({clientX: x, clientY:y}){
	if (!isDrawing) return;
	ctx.lineWidth = stroke_weight.value;
	ctx.lineCap = "round";
	ctx.strokeStyle = color_picker.value;

	console.log("x", x);
	console.log("y", y-50);

	ctx.lineTo(x,y);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(x,y);
}

function stop(){
	isDrawing = false;
	ctx.beginPath();
}

function clearCanvas(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
	const img_width = 600;
	const scaleFactor = img_width / img.width;
	const img_height = img.height * scaleFactor;
	ctx.drawImage(img, 0, 0,img_width,img_height);
}

window.addEventListener('resize', resizeCanvas);
function resizeCanvas(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	const img_width = 600;
	const scaleFactor = img_width / img.width;
	const img_height = img.height * scaleFactor;
	ctx.drawImage(img, 0, 0,img_width,img_height);
}
resizeCanvas();