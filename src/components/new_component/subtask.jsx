import React from 'react';

export default class Nav extends React.Component {
  static propTypes = {
    todos : React.PropTypes.array
  }

  constructor () {
    super();
  }

  render () {
    return (
      <div >Subtask</div>
    );
  }
}
