# orangetree

This is my personal webpage. It's a static generated website yet I'm not using a particular static website generator since most of them had more functionality than I actually needed and I didn't have much control on what I should require to put up the website.

## Structure ##

The  `./app` folder contains the application files. Running `gulp` will output everything from the `./app` folder into the `./public` folder. Tests will run as well.

### HTML ###
I using [pug](https://github.com/pugjs/pug), formally known as jade, as the HTML template engine. If you know [HAML](http://haml.info/) from ruby, you'll feel at home. 

### CSS ###
Using [SASS](https://github.com/sass/node-sass) here. Nothing special. =)

### Javascript ###
Every module is written with ES2015 syntax and then transformed into ES5 and compiled. 

### Gulp ###

As mentioned before, running `gulp` will compile and output everything from the `app` folder into the `public` folder. Worth mentioning that I'm also using [nsp](https://nodesecurity.io/) to check for known vulnerabilities in my project.

#### Why Gulp? ####

I really enjoy the way [Gulp](http://gulpjs.com/) deals dependencies with code instead of configuration. I've tried [Grunt](http://gruntjs.com/) but it wasn't so nice to handle and the way dependencies are declared resembled long and convoluted xml configuration files. If someone has an alternative to Gulp, let me know.

### Run local ###
If you feel like playing with the project, you can run it locally by just firing the following command `...`.

## License
[MIT License](http://www.opensource.org/licenses/mit-license.php)

**[Follow me (@orangeeli) on Twitter!](https://twitter.com/orangeeli)**