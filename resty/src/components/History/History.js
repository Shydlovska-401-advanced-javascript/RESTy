import React from 'react';

export default function History(props){
    const calls = props.calls || {};
    function loadRequest(apiCall){
        console.log("here")
        props.handler(apiCall);
    }
    return(
        <aside className="history">
        <ul>
          {
            Object.keys(calls).map(key =>
              <li key={key}>
  
                <span className={`method ${props.calls[key].method}`}>{props.calls[key].method}</span>
                <button className="url" onClick={() => loadRequest(props.calls[key])}>{props.calls[key].url}</button>
              </li>,
            )
          }
        </ul>
      </aside>
    )
}