
function F1 (props) {
    return (
    <div>
      <form  id="form1">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={props.handleChange} required></input><br></br>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" onChange={props.handleChange}></input><br></br>
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" id="password" onChange={props.handleChange}></input><br></br>
        <button onClick={props.clicker} className="next" >Next</button>
      </form>
    </div>
  )
}

export {F1}