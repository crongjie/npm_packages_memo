
let react_router_redux = [
{ 
	type: 'desc', 
	title: 'react-router-redux', 
	url: 'https://github.com/reactjs/react-router-redux',   
	text: "You're a smart person. You use Redux to manage your application state. You use React Router to do routing. All is good.\r\n\r\nBut the two libraries don't coordinate. You want to do time travel with your application state, but React Router doesn't navigate between pages when you replay actions. It controls an important part of application state: the URL.\r\n\r\nThis library helps you keep that bit of state in sync with your Redux store. We keep a copy of the current location hidden in state. When you rewind your application state with a tool like Redux DevTools, that state change is propagated to React Router so it can adjust the component tree accordingly. You can jump around in state, rewinding, replaying, and resetting as much as you'd like, and this library will ensure the two stay in sync at all times.\r\n\r\nThis library is not necessary for using Redux together with React Router. You can use the two together just fine without any additional libraries. It is useful if you care about recording, persisting, and replaying user actions, using time travel. If you don't care about these features, just use Redux and React Router directly." 
},
{
  type: 'source', language: 'jsx', code: "import React from 'react'\r\nimport ReactDOM from 'react-dom'\r\nimport { createStore, combineReducers } from 'redux'\r\nimport { Provider } from 'react-redux'\r\nimport { Router, Route, browserHistory } from 'react-router'\r\nimport { syncHistoryWithStore, routerReducer } from 'react-router-redux'\r\n\r\nimport reducers from '<project-path>/reducers'\r\n\r\n// Add the reducer to your store on the `routing` key\r\nconst store = createStore(\r\n  combineReducers({\r\n    ...reducers,\r\n    routing: routerReducer\r\n  })\r\n)\r\n\r\n// Create an enhanced history that syncs navigation events with the store\r\nconst history = syncHistoryWithStore(browserHistory, store)\r\n\r\nReactDOM.render(\r\n  <Provider store={store}>\r\n    { /* Tell the Router to use our enhanced history */ }\r\n    <Router history={history}>\r\n      <Route path=\"/\" component={App}>\r\n        <Route path=\"foo\" component={Foo}/>\r\n        <Route path=\"bar\" component={Bar}/>\r\n      </Route>\r\n    </Router>\r\n  </Provider>,\r\n  document.getElementById('mount')\r\n)"
}
];

export default react_router_redux
