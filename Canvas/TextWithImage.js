canvas = document.getElementById('canvas')
context = canvas.getContext('2d')

context.font = '290pt Impact'
image = new Image()
image.src = '123.jpg'

image.onload = function()
{
    pattern = context.createPattern(image, 'repeat')
    context.fillStyle = pattern
    context.fillText('ART', 30, 312)
    context.strokeText('ART', 30, 312)
}