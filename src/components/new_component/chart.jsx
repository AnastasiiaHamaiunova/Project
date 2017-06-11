import React from 'react';

export default class Chart extends React.Component {
    render () {
      return (
            <div className="chart col-md-6">
                <span>{this.props.sumLastIndexes}</span>
            </div>
        )
    }
}