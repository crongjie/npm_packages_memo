import toastr from 'toastr' 
import React from 'react'


let ToastrExample = React.createClass({
	render: function() {
		return (<p> 
            <button type="button" className="btn btn-primary" onClick = { 
                function() { 
                    toastr.success('Success!') 
                } 
            }>Success</button>
            &nbsp;
            <button type="button" className="btn btn-primary" onClick = { 
                function() { 
                    toastr.warning('Warning!') 
                } 
            }>Warning!</button>
            &nbsp;
            <button type="button" className="btn btn-primary" onClick = { 
                function() { 
                    toastr.error('Error!') 
                } 
            }>Error!</button>
        </p>);
	}
});

let toastr_data = [
{
  "type": "desc",
  "title": "toastr",
  "url": "https://github.com/CodeSeven/toastr",
  "text": "toastr is a Javascript library for non-blocking notifications. jQuery is required. The goal is to create a simple core library that can be customized and extended."
},
<ToastrExample / >,
{
  "language": "jsx",
  "type": "source",
  "code": "import toastr from 'toastr' \r\n\r\nlet ToastrExample = React.createClass({\r\n\trender: function() {\r\n\t\treturn (<button type=\"button\" className=\"btn btn-primary\" onClick = { \r\n            function() { \r\n                toastr.success('This is a test for toastr') \r\n            } \r\n        }>Test</button>);\r\n\t}\r\n});"
}
];

export default toastr_data
