import React from 'react';
import './App.css';
import md5 from 'md5';
import axios from 'axios';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import History from './components/History/History';
import Results from './components/Results/Results';
// import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      request:{},
      history: {}
    }
  }

updateHistory(request){
  let hash = md5(JSON.stringify(request));

  const history = { ...this.state.history, [hash]: request}

  this.setState({ history}, () => {
    localStorage.setItem('history', JSON.stringify(this.state.history))
  })
}

updateResults = (headers, results) =>{
  this.setState({headers, results});
}

updateRequest = (request) => {
  this.setState({request});
}


 fetchResults = async (request) =>{
   
  try {

    // this.toggleLoading();

    this.updateRequest(request);

    let response = await axios(request);

    // this.toggleLoading();


    this.updateHistory(request);

    this.updateResults(response.headers, response.data);

  }
  catch (e) {
    console.log(e);
  }
 }

 componentDidMount(){
   let history = JSON.parse(localStorage.getItem('history'))
   this.setState({history});
 }

  render(){
    
    return (
    <>
      <Header />
      <Form request={this.state.request} handler={this.fetchResults} /> 
      <History handler={this.fetchResults} calls={this.state.history} />
      <Results  count ={this.state.count} results={this.state.results} headers={this.state.headers}/>
      {/* <Footer /> */}
    </>
  );
 }
}

export default App;
