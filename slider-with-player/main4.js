
var pic;
var pictures = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg", "pic7.jpg"];
var y = 0;

function slide (){
  document.getElementById("pic").src= pictures[y];
  y++;
  if(y > pictures.length) {
    y = 0;

  }else {

  }

}
setInterval(slide, 3000);

// function mouseEnter() {
//   document.getElementById("stop")=
// }
// function mouseLeave() {
//   document.getElementById("demo").style.color = "black";
// }
