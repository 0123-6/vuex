import { createEntries } from './rollup.config'

export default createEntries([
  { input: 'src/index.cjs.js', file: 'dist/vuex.js', format: 'umd', env: 'development' }
])
