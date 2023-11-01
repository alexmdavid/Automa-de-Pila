// Create a Canvas:
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


//Arrows Function
function drawArrow(x, y, length, direction) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(direction);
  
  // Línea principal de la flecha
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(length, 0);
  ctx.stroke();
  
  // Punta de la flecha
  ctx.beginPath();
  ctx.moveTo(length - 10, -5);
  ctx.lineTo(length, 0);
  ctx.lineTo(length - 10, 5);
  ctx.fill();
  
  ctx.restore();
}


//curve arrow function
function drawCurvedArrow(startX, startY, r) {
  ctx.beginPath();
  ctx.arc(startX+r, startY-10, r, Math.PI, true);
  ctx.stroke();
  drawArrow(startX+8,startY,-1,290)
  ctx.restore();
}

// Define a circle 

  // state P
  ctx.beginPath();
  ctx.arc(100, 250, 20, 0, 2 * Math.PI,false);
  ctx.closePath();
  ctx.stroke(); 

    //arista from P to P
     drawCurvedArrow(84,230,22)

    // arista from P to Q
    drawArrow(120,250,160,0);


  // state Q
  ctx.beginPath();
  ctx.arc(300, 250, 20, 0, 2 * Math.PI,false);
  ctx.closePath();
  ctx.stroke(); 

      //arista from Q to Q
      drawCurvedArrow(284,230,22)

      // arista from Q to R
      drawArrow(320,250,160,0);


  // state R
  ctx.beginPath();
  ctx.arc(500, 250, 20, 0, 2 * Math.PI,false);
  ctx.closePath();
  ctx.stroke(); 

    // state R aceptacion
    ctx.beginPath();
    ctx.arc(500, 250, 15, 0, 2 * Math.PI,false);
    ctx.closePath();
    ctx.stroke(); 


    var edges = [
      // Aristas de p a p
      { from: 0, to: 0, labels: ["b, b / bb", "a, b / ba", "b, a / ab", "a, a / aa", "b, # / #b", "a, # / #a"] },
      // Aristas de p a q
      { from: 0, to: 1, labels: ["b, b / λ", "a, a / λ"] },
      // Aristas de q a q
      { from: 1, to: 1, labels: ["b, b / λ", "a, a / λ"] },
      // Arista de q a r
      { from: 1, to: 2, labels: ["λ, # / #"] },
    ];


