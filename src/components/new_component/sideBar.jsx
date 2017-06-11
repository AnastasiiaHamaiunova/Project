import React from 'react';

export default class SideBar extends React.Component {
    render () {
      return (
        <nav>
            <button onClick={this.props.addToList}>Click</button>
        </nav>
      )
    }
}