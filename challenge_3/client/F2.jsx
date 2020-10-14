function F2(props) {
  return (
    <div id="form2">
      <form>
        <label htmlFor="address1">Address Line 1:</label>
        <input type="text" name="address1"></input>
        <label htmlFor="address2">Address Line 2:</label>
        <input type="text" name="address2"></input>
        <label htmlFor="city">City:</label>
        <input type="text" name="city"></input>
        <label htmlFor="state">State:</label>
        <input type="text" name="state"></input>
        <label htmlFor="zip">Zip Code:</label>
        <input type="text" name="state"></input>
        <label htmlFor="zip">Phone Number:</label>
        <input type="text" name="phone"></input>
        <button className="next" onClick={props.clicker}>Next</button>
      </form>
    </div>
  )
}

export {F2}