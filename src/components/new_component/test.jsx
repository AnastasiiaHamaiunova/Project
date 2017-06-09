import React from 'react';

export default class ProperListRender extends React.Component {
    render () {
      return (
        <ul>
         {this.props.list.map((listValue)=>
            <li>{listValue}</li>
          )}
        </ul>
      )
    }
  };
  
