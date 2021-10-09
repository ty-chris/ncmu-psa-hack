import './App.css';
import ButtonAppBar from './components/AppBar';
import LandingPage from './components/layout/LandingPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ButtonAppBar />
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
