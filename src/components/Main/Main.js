import React from 'react';
import '../../../src/Style.scss';
import md5 from 'md5';
import axios from 'axios';
import Form from '../Form/Form';
import History from '../History/History';
import Results from '../Results/Results';
class Main extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        loading: false,
        request:{},
        history: {}
      }
    }
  toggleLoading = () => {
      this.setState({ loading: !this.state.loading });
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
  
      this.toggleLoading();
  
      this.updateRequest(request);
  
      let response = await axios(request);
  
      this.toggleLoading();
  
  
      this.updateHistory(request);
  
      this.updateResults(response.headers, response.data);
  
    }
    catch (e) {
      console.log(e);
    }
   }
  
   componentDidMount(){
    console.log(this.props.location.state, "state");
       console.log("cdfdfdfdf");
     let history = JSON.parse(localStorage.getItem('history'))
     this.setState({history});
   }
    render(){
      
      return ( 
<>
        <Form request={this.state.request} handler={this.fetchResults} /> 
        <History handler={this.fetchResults} calls={this.state.history} />
        <Results loading={this.state.loading} headers={this.state.headers} results={this.state.results}/>
</>
    );
   }
}

  export default Main;