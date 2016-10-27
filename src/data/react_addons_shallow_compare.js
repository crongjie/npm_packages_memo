
let react_addons_shallow_compare = [
{
  "type": "desc",
  "title": "react-addons-shallow-compare",
  "url": "https://facebook.github.io/react/docs/shallow-compare.html",
  "text": "shallowCompare is a helper function to achieve the same functionality as PureRenderMixin while using ES6 classes with React.\r\n\r\nIf your React component's render function is \"pure\" (in other words, it renders the same result given the same props and state), you can use this helper function for a performance boost in some cases.\r\n"
},
{
  "type": "memo",
  "text": "It is mainly used for Performance Boost"
},
{
  "language": "jsx",
  "type": "source",
  "title": "Example",
  "code": "var shallowCompare = require('react-addons-shallow-compare');\r\n\r\nexport class SampleComponent extends React.Component {\r\n  shouldComponentUpdate(nextProps, nextState) {\r\n    return shallowCompare(this, nextProps, nextState);\r\n  }\r\n\r\n  render() {\r\n    return <div className={this.props.className}>foo</div>;\r\n  }\r\n}\r\n"
}
];

export default react_addons_shallow_compare
