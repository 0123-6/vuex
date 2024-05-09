const { run } = require('./build')

const files = [
  'dist/vuex.js'
]

run('rollup.main.config.js', files)
