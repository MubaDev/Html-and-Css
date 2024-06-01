canvas = document.getElementById('canvas')
context = canvas.getContext('2d')

image = new Image()
image.src = '124.jpg'

image.onload = function()
{
    pattern = context.createPattern(image, 'repeat')
    context.fillStyle = pattern
    context.fillRect(410, 10, 220, 300)
}