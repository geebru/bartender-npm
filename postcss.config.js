module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true
    }),
    require('postcss-easy-import')({
      prefix: '_'
    }),
    require('postcss-nesting'),
    require('postcss-css-variables')({
      preserve: true
    }),
    require('postcss-critical-css')({
      minify: false
    }),
    require('cssnano')({
      preset: 'default'
    })
  ]
}