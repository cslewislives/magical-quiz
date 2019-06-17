import React, {Component} from 'react';

class Card extends Component {
  render() {
    return(
      <div className="card">
        <div className="content">
          <div className="front">
              {this.props.front}
          </div>
          <div className="back">
              {this.props.back}
          </div>
        </div>
      </div>
    )
  }
}

export default Card;