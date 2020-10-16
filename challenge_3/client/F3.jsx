function F3(props) {
  return (
    <div id="form3">
      <form>
        <label htmlFor="credit">Credit Card Number:</label>
        <input type="text" name="credit" id="credit" onChange={props.handleChange}></input><br></br>
        <label htmlFor="expiry">Expiry Date:</label>
        <input type="text" name="expiry" id="expiry" onChange={props.handleChange}></input><br></br>
        <label htmlFor="CCV">CCV:</label>
        <input type="text" name="CCV" id="CCV" onChange={props.handleChange}></input><br></br>
        <label htmlFor="billing">Billing Zip Code:</label>
        <input type="text" name="billing" id="billing" onChange={props.handleChange}></input><br></br>
        <button className="next" onClick={props.clicker}>Next</button>
      </form>
    </div>
  )
}

export {F3}