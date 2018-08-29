import React,{ Component } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import OneRoute  from './router/index.js';
import  Page404  from './pages/Page404/index';


class App extends Component{
    render(){
        return (
        
        <Router>
            <div className = 'App yscApp'>
               
                <Switch>
                    {OneRoute}
                    <Route path="/*" component = {Page404}/>
                </Switch>
            </div>
        </Router>
        )
    }
}

export default App;