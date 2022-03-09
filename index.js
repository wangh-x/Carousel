const container = document.querySelector(".container")
const wrap = document.querySelector(".wrap")
const next = document.querySelector(".arrow_right")
const prev = document.querySelector(".arrow_left")
const dots = document.querySelectorAll(".dots>li")

let index = 0
let containerWidth = container.offsetWidth
wrap.style.width = containerWidth * (dots.length + 2) + 'px'

const changeImg = () => {
  wrap.style.transition = 'all .5s'
  wrap.style.left = -(index + 1) * containerWidth + 'px'
  if (index >= 5) {
    index = 0
    setTimeout(() => {
      wrap.style.transition = ''
      wrap.style.left = -(index + 1) * containerWidth + 'px'
    }, 500)
  }
  if (index <= -1) {
    index = 4
    setTimeout(() => {
      wrap.style.transition = ''
      wrap.style.left = -(index + 1) * containerWidth + 'px'
    }, 500)
  }
  for (let i = 0, len = dots.length; i < len; i++) {
    dots[i].className = "";
  }
  dots[index].className = "on";
}

let timer = null;
const autoPlay = () => {
  timer = setInterval(() => {
    index++
    changeImg()
  }, 3000);
}
autoPlay();

container.onmouseenter = () => {
  clearInterval(timer);
}

container.onmouseleave = () => {
  autoPlay();
}

next.onclick = () => {
  index++
  changeImg()
}

prev.onclick = () => {
  index--
  changeImg()
}

for (let i = 0, len = dots.length; i < len; i++) {
  dots[i].onclick = () => {
    index = i
    changeImg()
  }
}