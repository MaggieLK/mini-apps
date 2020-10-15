function Cart(props) {
  return (
    <div id="cart">
        <button id="checkout" onClick={props.clicker}>Check Out</button>
    </div>
  )
}

export {Cart}