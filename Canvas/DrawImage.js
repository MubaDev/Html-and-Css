canvas = document.getElementById('canvas')
context = canvas.getContext('2d')

image = new Image()
image.src = 'download.jfif'

image.onload = function()
{
    context.drawImage(image, 10, 10)
    // context.drawImage(image, 200, 10, 240, 240)
    // context.drawImage(image, 460,10,80,80)
    // context.drawImage(image, 560, 10, 40, 40)
    context.drawImage(image, 43, 32, 75, 75 , 200, 10, 160, 160)
    context.drawImage(image, 43, 32, 75, 75, 380, 10, 240, 240)
    context.strokeStyle = 'blue'
    context.strokeRect(10+43, 10+32, 75, 75)
    stroke()
}