var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d");

var playing = false;
var renderScale = 3;

var rules = [
	[0, 0],
	[0, 0],
	[0, 1],
	[1, 1],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0]
];

function render(board) {
	canvas.width = board[0].length * renderScale;
	canvas.height = board.length * renderScale;

	for(x = 0; x < board[0].length; x++) {
		for(y = 0; y < board.length; y++) {
			ctx.fillStyle = "black";
			if (board[y][x] === 1)
				ctx.fillRect(x * renderScale, y * renderScale, renderScale, renderScale);
		}
	}
}
var board = [];
function fillboard(width = 50, height = 50){
	for(x = 0; x < width; x++) {
		for(y = 0; y < height; y++) {
			if(!board[y])
				board[y] = [];
			board[y][x] = Math.round(Math.random());
		}
	}
}

function get(board, x, y) {
	if(x < 0) return 0;
	if(x > board[0].length - 1) return 0;
	if(y < 0) return 0;
	if(y > board.length - 1) return 0;
	return board[y][x];
}

function updateBoard(board) {
	var new_board = [];
	for(x = 0; x < board[0].length; x++) {
		for(y = 0; y < board.length; y++) {
			if(!new_board[y])
				new_board[y] = [];
			var center = 0, up = 0, down = 0, left = 0, right = 0;
			center = board[y][x];
			total = 0;
			total += get(board, x-1, y-1);
			total += get(board, x  , y-1);
			total += get(board, x+1, y-1);
			total += get(board, x-1, y);
			total += get(board, x+1, y);
			total += get(board, x-1, y+1);
			total += get(board, x  , y+1);
			total += get(board, x+1, y+1)

			// game rules
			if(rules[total][center] == 1) {
				new_board[y][x] = 1;
			} else {
				new_board[y][x] = 0;
			}
		}
	}
	return new_board;
}

document.getElementById("reset").addEventListener("click", function(){
	fillboard(200, 100);
});

document.getElementById("play").addEventListener("click", function(){
	playing = !playing;
});

window.addEventListener("keypress", function(e) {
	e.preventDefault();

	var keynum;
	if(window.event) {
		keynum = e.keyCode;
	} else {
		keynum = e.which;
	}

	console.log(keynum);

	switch(keynum) {
		case 32: // space
			playing = !playing;
			break;
		case 110:
		case 78: // n
			console.log("n key pressed");
			fillboard(200, 100);
			break;
	}
});

for(t = 0; t <= 8; t++) {
	for(n = 0; n <= 1; n++) {
		document.getElementById(n + "-" + t).addEventListener("click", function(){
			if(this.checked) {
				rules[this.id[2] * 1][this.id[0] * 1] = 1;
			} else {
				rules[this.id[2] * 1][this.id[0] * 1] = 0;
			}
		});
	}
}

function loop() {
	if(playing) board = updateBoard(board);
	render(board);

	var delay = (100 - document.getElementById("speed").value) * 10;
	window.setTimeout(loop, delay);
}
fillboard(200, 100);
loop();