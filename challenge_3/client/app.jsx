
import {GetForm} from './GetForm.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'cart',
      value: null
    };
    this.nextClick = this.nextClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

//   $('.next').on("click", function () {
//     $.ajax({
//       method: "POST",
//       url: "http://localhost:3000/",
//       data: {}
//     })
//       .done(function( html ) {
//         console.log('done!');
//       });
// });

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
    event.preventDefault();
  }

  nextClick(e) {
    e.preventDefault()


    if (this.state.form === 'cart'){
      this.setState({form:'F1'});
    } else if (this.state.form === 'F1'){


      // $.post("http://localhost:3000", {name: "John"}, (err) => {
      //   if(err) console.log(err);
      //   console.log("posted!")
      // })
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/",
        data: this.state.value,
        success: function(){
          console.log('Success!');
     }
      })
      console.log('here')



      this.setState({form:'F2'});
    } else if (this.state.form === 'F2'){
      this.setState({form:'F3'});
    } else if (this.state.form === 'F3'){
      this.setState({form:'confirmation'});
    }else if (this.state.form === 'confirmation'){
      this.setState({form:'cart'});
    }
  }

  render() {
    return (
    <div>
      < GetForm form = {this.state.form} clicker = {this.nextClick} handleChange = {this.handleChange}/>
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);