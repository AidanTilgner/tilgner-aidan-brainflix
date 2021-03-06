import './App.scss';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import Page from './components/Page/Page';
import Upload from './components/Upload/Upload';

export const API_URL = 'http://localhost:8080';

class App extends React.Component {

    render(){
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Page/>
                        </Route>
                        <Route path="/upload"
                            component={Upload}
                        />
                        <Route 
                            path="/videos/:id"
                            render={routerProps => <Page {...routerProps}/>}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
    
}

export default App;
