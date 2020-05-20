// ------Variables ----

var colorPick = document.getElementById('colorPick')
var divPickedColor = document.getElementById('pickedColor')

// -------Def rgba Object -----

let rgba = {
    red: 0,
    green: 0,
    blue: 0,
    opacity: 1
}
colorPick.addEventListener('input', setColor);

function setColor(e) {
    rgba[e.target.id] = e.target.valueAsNumber
    let rgbaColor = `rgba(${rgba.red} , ${rgba.green} , ${rgba.blue} , ${rgba.opacity})`
    divPickedColor.style.background = rgbaColor
}