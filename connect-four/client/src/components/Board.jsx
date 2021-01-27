import Column from './Column.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, color: "yellowSpace", win: '', red: [], yellow: [], disabled: false};
    this.handleClick = this.handleClick.bind(this);
    this.winTester = this.winTester.bind(this);
  }


 winTester(allPieces, color) {
  if (color === "yellowSpace") {
    color = "Yellow"
  } else {
    color = "Red"
  }
  //horizontal
  var horWin = 1;
  for (var i = 0; i < allPieces.length; i++) {
    if (allPieces.indexOf(allPieces[i] + 10) !== -1) {
      horWin++
      i = allPieces.indexOf(allPieces[i] + 10) -1;
    } else {
      horWin = 1;
    }
    if(horWin === 4) {
      this.setState({
        win: `${color} Wins!`,
        disabled: true
      })
    }
  }
  //vertical
  var vertWin = 1;
  for (var i = 0; i < allPieces.length; i++) {
    if (allPieces.indexOf(allPieces[i] + 1) !== -1) {
      vertWin++
    } else {
      vertWin = 1;
    }
    if(vertWin === 4) {
      this.setState({
        win: `${color} Wins!`,
        disabled: true
      })
    }
  }
  //diagonalUp
  var diagUpWin = 1;
  for (var i = 0; i < allPieces.length; i++) {
    if (allPieces.indexOf(allPieces[i] + 11) !== -1) {
      diagUpWin++
      i = allPieces.indexOf(allPieces[i] + 11) -1;
    } else {
      diagUpWin = 1;
    }
    if(diagUpWin === 4) {
      this.setState({
        win: `${color} Wins!`,
        disabled: true
      })
    }
  }
  //diagonalDown
  var diagDownWin = 1;
  for (var i = 0; i < allPieces.length; i++) {
    if (allPieces.indexOf(allPieces[i] + 9) !== -1) {
      diagDownWin++
      i = allPieces.indexOf(allPieces[i] + 9) -1;
    } else {
      diagDownWin = 1;
    }
    if(diagDownWin === 4) {
      this.setState({
        win: `${color} Wins!`,
        disabled: true
      })
    }
  }
  //tie
  if (this.state.counter >= 41) {
    this.setState({
      win: "It's a tie!",
      disabled: true
    })
  }
}

  handleClick(e) {
    var column = document.getElementById(`col${e.target.dataset['x']}`)
    let color = this.state.color
    let freeSpace = null;
    var allPieces = [];

    if (column !== null) {
      for(var i = 1; i<=6; i++) {
        if (column.getElementsByClassName(`space ${i}`).length > 0){
          freeSpace = column.getElementsByClassName(`space ${i}`)[0];
          break;
        }
      }
      if(freeSpace !== null && this.state.disabled == false) {
        var spaceLoc = parseInt(`${freeSpace.dataset['x']}${freeSpace.dataset['y']}`);
        this.setState({
          counter: this.state.counter + 1
        });
        freeSpace.classList.add(color);
        freeSpace.classList.remove("space");
        if (color === "yellowSpace") {
          allPieces = this.state.yellow.concat([spaceLoc])
          this.setState({
            yellow: allPieces
          });
          this.setState({
            color: "redSpace"
          });
        } else {
          allPieces = this.state.red.concat([spaceLoc]);
          this.setState({
            red: allPieces
          })
          this.setState({
            color: "yellowSpace"
          })
        }
      }
      allPieces.sort((a,b) => { return a-b;})
      this.winTester(allPieces, color);
    }
  }

  render () {
    let rowArray = ["1", "2", "3", "4", "5", "6"];
    return (
      <div>
        <h1 id="title">Connect 4</h1>
        <div id="board">
          <Column x="1" y={rowArray} handleClick={this.handleClick} disabled={this.state.disabled} />
          <Column x="2" y={rowArray} handleClick={this.handleClick} disabled={this.state.disabled} />
          <Column x="3" y={rowArray} handleClick={this.handleClick} disabled={this.state.disabled} />
          <Column x="4" y={rowArray} handleClick={this.handleClick} disabled={this.state.disabled} />
          <Column x="5" y={rowArray} handleClick={this.handleClick} disabled={this.state.disabled} />
          <Column x="6" y={rowArray} handleClick={this.handleClick} disabled={this.state.disabled} />
          <Column x="7" y={rowArray} handleClick={this.handleClick} disabled={this.state.disabled} />
        </div>
        <h1 id="winner">{this.state.win}</h1>
      </div>
    )
  }
}

export const Connect = Board;