

const mainmenu = {
    title: 'NPM Package Memo',
    items: [
        { text: 'Home', url: '/' },
        { text: 'Packages', url: '/', items:[
                { text: 'axios', url: '/axios' },
                { text: 'babel-polyfill', url: '/babel_polyfill' },
                { text: 'history', url: '/history' },
                { text: 'jquery', url: '/jquery' },
                { text: 'lodash', url: '/lodash' },
                { text: 'normalizr', url: '/normalizr' },
                { text: 'reselect', url: '/reselect' },
                { text: 'toastr', url: '/toastr' },           

                { type: 'separator' },
                { type: 'header', text: 'React' },
                { text: 'react', url: '/react' },
                { text: 'react-addons-shallow-compare', url: '/react_addons_shallow_compare' },
                { text: 'react-addons-transition-group', url: '/react_addons_transition_group' },
                { text: 'react-router', url: '/react_router' },


                { type: 'separator' },
                { type: 'header', text: 'Redux' },
                { text: 'redux', url: '/redux' },
                { text: 'react-redux', url: '/react_router' },
                { text: 'react-router-redux', url: '/react_router_redux' },
                { text: 'redux-actions', url: '/redux_actions' },
                { text: 'redux-form', url: '/redux_form' },
                { text: 'redux-saga', url: '/redux_saga' },
                { text: 'redux-ui', url: '/redux_ui' }
            ]  
        }
    ]
};

export default mainmenu
