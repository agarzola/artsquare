# New Prototype
Heyo! This is your new prototype project. 😍 Use and abuse it to your heart’s content (contempt?). Here’s what you can do w/it:

## Build modernizr
This template uses the modernizr CLI tool to generate a custom build.
```bash
npm run modernizr
```
This script command writes a custom modernizr build into `./source/javascript/vendor/modernizr.js`, which should get piped into whatever workflow you have set up for building and serving your prototype.

The config file at `./modernizr.json` includes _all_ tests and options by default, which can be useful for development, but terrible for production. When your project is ready for deployment, be sure to remove tests and options you’re not using and then run the build again.

## Serve your prototype for development
Compile/process markup, stylesheets, and scripts, then serve them with [`browser-sync`](https://www.browsersync.io/docs/gulp/) and load the prototype in your default browser:
```bash
npm run watch
```
Changes you make to your source files should automatically get processed and browser-sync will either inject new CSS or reload the page entirely (in the case of markup or JavaScript changes).

## Build for production
When you’re ready to create a build for production, use this command:
```bash
npm run build -- --production
```
This will do everything `npm run watch` does with the exception that it won’t watch for changes, and the added benefit of uglifying your JavaScript and rendering compressed CSS and HTML.

## Clear `build/` directory
Sometimes it’s useful to obliterate the `build/` directory completely to clear out stale files generated from source files you might have renamed or deleted. The following command does this:
```bash
npm run implode
```
Not that you couldn’t do this with `rm -rf build/*`, but whatevs.

## Deployment
There is an npm script reserved for deployment:
```bash
npm run deploy
```
Depending on your deployment strategy, you may want to define this script with one or more commands to help make deployments painless and repeatable. I recommend you use the `implode` script as part of that deployment process just before you run `npm run build -- --production`, to ensure no stray development files get lumped in with your production build.
