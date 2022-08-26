import React from 'react';
import BreadContext from '../BreadContext'

export default class BreadContent extends React.PureComponent {
  render() {
    return (
      <div style={{ marginTop: '0px' }}>
        <BreadContext.Consumer>
          {value => {
            console.log('value', value);
            return value
          }
          }
        </BreadContext.Consumer>
        <div style={{ marginTop: '10px' }}>
          {this.props.children}
        </div>
      </div >
    )
  }
}
