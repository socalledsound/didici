import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header/Header'
import MainQuestion from './features/posts/MainQuestion'
import "normalize.css" 

const App = () => {
    return ( 
        <div>
            <Header />
            <Switch />
                <Route path='/' component={MainQuestion}/>
                <Redirect to='/' />
        </div>
     );
}
 
export default App;