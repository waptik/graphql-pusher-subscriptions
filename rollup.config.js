import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  external: ['graphql-subscriptions', 'iterall', 'pusher-js', 'pusher'],
  plugins: [
    typescript()
  ]
}
