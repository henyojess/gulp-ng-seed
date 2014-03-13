This is an angularjs seed project that follows the [Best Practice Recommendations for Angular App Structure][1].

It takes advantage of the gulp build tool and makes use of bower and npm for
dependency management.

#### DIRECTORY STRUCTURE ####

    app/
      components/
        app_service.js
        app_service_test.js
      main/
      app.css
      app.js
      app_controller.js
      app_controller_test.js
      index.html
    bower_components/
    build/
    node_modules/
    .bowerrc
    .gitignore
    README.md
    bower.json
    gulpgile.js
    package.json

#### FEAUTURES ####
- follows the recommended best practice project structure for angularjs
- all js files in the app folder are concatenated into build/app.js
- all html files in the app folder except index.html are concatenated and compiled into a js file:build/templates.js and loaded into angular templateCache
- all css files in the app folder are concatenated into build/app.css
- all js files in the bower_components folder are concatenated into build/lib.js
- all css files in the bower_components folder are concatenated into build/lib.css
- index.html is copied to build/index.html
- a static server is run at port 9000 with livereload support
- when any html, js or css file in the build folder changes, they are autoreloaded on the browser

-----

#### USAGE ####
1) clone project

2) modify package.json

3) npm install

4) modify bower.json

5) bower install

6) gulp

7) open browser to http://localhost:9000

8) start hacking


  [1]: https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub