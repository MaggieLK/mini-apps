import {F1} from './F1.js'
import {F2} from './F2.js'
import {F3} from './F3.js'

function Cart(props) {
  return (
    <div id="cart">
        <button id="checkout" onClick={props.clicker}>Check Out</button>
    </div>
  )
}

function Confirmation(props) {
  return (
    <div id="confirm">
      <form>
        <p>Name:</p>
        <p>Email:</p>
        <p>Password:</p>
        <p>Address Line 1:</p>
        <p>Address Line 2:</p>
        <p>City:</p>
        <p>State:</p>
        <p>Zip Code:</p>
        <p>Phone Number:</p>
        <p>Credit Card Number:</p>
        <p>Expiry Date:</p>
        <p>CCV:</p>
        <p>Billing Zip Code:</p>
        <button id="purchase" onClick={props.clicker}>Purchase</button>
      </form>
    </div>
  )
}

function GetForm(props) {
  if (props.form === 'cart') {
    return (
      <Cart clicker = {props.clicker}/>
      )
  } if (props.form === 'F1') {
    return (
      <F1 clicker = {props.clicker}/>
      )
  } else if (props.form === 'F2') {
    return (
      <F2 clicker = {props.clicker}/>
      )
  } else if  (props.form === 'F3') {
    return (
      <F3 clicker = {props.clicker}/>
      )
  } else if  (props.form === 'confirmation') {
    return (
      <Confirmation clicker = {props.clicker}/>
      )
  }
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'cart'
    };
    this.nextClick = this.nextClick.bind(this);
  }

  nextClick(e) {
  console.log('click')
  e.preventDefault()
  if (this.state.form === 'cart'){
    this.setState({form:'F1'});
  } else if (this.state.form === 'F1'){
      this.setState({form:'F2'});
    } else if (this.state.form === 'F2'){
      this.setState({form:'F3'});
    } else if (this.state.form === 'F3'){
      this.setState({form:'confirmation'});
    }else if (this.state.form === 'confirmation'){
      this.setState({form:'cart'});
    }
  }

  // componentDidMount() {
  //   this.setState({form:'F2'});
  // }

  render() {
    return (
    <div>
      < GetForm form = {this.state.form} clicker = {this.nextClick}/>
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);