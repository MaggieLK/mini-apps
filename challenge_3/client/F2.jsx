function F2(props) {
  return (
    <div id="form2">
      <form>
        <label htmlFor="address1">Address Line 1:</label>
        <input type="text" name="address1" id="address1" onChange={props.handleChange}></input><br></br>
        <label htmlFor="address2">Address Line 2:</label>
        <input type="text" name="address2" id="address2" onChange={props.handleChange}></input><br></br>
        <label htmlFor="city">City:</label>
        <input type="text" name="city" id="city" onChange={props.handleChange}></input><br></br>
        <label htmlFor="state">State:</label>
        <input type="text" name="state" id="state" onChange={props.handleChange}></input><br></br>
        <label htmlFor="zip">Zip Code:</label>
        <input type="text" name="zip" id="zip" onChange={props.handleChange}></input><br></br>
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" name="phone" id="phone" onChange={props.handleChange}></input><br></br>
        <button className="next" onClick={props.clicker}>Next</button>
      </form>
    </div>
  )
}

export {F2}