window.addEventListener("load", () => {
	const canvas = document.querySelector("#canvas");
	//use this to change canvas object to string "hello world"
	//const canvas = document.querySelector("#demo").innerHTML = "Hello World!"
	const ctx = canvas.getContext('2d');

	const img = new Image();
	img.src = "assets/images/lena.jpg";

	img.onload = () => {
	console.log(img.width + 'x' + img.height);
	console.log(canvas.width);
	console.log(canvas.height);
	const [img_scaled_width, img_scaled_height] = drawImageToScale(img, ctx);
	canvas.width = img_scaled_width;
	canvas.height = img_scaled_height;
	console.log("img_scaled_width",img_scaled_width);
	console.log("img_scaled_height",img_scaled_height);
	window.addEventListener('resize', resizeCanvas(canvas,img,ctx, img_scaled_width, img_scaled_height));
	}

	// // creates a filled rect on screen
	// ctx.fillRect(50, 50, 200, 200);
	// // creates a rect outline
	// ctx.strokeStyle = "blue";
	// ctx.lineWidth = 5;
	// ctx.strokeRect(200, 200, 200, 300);

	// ctx.beginPath();
	// ctx.moveTo(100,100);
	// ctx.lineTo(200,100);
	// ctx.lineTo(200,150);
	// ctx.closePath();
	// ctx.stroke();

	// variables
	let painting = false;

	function startPosition(e){
		painting = true;
		draw(e);
	}

	function finishedPosition(){
		painting = false;
		ctx.beginPath();
	}

	function draw(e){
		if (!painting)
			return;
		ctx.lineWidth = 3;
		ctx.lineCap = 'round';

		console.log(e.clientX, e.clientY);

		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}

	// eventListeners
	canvas.addEventListener("mousedown", startPosition);
	canvas.addEventListener("mouseup", finishedPosition);
	canvas.addEventListener("mousemove", draw)

	// rewrite resize function to anon function
	console.log("img")
	
});

function drawImageToScale(img, ctx){
	const img_width = 600;
	const scaleFactor = img_width / img.width;
	const img_height = img.height * scaleFactor;
	console.log("drawImgFnWidth", img_width);
	console.log("drawImgFnHeight", img_height)
	ctx.drawImage(img, 0, 0,img_width,img_height);
	return [img_width,img_height];
}

// rewrite resize function to anon function
//window.addEventListener('resize', resizeCanvas);
function resizeCanvas(canvas,img,ctx,img_scaled_width,img_scaled_height){
	console.log("IMGWIDTH", img.width);
	console.log("IMGHEIGHT", img.height);
	canvas.width = img_scaled_width;
	canvas.height = img_scaled_height;
	drawImageToScale(img,ctx);
}








