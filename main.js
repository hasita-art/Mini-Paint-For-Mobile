let myCanvas = document.getElementById("myCanvas")
let pen = myCanvas.getContext("2d")
let tracker = 0, x1, y1, x2, y2;

if(screen.width < 428){
    myCanvas.width = screen.width;
    document.body.style.overflow = "hidden";
}

window.addEventListener("mousedown", mouseDownAction)
window.addEventListener("mouseup", mouseUpAction)
window.addEventListener("mouseleave", mouseLeaveAction)
window.addEventListener("mousemove", mouseMoveAction)
window.addEventListener("touchstart", touchStartAction)
window.addEventListener("touchmove", touchMoveAction)

function touchStartAction(event){
    x1 = event.offsetX
    y1 = event.offsetY
    console.log(event)
}

function touchMoveAction(event){
    x2 = event.offsetX
    y2 = event.offsetY

    pen.beginPath()
    if(!!getColor()){
        pen.strokeStyle = getColor()
    }
    else{
        pen.strokeStyle = "black"
    }
    if(!!lineWidth()){
        pen.lineWidth = lineWidth()
    }
    else{
        pen.lineWidth = 3
    }
    pen.moveTo(x1, y1)
    pen.lineTo(x2, y2)
    pen.stroke()
    x1 = x2
    y1 = y2
}

function mouseDownAction(){
    tracker = 1
}
function mouseUpAction(){
    tracker = 0
}
function mouseLeaveAction(){
    tracker = 0
}
function mouseMoveAction(event){
    x1 = event.offsetX
    y1 = event.offsetY
    console.log(x1, y1)
    if(tracker==1){
        pen.beginPath()
        if(!!getColor()){
            pen.strokeStyle = getColor()
        }
        else{
            pen.strokeStyle = "black"
        }
        if(!!lineWidth()){
            pen.lineWidth = lineWidth()
        }
        else{
            pen.lineWidth = 3
        }
        pen.moveTo(x1,y1)
        pen.lineTo(x2,y2)
        pen.stroke()
    }
    x2 = x1
    y2 = y1
}

function clr(){
    pen.clearRect(0,0,myCanvas.width, myCanvas.height)
}
function getColor(){
    return document.getElementById("color").value
}
function lineWidth(){
    return document.getElementById("lineWidth").value
}