canvas = document.getElementById('canvas')
context = canvas.getContext('2d')
color1 = '#fff'
color2 = '#000'

gradient = context.createLinearGradient(55, 10, 55, 160)
gradient.addColorStop(0, color1)
gradient.addColorStop(1, color2)
context.fillStyle = gradient
context.fillRect(10, 10, 90, 150)

gradient = context.createLinearGradient(110,85,200,85)
gradient.addColorStop(0,color1)
gradient.addColorStop(1,color2)
context.fillStyle = gradient
context.fillRect(110,10,90,150)

gradient = context.createLinearGradient(210, 10, 300, 160)
gradient.addColorStop(0,color1)
gradient.addColorStop(1,color2)
context.fillStyle = gradient
context.fillRect(210,10,90,150)

gradient = context.createRadialGradient(355,85,0,355,85,100)
gradient.addColorStop(0,color1)
gradient.addColorStop(1,color2)
context.fillStyle = gradient
context.fillRect(310,10,90,150)

