
function F1 (props) {
// class F1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {

//     this.setState({value: event.target.value});

//     console.log(this.state.value)
//     event.preventDefault();
//   }

  // const thanks = document.getElementById('form1')
  // console.log(thanks)
  // thanks.onsubmit(console.log('submit!'))
  // // const FD = new FormData(thanks);
  // // console.log(FD)

  //render () {
    return (
    <div>
      <form  id="form1">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={props.handleChange}></input>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="text" name="password"></input>
        <button onClick={props.clicker} className="next" ></button>
      </form>
    </div>
  )
 // }
}

export {F1}

//
// formAction="http://localhost:3000/"