function rgb(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

const btn = document.getElementById("mybtn");

btn.addEventListener("click", function(){
    document.body.style.backgroundColor = rgb();
    btn.style.backgroundColor = rgb()
});
