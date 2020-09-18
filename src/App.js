import React from 'react';
import { BrowserRouter, MemoryRouter, HashRouter , Switch, Route} from 'react-router-dom';
// import './App.css';
import './Style.scss';
// import md5 from 'md5';
// import axios from 'axios';
import Header from './components/Header/Header';
// import Form from './components/Form/Form';
// import History from './components/History/History';
// import Results from './components/Results/Results';
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
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       loading: false,
//       request:{},
//       history: {}
//     }
//   }

// toggleLoading = () => {
//     this.setState({ loading: !this.state.loading });
//   }

// updateHistory(request){
//   let hash = md5(JSON.stringify(request));

//   const history = { ...this.state.history, [hash]: request}

//   this.setState({ history}, () => {
//     localStorage.setItem('history', JSON.stringify(this.state.history))
//   })
// }

// updateResults = (headers, results) =>{
//   this.setState({headers, results});
// }

// updateRequest = (request) => {
//   this.setState({request});
// }


//  fetchResults = async (request) =>{
   
//   try {

//     this.toggleLoading();

//     this.updateRequest(request);

//     let response = await axios(request);

//     this.toggleLoading();


//     this.updateHistory(request);

//     this.updateResults(response.headers, response.data);

//   }
//   catch (e) {
//     console.log(e);
//   }
//  }

//  componentDidMount(){
//    let history = JSON.parse(localStorage.getItem('history'))
//    this.setState({history});
//  }

//   render(){
    
//     return (
//       <BrowserRouter>
//       <Header />

//       <Form request={this.state.request} handler={this.fetchResults} /> 
//       <History handler={this.fetchResults} calls={this.state.history} />
//       <Results loading={this.state.loading} headers={this.state.headers} results={this.state.results}/>
//       {/* <Main /> */}
//       {/* <Footer /> */}
//     </BrowserRouter>
//   );
//  }


// render(){
    
//   return (
//     // <BrowserRouter>
//     <main>
//     <Header />
//     <Switch>
//     <Route exact path="/" render={() => {
//         <Form request={this.state.request} handler={this.fetchResults} /> }
//     }/>
//     <Route exact path="/help" component={Help}/>
//     </Switch>
//     </main>
//   // </BrowserRouter>
// );
// }


// }

export default App;
