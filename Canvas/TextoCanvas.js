canvas = document.getElementById('canvas')
context = canvas.getContext('2d')

output = 'to be, or not to be'

// context.font = '3em Halvetica'
// context.textAlign = 'right'
// context.strokeText(output, 10, 50)

// context.textAlign = 'left'
// context.font = '16px Impact'
// context.strokeText(output, 10, 100)

// context.textAlign = 'center'
// context.font = '150% Courier'
// context.strokeText(output, 10, 150)

// context.textAlign = 'start'
// context.font = '10mm Times'
// context.strokeText(output, 10, 210)

// context.textAlign = 'end'
// context.font = '50pt Arial'
// context.strokeText(output, 10, 300)
context.strokeStyle = 'blue'
context.moveTo(0, 160)
context.lineTo(640, 160)
context.stroke()
context.strokeStyle = 'red'
context.lineWidth = 2
context.font = '26pt Helvetica'

context.textBaseline = 'top'
context.strokeText('Top', 20, 160)

context.textBaseline = 'middle'
context.strokeText('Middle', 150, 160)

context.textBaseline = 'bottom'
context.strokeText('Bottom', 300, 160)

context.textBaseline = 'alphabetic'
context.strokeText('Alphabetic', 450, 160)

