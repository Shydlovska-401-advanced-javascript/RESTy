import React from 'react';
// import { Link} from 'react-router-dom';


export default class PageHistory extends React.Component{
    constructor(props){
        super(props);
      }
    
     getFromLocalStorage(){
        let history = JSON.parse(localStorage.getItem('history'));
        console.log(history)
        return history
    }
        
        
        render(){
            let history = this.getFromLocalStorage()
        return (
            <aside className="history">
            <ul>
              {
                Object.keys(history).map(key =>
                    <li key={key}>
                      <span id="method" className={`method ${history[key].method}`}>{history[key].method}</span>
                      <button className="url"> {history[key].url}</button>
                    </li>
                )
              }
            </ul>
          </aside>
        )
        }
            
    
    
}
