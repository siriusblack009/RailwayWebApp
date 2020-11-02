import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Search from './Search/Search'
import Home from './Home/Home'
import UserLogin from './UserLogin/UserLogin'
import AdminLogin from './AdminLogin/AdminLogin'
import SignUp from './SignUp/SignUp'
import TrainList from './TrainList/TrainList'
import Passenger from './Passenger/Passenger'
import AdminPage from './AdminPage/AdminPage'
function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path='/search' component={Search}/>
                    <Route path='/userlogin' component={UserLogin}/>
                    <Route path="/adminlogin" component={AdminLogin}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path='/trainlist' component={TrainList}/>
                    <Route path="/passenger" component={Passenger}></Route>
                    <Route path="/adminpage" component={AdminPage}/>
                </Switch>

            </Router>
        </>
    )
}

export default App
