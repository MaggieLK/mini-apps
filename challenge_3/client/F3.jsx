function F3(props) {
  return (
    <div id="form3">
      <form>
        <label htmlFor="credit">Credit Card Number:</label>
        <input type="text" name="credit"></input>
        <label htmlFor="expiry">Expiry Date:</label>
        <input type="text" name="expiry"></input>
        <label htmlFor="CCV">CCV:</label>
        <input type="text" name="CCV"></input>
        <label htmlFor="billing">Billing Zip Code:</label>
        <input type="text" name="billing"></input>
        <button className="next" onClick={props.clicker}>Next</button>
      </form>
    </div>
  )
}

export {F3}