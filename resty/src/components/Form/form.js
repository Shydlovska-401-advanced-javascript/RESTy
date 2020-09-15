import React from 'react';
import  './form.scss'


export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            method: '',
            url: '',
            shouldRender: false
        }
    }

    handleUrl = event =>{
        let shouldRender = false;
        let url = event.target.value;
        this.setState({url, shouldRender})
    }


    handleClick = event => {
        event.preventDefault()
        let url = this.state.url;
        let shouldRender = true;
        this.setState({url, shouldRender})
    }

    handleMethod = event => {
        event.preventDefault();
        let shouldRender = false;
        let method = event.target.id;
        this.setState({method, shouldRender})
    }

    render(){
        let id = this.state.method.length>0 && this.state.url.length > 0 && this.state.shouldRender ? "outputReady" : "outputNotReady";
        console.log(id);
        return (
            <div className = 'Form'>
            <h4>URL:<input onChange={this.handleUrl}/>
            <button onClick={this.handleClick}>Click ME</button></h4>
            <button id='get' onClick={this.handleMethod}>GET</button>
            <button id='post' onClick={this.handleMethod}>POST</button>
            <button id='put' onClick={this.handleMethod}>PUT</button>
            <button id='delete' onClick={this.handleMethod}>DELETE</button>
            <div id={id}>{this.state.method} {this.state.url}</div>

            </div>
            )
        }
}