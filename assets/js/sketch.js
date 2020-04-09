window.addEventListener("load", () => {
	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext('2d');

	//Resizing
	canvas.height - window.innerHeight;
	canvas.width = window.innerWidth;

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
});

// rewrite resize function to anon function
window.addEventListener('resize', resizeCanvas);
function resizeCanvas(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
resizeCanvas();