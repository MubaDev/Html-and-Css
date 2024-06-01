canvas = document.getElementById('canvas')
context = canvas.getContext('2d')

color1 = 'yellow'
color2 = 'green'
color3 = 'red'
color4 = 'violet'
color5 = 'blue'

gradient = context.createLinearGradient(55,10,55,160)
gradient.addColorStop(0.0, color1)
gradient.addColorStop(0.2, color2)
gradient.addColorStop(0.5, color3)
gradient.addColorStop(0.8, color4)
gradient.addColorStop(1.0, color5)
context.fillStyle = gradient
context.fillRect(10,10,90,150)

gradient = context.createLinearGradient(110,85,200,85)
gradient.addColorStop(0.0, color1)
gradient.addColorStop(0.2, color2)
gradient.addColorStop(0.5, color3)
gradient.addColorStop(0.8, color4)
gradient.addColorStop(1.0, color5)
context.fillStyle = gradient
context.fillRect(110, 10, 90, 150)

gradient = context.createLinearGradient(210,10,300,160)
gradient.addColorStop(0.0, color3)
gradient.addColorStop(0.2, color4)
gradient.addColorStop(0.5, color1)
gradient.addColorStop(0.8, color5)
gradient.addColorStop(1.0, color2)
context.fillStyle = gradient
context.fillRect(210, 10, 90, 150)

gradient = context.createRadialGradient(355,85,0,355,85,100)
gradient.addColorStop(0.0, color4)
gradient.addColorStop(0.2, color2)
gradient.addColorStop(0.5, color1)
gradient.addColorStop(0.8, color5)
gradient.addColorStop(1.0, color3)
context.fillStyle = gradient
context.fillRect(310,10,90,150)

image = new Image()
image.src = '124.jpg'

image.onload = function()
{
    pattern = context.createPattern(image, 'repeat')
    context.fillStyle = pattern
    context.fillRect(410, 10, 220, 300)
}