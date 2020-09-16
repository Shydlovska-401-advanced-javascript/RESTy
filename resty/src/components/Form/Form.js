import React from 'react';
import  './Form.scss'


export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            method: '',
            url: ''
        }

}

 handleSubmit = async event => {
        event.preventDefault();
    //  https://swapi.dev/api/people/
        let response = await fetch(this.state.url);
        let data = await response.json();
        
        let count = data.count;
        let results = data.results;
        let headers ={};
        response.headers.forEach((val, key) => headers[key] = val);

        this.props.handler(count, results, headers);
      };

    handleUrl = event =>{
        let url = event.target.value;
        this.setState({url})
    }


    handleClick = event => {
        event.preventDefault()
        let url = this.state.url;
        this.setState({url})
    }

    handleMethod = event => {
        event.preventDefault();
        let method = event.target.id;
        this.setState({method})
    }

    render(){
        return (
            <form className="formRender" onSubmit={this.handleSubmit}>
            <div className = 'Form'>
            <input data-testid="input" onChange={this.handleUrl}/>
           
             <button data-testid="button" lassName="goButton">{this.props.promt}</button>
             
             </div>
             <div>
            <button id='get' onClick={this.handleMethod}>GET</button>
            <button id='post' onClick={this.handleMethod}>POST</button>
            <button id='put' onClick={this.handleMethod}>PUT</button>
            <button id='delete' onClick={this.handleMethod}>DELETE</button>
            </div>
            </form>
            )
        }
}