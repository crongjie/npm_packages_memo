
let home = [
{ 
	type: 'desc', 
	title: 'Package Name', 
	url: 'https://www.someurl.com',   
	text: "Package Description" 
},
<img src="test.png" / >
,
{
  type: 'source', language: 'jsx', code: "/*\r\nRSource - Source Code Component\r\n*/\r\nlet React = require('react');\r\nlet ReactDOM = require('react-dom');\r\n\r\n\r\nlet RSource = React.createClass({\r\n\trender: function() {\r\n\r\n    let item = this.props.item;\r\n\r\n\t\treturn (<div><h4>Source Code</h4> \r\n        <pre><code className={ item.language }>{ item.code }</code></pre>\r\n      </div>);\r\n\t}\r\n});\r\n  \t\r\nexport default RSource"
},
{
  type: 'memo', text: "Some memo"
}
];

export default home
