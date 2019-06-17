import React, {Component} from 'react';
import cards from '../../api/flashData';
import './Flashcards.css';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import { MDBBtn } from 'mdbreact';

class FlashCards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardArr: cards,
      index: 0,
      total: cards.length
    };
  }

  findPercentage(masteredCount, totalCount) {
    return parseInt(masteredCount/totalCount * 100) + "%";
  }

  findFraction(masteredCount, totalCount) {
    return masteredCount + "/" + totalCount;
  }

  incrementIndex (i, length) {
    return (i + 1) % length;
  }
  
  checkIndex(i, length) {
    if(i >= length){
      return 0; 
    }
    return i;
  }

  click(value) {
    let cardArr = this.state.cardArr;
    let index = this.state.index;
    cardArr[index].mastered = value;
    cardArr = value ? 
                cardArr.filter(e => e.mastered < 1) : 
                cardArr;
    index = value ? 
                this.checkIndex(index, cardArr.length) : 
                this.incrementIndex(index, cardArr.length);
    this.setState({
      cardArr: cardArr,
      index: index
    });
  }

  render() {
    let fraction = this.findFraction(this.state.total - this.state.cardArr.length, this.state.total)

    let percentage = this.findPercentage(this.state.total - this.state.cardArr.length, this.state.total)

    return (
      <div className='flash-body'>
        <NavBar />
        <div className="menu">
          <h1>Flashcards <i className="fas fa-burn"></i></h1>
          <ul>
              <li>Cards Mastered: <span id="fraction">{fraction}</span></li>
              <li>Percentage: <span id="percent">{percentage}</span></li>
          </ul>
        </div>
        <div className="left">
            {this.state.cardArr.length ? 
            (<Card front={this.state.cardArr[this.state.index].front} back={this.state.cardArr[this.state.index].back}/>) : 
            (<Card front='Deck Mastered' back='Refresh the page to start again'/>)}
        </div>
        <div className="right">
            <div className="center">
                <p>Read. Think. <span className="highlight">Flip.</span> Rate. </p>
                {this.state.cardArr.length ? (<MDBBtn onClick={e => this.click(0, e)}>Needs Review</MDBBtn>) : <MDBBtn>Well Done</MDBBtn>}
                {this.state.cardArr.length ? (<MDBBtn onClick={e => this.click(1, e)}>Got It</MDBBtn>) : <MDBBtn>You Did It!</MDBBtn>}
            </div>
        </div>
      </div>
    )
  }
}

export default FlashCards;