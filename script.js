console.log('Javascript is running!')

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const WIDTH= 400
const HEIGHT= 400

let red = {
  l: 50,
  t: 100,
  w: 20,
  h: 20
}

let orange = {
  l: 300,
  t: 100,
  w: 50,
  h: 50
}

function drawOrangeSquare () {
  ctx.fillStyle = 'orange'
  ctx.fillRect(orange.l, orange.t, orange.w, orange.h)
}
drawOrangeSquare()

function drawRedSquare () {
   ctx.fillStyle = 'red';
    ctx.fillRect(red.l, red.t,red.w,red.h);
  
}
drawRedSquare()

function drawWinScreen () {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = '48px serif';
  ctx.fillStyle = 'lime';
  ctx.fillText("You win!", 10, 50);
}

function drawLoseScreen () {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = '48px serif';
  ctx.fillStyle = 'red';
  ctx.fillText("You lose!", 10, 50);
}


function listener (e) {
  
  console.log(e.code)
  switch (e.code) {
    case 'ArrowRight':
      red.l += 10;
      break;
    case 'ArrowLeft' : 
      red.l -= 10;
      break;
    case 'ArrowDown' : 
      red.t += 10;
      break;
    case 'ArrowUp' : 
      red.t -= 10;
  }
  
  
  // clear the canvas
    ctx.clearRect(0,0, WIDTH, HEIGHT)
    
    // redraw all shapes in their new positions
    drawRedSquare()
    drawOrangeSquare()
    
    if (red.l>= 400) {
      drawWinScreen()
    }
    
    if (
        //if red's left side is further left than the right side of obstacle
         red.l<=orange.l+orange.w &&
        // // if red's right side is further right than the left side of obstacle
          red.l+red.w >= orange.l &&
        // // if red's top side is further up than bottom side of obstacle 
        red.t <= orange.t+orange.h &&
        // // if red's bottom side is lower than top side of obstacle
        red.t + red.h >= orange.t
        
       ) {
      drawLoseScreen()
    }
  
}



window.addEventListener('keydown', listener)

