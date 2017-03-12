# ArtSquare Landing Page
Heyo! This is your new landing page repo. 😍 Use and abuse it to your heart’s content. Below is some info on how to use it.

---

## First and foremost…
After cloning this repo and `cd`ing into its root directory, run `npm install`. Then, run `npm run modernizr`.

**Important:** One of the dev dependencies used in this repo may fail to build on OS X. According to [this github issue](https://github.com/imagemin/imagemin-jpegoptim/issues/8#issuecomment-141875960), the problem is due to OS X storing the `jpeg` dependency in a different location. If you encounter this problem, please run `brew install jpeg`, as suggested in the discussion linked above.

## Build modernizr
This template uses the modernizr CLI tool to generate a custom build.
```bash
npm run modernizr
```
The above command writes a custom modernizr build into `./source/javascript/vendor/modernizr.js`, which should get piped into whatever workflow you have set up for building and serving your prototype.

The config file at `./modernizr.json` includes _all_ tests and options by default, which can be useful for development, but terrible for production.

### Building modernizr for production
An alternative config file (`./modernizr_prod.json`) has been provided, which will be used when building for production (see [Build for production](#build-for-production) below). If you wanted to build it at any moment, just use
```bash
npm run modernizr:prod
```

## Serve your prototype for development
Compile/process markup, stylesheets, and scripts, then serve them with [`browser-sync`](https://www.browsersync.io/docs/gulp/) and load the prototype in your default browser:
```bash
npm run watch
```
Changes you make to your source files should automatically get processed and browser-sync will either inject new CSS or reload the page entirely (in the case of markup or JavaScript changes).

## Clear `build/` directory
Sometimes it’s useful to obliterate the `build/` directory completely to clear out stale files generated from source files you might have renamed or deleted. The following command does this:
```bash
npm run implode
```
Not that you couldn’t do this with `rm -rf build/*`, but whatevs.

## Build for production
When you’re ready to create a build for production, use this command:
```bash
npm run build:prod
```
This command will remove everything from the `build/` directory, build a fresh modernizr file using the `modernizr_prod.json` config file, and build the site with uglified JavaScript and compressed CSS and HTML.

## Deployment
There is an npm script reserved for deployment:
```bash
npm run deploy
```
Depending on your deployment strategy, you may want to define this script with one or more commands to help make deployments painless and repeatable. I recommend you use the `implode` script as part of that deployment process just before you run `npm run build -- --production`, to ensure no stray development files get lumped in with your production build.
