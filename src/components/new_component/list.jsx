import React from 'react';

export default class List extends React.Component {
    render () {
      return (
        <div className = "list col-md-6">
            <ul>
             {this.props.list.map((listValue)=>
                <li>{listValue}</li>
              )}
            </ul>
		</div>
      )
    }
};