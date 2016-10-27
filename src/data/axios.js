import React from 'react'
import axios from 'axios' 

let AxiosExample = React.createClass({
	render: function() {
		return (<button type="button" className="btn btn-primary" onClick = { 
            function() { 

              axios.get('json/test.json')
                .then(function (response) {
                  alert(JSON.stringify(response));
                })
                .catch(function (error) {
                  alert(JSON.stringify(error));
                });
            } 
        }>Test</button>);
	}
});


let axios_data = [
{
  "type": "desc",
  "title": "axios",
  "url": "https://www.npmjs.com/package/axios",
  "text": "Features\r\n* Make XMLHttpRequests from the browser\r\n* Make http requests from node.js\r\n* Supports the Promise API\r\n* Intercept request and response\r\n* Transform request and response data\r\n* Automatic transforms for JSON data\r\n* Client side support for protecting against XSRF"
}, <AxiosExample />,
{
  "language": "jsx",
  "type": "source",
  "code": "import React from 'react'\r\nimport axios from 'axios' \r\n\r\nlet AxiosExample = React.createClass({\r\n\trender: function() {\r\n\t\treturn (<button type=\"button\" className=\"btn btn-primary\" onClick = { \r\n            function() { \r\n\r\n              axios.get('json/test.json')\r\n                .then(function (response) {\r\n                  alert(JSON.stringify(response));\r\n                })\r\n                .catch(function (error) {\r\n                  alert(JSON.stringify(error));\r\n                });\r\n            } \r\n        }>Test</button>);\r\n\t}\r\n});"
}
];

export default axios_data
