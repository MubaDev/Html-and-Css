canvas = document.getElementById('canvas')
context = canvas.getContext('2d')
canvas.width = 640
canvas.height = 320


context.strokeStyle = 'blue'
context.fillStyle = 'yellow'
// context.beginPath()
context.fillRect(20,20,600,280)
context.strokeRect(20,20,600,280)
context.strokeStyle = 'Red'
context.fillStyle = 'white'
context.lineWidth = 20
context.fillRect(40,40,500,180)
context.strokeRect(40,40,500,180)
context.clearRect(70,70,400,150)
// context.rect(20, 20,600,280)
context.stroke()