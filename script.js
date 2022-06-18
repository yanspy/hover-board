const board = document.getElementById('board')
const SQUARE_NUM = 1000;
for(let i=0;i<SQUARE_NUM;i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	square.addEventListener('mouseover',()=> {
		const color = getRandomColor()
		square.style.backgroundColor = color
		square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
	});
	square.addEventListener('mouseleave',()=> {
		square.style.backgroundColor = '#1d1d1d'
		square.style.boxShadow = `0 0 2px black`
	});

	board.append(square);
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
