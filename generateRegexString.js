const Methods = [
  'Start',
  'Render',
  'KeyDown',
  'KeyUp',
  'MouseDown',
  'MouseUp',
  'MouseMove',
  'Error',
]

let str = ['\\$']
Methods.forEach(meth => {
  str.push(`__${meth}__`)
})
console.log(str.join('|'));