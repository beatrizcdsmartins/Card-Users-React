import react from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Users from './containers/Users'

function Routes(){

    return(
        <Router>
            <Switch> 
                      {/* path:Caminhos, rotas */}
                <Route exact path='/' component={Home}/>
                <Route exact path='/users' component={Users}/>
            </Switch>
        </Router>

// o Switch deixa a aplicação mais performática, assim o programa não terá que percorrer todas as rotas para ter certeza se é aquela que está pedindo mesmo. Ele já vai direto na que é chamada
    )

}

export default Routes
