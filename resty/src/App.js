import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Results from './components/Results/Results';
// import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      results : [],
      headers: {}
    }
  }


 stateHandler = (count, results, headers) =>{
   this.setState({count, results, headers});

 }

  render(){
    return (
    <div className="App">
      <Header />
      <Form promt="Go!" handler={this.stateHandler} /> 
      <Results  count ={this.state.count} results={this.state.results} headers={this.state.headers}/>
      {/* <Footer /> */}
    </div>
  );
 }
}

export default App;
