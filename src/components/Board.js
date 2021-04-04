import React from 'react';
import Tile from "./Tile";
// import './Board.css';

// tiles to click and console.log that the click is working
// tiles to swap with no logic
// tiles to swap with game logic

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Board: [],
      won: false,
      N: 4,
    }
    this.tileClick.bind(this);
  }
  componentDidMount() {
    let tempArr = [];
    for (let i = 0; i < Math.pow(this.state.N, 2); i++) {
      tempArr.push(
        {
          id: i,
          currentPos: i,
          winPos: i,
          clicked: false,
        }
      )
    }
    this.setState({ Board: tempArr })
  }

  tileClick() {
    console.log("cleeked")
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.Board.map((tile, index) =>
            <Tile key={index} id={tile.id} currentPos={tile.currentPos} winPos={tile.winPos} tileClick={this.tileClick} />)}
        </div>
      </div>
    )
  }

}

export default Board;
