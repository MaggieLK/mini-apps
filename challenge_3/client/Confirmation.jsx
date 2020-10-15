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

export {Confirmation}