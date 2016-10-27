
let react_router = [
{ 
	type: 'desc', 
	title: 'react-router', 
	url: 'https://github.com/ReactTraining/react-router',   
	text: "React Router is a complete routing library for React.\r\n\r\nReact Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.\r\n"
},
{
  type: 'source', title: 'Source Code - Simple Example',  language: 'jsx', code: "import React from 'react'\r\nimport ReactDOM from 'react-dom'\r\nimport { Router, Route, Link, browserHistory } from 'react-router'\r\n\r\n\r\n\r\nlet Home = React.createClass({\r\n\trender: function() {\r\n\t\treturn (<p>Home | <Link to=\"/about\">To About</Link> </p>);\r\n\t}\r\n});\r\n\r\n\r\nlet About = React.createClass({\r\n\trender: function() {\r\n\t\treturn (<p>About | <Link to=\"/\">To Home</Link> </p>);\r\n\t}\r\n});\r\n\r\nReactDOM.render(\r\n\t<Router history={browserHistory}>\r\n\t\t<Route path=\"/\" component={ Home }  / >\r\n\t\t<Route path=\"/about\" component={ About }  />\r\n\t</Router>\r\n, document.getElementById(\"main\"));\r\n"
},
{
    type: 'memo', title: 'Passing props to component',  text: 'Ref: http://stackoverflow.com/questions/27864720/react-router-pass-props-to-handler-component'
},
{
  type: 'source', title: 'Method 1',  language: 'jsx', code: "let Home = React.createClass({\r\n\trender: function() {\r\n\t\treturn (<p>{this.props.data}</p>);\r\n\t}\r\n});\r\n//<Route path=\"/\" component={ RPage } data={pages.home} / >\r\nReactDOM.render(\r\n\t<Router history={browserHistory}>\r\n\t\t<Route path=\"/\" component={() => <Home data=\"abcdefg\"/>} / >\r\n\t</Router>\r\n, document.getElementById(\"main\"));"
},
{
  type: 'source', title: 'Method 2 - In Router side',  language: 'jsx', code: "ReactDOM.render(\r\n\t<Router history={browserHistory}>\r\n\t\t<Route path=\"/\" component={ RPage } data={pages.home} / >\r\n\t\t<Route path=\"/react_router\" component={ RPage } data={pages.react_router} />\r\n\t</Router>\r\n, document.getElementById(\"main\"));"
},
{
  type: 'source', title: 'Method 2 - In Component side (using this.props.route)', language: 'jsx', code: "let RPage = React.createClass({\r\n\trender: function() {\r\n        let data = this.props.route.data;\r\n\r\n        return (<div>\r\n        <RNavBar data = { data_mainmenu } />\r\n        {\r\n            (data) ? <div className=\"container\">\r\n                    {\r\n                        data.map(function(item, idx){\r\n                            if (item.type == 'desc') return  <RDesc key = { 'pi' + idx } item={item} />;\r\n                            else if (item.type == 'source') return <RSource key = { 'pi' + idx } item={item} />;\r\n                            else if (item.type == 'memo') return <RMemo key = { 'pi' + idx } item={item} />;\r\n                            else return <RExample key = { 'pi' + idx } item={item} />;\r\n                        })\r\n                    }\r\n                </div> : ''\r\n        }\r\n        </div>\r\n        );\r\n\t}\r\n});"
},
{
    type: 'memo', title: 'Passing with parameter',  text: 'Ref: https://github.com/ReactTraining/react-router/blob/master/examples/query-params/app.js'
},
{
  "language": "jsx",
  "type": "source",
  "title": "Define parameter in Router:",
  "code": "<Route path=\"/:page\" component={ RPage }  / >"
},
{
  "language": "jsx",
  "type": "source",
  "title": "Get parameter in Component",
  "code": "this.props.params.page"
},
{
  "language": "jsx",
  "type": "source",
  "title": "Define parameter in Link - Method 1",
  "code": "<Link to=\"/\" params={{ page: \"123\"}} >Some Link</Link>"
},
{
  "language": "jsx",
  "type": "source",
  "title": "Define parameter in Link - Method 2",
  "code": "<Link to=\"/123\" ></Link>"
}
];

export default react_router
