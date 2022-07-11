import React, { useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import PropTypes from 'prop-types';

function WebSocket (props){
  const {url} = props;
    const [messageHistory, setMessageHistory] = useState([]);
  
    const { lastMessage, readyState } = useWebSocket(url);
  
    useEffect(() => {
      if (lastMessage !== null) {
        setMessageHistory((prev) => prev.concat(lastMessage));
      }
    }, [lastMessage, setMessageHistory]);
  
    const connectionStatus = {
      [ReadyState.CONNECTING]: 'Connecting',
      [ReadyState.OPEN]: 'Open',
      [ReadyState.CLOSING]: 'Closing',
      [ReadyState.CLOSED]: 'Closed',
      [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];
  
    return (
      <div>
        <span style={{background: 'burlywood'}}>The WebSocket is currently {connectionStatus}</span>
        {lastMessage ? <span> Last message: {lastMessage.data}</span> : null}
        <ul>
          {messageHistory.map((message, idx) => {
              const index = idx+message.timeStamp;
              return (<span key={index}>{message ? message.data : null}</span>)}

          )}
        </ul>
      </div>
    );
  };

  WebSocket.defaultProps = {
    url: ""
  };

  WebSocket.propTypes = {
    url: PropTypes.string
};

  export default WebSocket;