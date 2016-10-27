
let babel_polyfill = [

{
  "type": "desc",
  "title": "babel-polyfill",
  "url": "https://babeljs.io/docs/usage/polyfill/",
  "text": "Babel includes a polyfill that includes a custom regenerator runtime and core-js.\r\n\r\nThis will emulate a full ES2015 environment and is intended to be used in an application rather than a library/tool. This polyfill is automatically loaded when using babel-node.\r\n\r\nThis means you can use new built-ins like Promise or WeakMap, static methods like Array.from or Object.assign, instance methods like Array.includes, and generator functions (provided you use the regenerator plugin). The polyfill adds to the global scope as well as native prototypes like String in order to do this."
},
{
  "language": "javascript",
  "type": "source",
  "title": "Usage in require",
  "code": "require(\"babel-polyfill\");"
},
{
  "language": "javascript",
  "type": "source",
  "title": "Usage in import",
  "code": "import \"babel-polyfill\";"
},
{
  "language": "javascript",
  "type": "source",
  "title": "Usage in webpack",
  "code": "module.exports = {\r\n   entry: ['babel-polyfill', './app/js']\r\n};\r\n"
}

];

export default babel_polyfill
