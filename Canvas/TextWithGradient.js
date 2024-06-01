canvas = document.getElementById('canvas')
context = canvas.getContext('2d')

context.font = '290pt Impact'
gradient = context.createLinearGradient(320,0,320,320)
gradient.addColorStop(0, 'white')
gradient.addColorStop(1, 'black')
context.fillStyle = gradient
context.fillText('ART', 30, 312)
context.strokeText('ART', 30, 312)

context.font = '290pt Impact'
gradient = context.createRadialGradient(320,320,30,320,320,400)
gradient.addColorStop(0.00, 'red')
gradient.addColorStop(0.16, 'orange')
gradient.addColorStop(0.33, 'yellow')
gradient.addColorStop(0.50, 'green')
gradient.addColorStop(0.66, 'blue')
gradient.addColorStop(0.83, 'indigo')
gradient.addColorStop(1.00, 'violet')
context.fillStyle = gradient
context.fillText('ART', 30, 312)
context.strokeText('ART', 30, 312)