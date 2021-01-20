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





  render () {
    return (
      <div>
        <h1 id="title">Connect 4</h1>
        <div id="board">
          <div id="col1" onClick={this.handleClick} disabled = {this.state.disabled}>
            <div data-x="1" data-y="6" className="space 6"></div>
            <div data-x="1" data-y="5" className="space 5"></div>
            <div data-x="1" data-y="4" className="space 4"></div>
            <div data-x="1" data-y="3" className="space 3"></div>
            <div data-x="1" data-y="2" className="space 2"></div>
            <div data-x="1" data-y="1" className="space 1"></div>
          </div>
          <div id="col2" onClick={this.handleClick}>
            <div data-x="2" data-y="6" className="space 6"></div>
            <div data-x="2" data-y="5" className="space 5"></div>
            <div data-x="2" data-y="4" className="space 4"></div>
            <div data-x="2" data-y="3" className="space 3"></div>
            <div data-x="2" data-y="2" className="space 2"></div>
            <div data-x="2" data-y="1" className="space 1"></div>
          </div>
          <div id="col3" onClick={this.handleClick}>
            <div data-x="3" data-y="6" className="space 6"></div>
            <div data-x="3" data-y="5" className="space 5"></div>
            <div data-x="3" data-y="4" className="space 4"></div>
            <div data-x="3" data-y="3" className="space 3"></div>
            <div data-x="3" data-y="2" className="space 2"></div>
            <div data-x="3" data-y="1" className="space 1"></div>
          </div>
          <div id="col4" onClick={this.handleClick}>
            <div data-x="4" data-y="6" className="space 6"></div>
            <div data-x="4" data-y="5" className="space 5"></div>
            <div data-x="4" data-y="4" className="space 4"></div>
            <div data-x="4" data-y="3" className="space 3"></div>
            <div data-x="4" data-y="2" className="space 2"></div>
            <div data-x="4" data-y="1" className="space 1"></div>
          </div>
          <div id="col5" onClick={this.handleClick}>
            <div data-x="5" data-y="6" className="space 6"></div>
            <div data-x="5" data-y="5" className="space 5"></div>
            <div data-x="5" data-y="4" className="space 4"></div>
            <div data-x="5" data-y="3" className="space 3"></div>
            <div data-x="5" data-y="2" className="space 2"></div>
            <div data-x="5" data-y="1" className="space 1"></div>
          </div>
          <div id="col6" onClick={this.handleClick}>
            <div data-x="6" data-y="6" className="space 6"></div>
            <div data-x="6" data-y="5" className="space 5"></div>
            <div data-x="6" data-y="4" className="space 4"></div>
            <div data-x="6" data-y="3" className="space 3"></div>
            <div data-x="6" data-y="2" className="space 2"></div>
            <div data-x="6" data-y="1" className="space 1"></div>
          </div>
          <div id="col7" onClick={this.handleClick}>
            <div data-x="7" data-y="6" className="space 6"></div>
            <div data-x="7" data-y="5" className="space 5"></div>
            <div data-x="7" data-y="4" className="space 4"></div>
            <div data-x="7" data-y="3" className="space 3"></div>
            <div data-x="7" data-y="2" className="space 2"></div>
            <div data-x="7" data-y="1" className="space 1"></div>
          </div>
        </div>
        <h1 id="winner">{this.state.win}</h1>
      </div>
    )
  }
}

export const Connect = Board;