import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './Main.scss';
import Header from './components/Header/Header';
import Help from './components/Help/Help'
import Main from './components/Main/Main'
import PageHistory from './components/PageHistory/PageHistory'
// import Footer from './components/Footer/Footer';


function App (){
  return (
    <main>
      <Header />
        <Switch>
            <Route exact path="/" component={Main} exact />
            <Route exact path="/pageHistory" component={PageHistory} />
            <Route exact path="/help" component={Help} />
        </Switch>
    </main>
)
}


export default App;
