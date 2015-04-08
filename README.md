# React-component
5

Why React?

1)  Modular architecture for creating reusable web components

2) Performance gain (handle DOM batch manipulation, prevent memory leak)

3) Declarative code style (Easier to read & maintain)

4) Server and client side rendering

5) Markup + display logic tied together which may result in slimmer bundle.

6) Virtual DOM diffing and updating

7) Componentized UI is the future of web development, and you need to start doing it now.

8) Open the door to use native apps for iOS/android with React native.

We use JSX which is javascript in html syntax 
React JSX transform from XML like syntax to native javscript.

 you can simply run npm install -g react-tools to install our command-line jsx tool. 
 This tool will translate files that use JSX syntax to plain JavaScript files that can run directly in the browser. I
for commandline jsx->js
 jsx -x jsx components/ build/

 jsx --watch src/ build/

 Browserify - tool that lets you use common.js format for your javascript dependencies

 Webpack gives option to build multiple bundle files. You can have multiple entrypoints with webpack.

 Webpack installation:

  npm install webpack -g

  npm install jsx-loader --save-dev ( for webpack)

   npm i --save-dev jquery

  Browserify uses Reactify 

  Webpack has a config file. 
  You can setup a config file and tell how you want different file types to handle. 
  It lets you use 
    - common.js which browesrify uses
    - AMD which require.js uses.
    - ES6 imports 
    - CSS like CSS, SASS 


    webpack.config.

    To run: webpack

    The add-ons below are in the development (unminified) version of React only:

TestUtils, simple helpers for writing test cases (unminified build only).
Perf, for measuring performance and giving you hint where to optimize.



