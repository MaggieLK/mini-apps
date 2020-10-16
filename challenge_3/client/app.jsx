
import {GetForm} from './GetForm.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'cart'
    };
    this.nextClick = this.nextClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    let stateObj = {};
    stateObj[event.target.id] = event.target.value;
    this.setState(stateObj);
  }

  nextClick(e) {
    e.preventDefault()
    let query = '';
    let url = '';
    let id = '';
    if (this.state.form === 'confirmation'){
      this.setState({form:'cart'});
    } else if (this.state.form === 'cart'){
      url = '/'
      query = `INSERT INTO purchases VALUES ()`
      $.ajax({
        type: "POST",
        url: `http://localhost:3000${url}`,
        data: query,
        success: function(res){
          id = res;
        }
      }) .done( (res) => {
        this.setState({id: id})
      })
      this.setState({form:'F1'});
    } else {
      if (this.state.form === 'F1'){
        url = '/F1'
        query = `UPDATE purchases SET name="${this.state.name}", email="${this.state.email}", password="${this.state.password}" WHERE id=${this.state.id};`
      this.setState({form:'F2'});
    } else if (this.state.form === 'F2'){
        url = '/F2'
        query = `UPDATE purchases SET address1="${this.state.address1}", address2="${this.state.address2}", city="${this.state.city}", state="${this.state.state}", zip="${this.state.zip}", phone="${this.state.phone}" WHERE id=${this.state.id};`
        this.setState({form:'F3'});
    } else if (this.state.form === 'F3'){
      url = '/F2'
        query = `UPDATE purchases SET card="${this.state.credit}", expiry="${this.state.expiry}", ccv="${this.state.ccv}", billZip="${this.state.billing}" WHERE id=${this.state.id};`
      this.setState({form:'confirmation'});
    }
      $.ajax({
        type: "POST",
        url: `http://localhost:3000${url}`,
        data: query,
        success: function(res){
          console.log('Success!');
     }
      })
    }
  }

  render() {
    return (
    <div>
      < GetForm form = {this.state.form} clicker = {this.nextClick} handleChange = {this.handleChange} confirmation={this.state}/>
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);