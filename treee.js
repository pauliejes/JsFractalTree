function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function draw(startX, startY, len, theta, branchWidth){
  ctx.beginPath();
  ctx.save();

  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgba(4,255,0,0.7)";
  ctx.strokeStyle = random_rgba();
  ctx.fillStyle = random_rgba();
  ctx.lineWidth = branchWidth;
  ctx.translate(startX, startY);
  ctx.rotate(theta * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  if(len < 10) {
    ctx.beginPath();
    ctx.arc(0, -len, 10, 0, Math.PI/2);
    ctx.fill();
    ctx.restore();
    return;
  }

  draw(0, -len, len*0.8, theta+10, branchWidth*0.8);
  draw(0, -len, len*0.8, theta-10, branchWidth*0.8);


  ctx.restore();
}

var c = document.getElementById("treeCanvas");
c.width = 2000;
c.height = 1500;
c.style.width = "375px";
c.style.height = "812px";
var ctx = c.getContext("2d");
ctx.fillStyle = "#f4b042";
ctx.fillRect(0, 0, c.width, c.height);
ctx.scale(6,2.5);
draw(167, 350, 60, 0, 10);