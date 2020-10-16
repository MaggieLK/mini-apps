function Confirmation(props) {
  return (
    <div id="confirm">
      <form>
        <p>Name: {props.confirmation.name}</p>
        <p>Email: {props.confirmation.email}</p>
        <p>Password: {props.confirmation.password}</p>
        <p>Address Line 1: {props.confirmation.address1}</p>
        <p>Address Line 2: {props.confirmation.address2}</p>
        <p>City: {props.confirmation.city}</p>
        <p>State: {props.confirmation.state}</p>
        <p>Zip Code: {props.confirmation.zip}</p>
        <p>Phone Number: {props.confirmation.phone}</p>
        <p>Credit Card Number: {props.confirmation.credit}</p>
        <p>Expiry Date: {props.confirmation.expiry}</p>
        <p>CCV: {props.confirmation.CCV}</p>
        <p>Billing Zip Code: {props.confirmation.billing}</p>
        <button id="purchase" onClick={props.clicker}>Purchase</button>
      </form>
    </div>
  )
}

export {Confirmation}