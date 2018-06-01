# Barte-npm-der

Awful name, great tool.

## Purpose
Bartender initially started as Grunt task runner for front-end development, focusing on CSS compiling and JS concatenation.

It since has evolved to Gulp and now to pure npm and grown in size to include CSS validation, linting, and compiling, image/SVG minification, and JS validation, linting, and concatenating.

Below is a list of the tools in play with the current version of Bartender.

## Configuration
Within `package.json` there are a series of configuration options that create variables for the folders Bartender will look at for building and watching the project.

There’s a core “src” and “dist” folder required, as well as variables for the individual locations for styles, assets, and scripts.

These were separated into individual variables to allow greater flexibility in the realm of folder structure and names across a variety of projects.

The options for PostCSS and cssnano exist in separate files within the project to help keep the core `package.json` file clean and easy to read. The browser requirements for all plugins are set within those configuration files.

## Plugins
### Styles
- [stylelint  -  npm](https://www.npmjs.com/package/stylelint)
- [immutable-css-cli  -  npm](https://www.npmjs.com/package/immutable-css-cli)
- [colorguard  -  npm](https://www.npmjs.com/package/colorguard)
- [node-sass  -  npm](https://www.npmjs.com/package/node-sass)
- [postcss-cli-simple  -  npm](https://www.npmjs.com/package/postcss-cli-simple)
	- [autoprefixer  -  npm](https://www.npmjs.com/package/autoprefixer)
	- [doiuse  -  npm](https://www.npmjs.com/package/doiuse)
	- [postcss-critical-css  -  npm](https://www.npmjs.com/package/postcss-critical-css)
	- [postcss-custom-properties  -  npm](https://www.npmjs.com/package/postcss-custom-properties)
	- [postcss-easing-gradients  -  npm](https://www.npmjs.com/package/postcss-easing-gradients)
	- [postcss-flexbugs-fixes  -  npm](https://www.npmjs.com/package/postcss-flexbugs-fixes)
	- [postcss-nested  -  npm](https://www.npmjs.com/package/postcss-nested)
	- [postcss-normalize  -  npm](https://www.npmjs.com/package/postcss-normalize)
	- [postcss-preset-env  -  npm](https://www.npmjs.com/package/postcss-preset-env)
- [cssnano  -  npm](https://www.npmjs.com/package/cssnano)

### Scripts
- [eslint  -  npm](https://www.npmjs.com/package/eslint)
- [babel-cli  -  npm](https://www.npmjs.com/package/babel-cli)
- [concat-cli  -  npm](https://www.npmjs.com/package/concat-cli)
- [uglify-js  -  npm](https://www.npmjs.com/package/uglify-js)

### Assets
- [imagemin-cli  -  npm](https://www.npmjs.com/package/imagemin-cli)
- [svgo  -  npm](https://www.npmjs.com/package/svgo)


## Commands
`npm run dev`
Running “dev” will run the build task for each category: styles, scripts, and image assets.

`npm run test`
Currently test runs “dev” and then re-runs stylelint, immutable, color guard, and eslint. This is fairly redundant as “dev” already runs those tasks so work is required on this command.

`npm run prod`
Running “prod” will run “dev” and “test” then minify the CSS via cssnano.

`npm run watch`
“Watch” creates a running task that checks for changes to files within the configured folders setup in `package.json`.


## Extras
Bartender also includes a variety of opinionated option files:
- `.editorconfig`
- `.eslint.json`
- `.stylelintrc`
