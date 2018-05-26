require('../scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Background from './components/background.jsx';
import Man from './components/man.jsx';
import Buttons from './components/buttons.jsx';
import Skills from './components/skills.jsx';
import Contact from './components/contact.jsx';

document.addEventListener('DOMContentLoaded', function(){


    class App extends React.Component {


        render() {
            return (
                    <HashRouter>
                        <div>
                        <Background />
                            <Buttons />
                            <Switch>
                                <Route exact path='/' component={(props) => <Man  {...props} />} />
                                <Route path='/skills' component={Skills} />
                                <Route path='/contact' component={Contact} />
                            </Switch>
                        </div>
                    </HashRouter>
            )       
         }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );


});