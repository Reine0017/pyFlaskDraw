window.addEventListener("load", () => {
	const clearButton = document.querySelector('#clear');
	const blackButton = document.querySelector('#blackColour');
	const whiteButton = document.querySelector('#whiteColour');
	const canvas = document.querySelector("#canvas");
	//use this to change canvas object to string "hello world"
	//const canvas = document.querySelector("#demo").innerHTML = "Hello World!"
	const ctx = canvas.getContext('2d');

	const img = new Image();
	img.src = "assets/images/reinePic.jpg";

	img.onload = () => {
		console.log(img.width + 'x' + img.height);
		console.log(canvas.width);
		console.log(canvas.height);
		const [img_scaled_width, img_scaled_height] = drawImageToScale(img, ctx);
		canvas.width = img_scaled_width;
		canvas.height = img_scaled_height;
		console.log("img_scaled_width",img_scaled_width);
		console.log("img_scaled_height",img_scaled_height);
		window.addEventListener('resize', drawImageToScale(img,ctx));

	}

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

		//console.log(e.clientX, e.clientY);

		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}

	// eventListeners
	canvas.addEventListener("mousedown", startPosition);
	canvas.addEventListener("mouseup", finishedPosition);
	canvas.addEventListener("mousemove", draw)


	//clearButton.addEventListener('click', ()=>console.log("clicked"));
	//here we're not executing the function, we're just passing the function
	//if we do clearButton.addEventListener('click', clearCanvas(img, ctx, canvas.width, canvas.height));
	//we are executing the function. (We DO NOT want to execute a function)
	clearButton.addEventListener('click', () => clearCanvas(img, ctx, canvas.width, canvas.height));
	blackButton.addEventListener('click', () => ctx.strokeStyle = "#000000");
	whiteButton.addEventListener('click', () => ctx.strokeStyle = "#ffffff");

	console.log("img")
	
});

function drawImageToScale(img, ctx){
	const img_width = 650;
	const scaleFactor = img_width / img.width;
	const img_height = img.height * scaleFactor;
	//console.log("drawImgFnWidth", img_width);
	//console.log("drawImgFnHeight", img_height)
	ctx.drawImage(img, 0, 0,img_width,img_height);
	return [img_width,img_height];
}


function clearCanvas(img,ctx,img_scaled_width,img_scaled_height){
	ctx.clearRect(0,0, img_scaled_width, img_scaled_height);
	drawImageToScale(img, ctx);
}






