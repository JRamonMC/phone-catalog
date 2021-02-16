import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './core/Home';
import AddPhone from './components/addPhone/AddPhone';
import Phone from './components/phone/Phone';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add" exact component={AddPhone} />
                <Route path="/seephone/:phoneId" exact component={Phone}/>
            </Switch> 
        </BrowserRouter>
    )
}

export default Routes;