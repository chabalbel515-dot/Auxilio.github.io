const canvas=document.createElement("canvas")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

canvas.style.position="fixed"
canvas.style.top="0"
canvas.style.left="0"
canvas.style.zIndex="-1"

document.body.appendChild(canvas)

const ctx=canvas.getContext("2d")

let x=canvas.width/2
let y=canvas.height/2

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.beginPath()
ctx.arc(x,y,8,0,Math.PI*2)
ctx.fillStyle="orange"
ctx.fill()

requestAnimationFrame(draw)

}

draw()

canvas.addEventListener("touchmove",(e)=>{

e.preventDefault()

let t=e.touches[0]

let result=Engine.process(t.clientX,t.clientY)

x+=result.dx
y+=result.dy

},{passive:false})