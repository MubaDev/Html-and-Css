canvas = document.getElementById('canvas')
context = canvas.getContext('2d')
// context.beginPah()
context.arc(160,160,150,0,2 * Math.PI)
context.fillStyle = 'Green'
context.strokeStyle = 'blue'
context.fill()
context.stroke()
document.getElementById('image').src = canvas.toDataURL()