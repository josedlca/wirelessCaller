
slidr.create('carousel', {
    keyboard: true,
    overflow: true,
    theme: '#fff',
    timing: { 'linear': '0.5s ease-in' },
    touch: true,
    transition: 'linear'
  }).add('h', ['one', 'two', 'three', 'one'])
  .start();