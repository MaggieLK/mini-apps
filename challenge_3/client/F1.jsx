function F1(props) {
  return (
    <div id="form1">
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name"></input>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="text" name="password"></input>
        <button className="next" onClick={props.clicker}>Next</button>
      </form>
    </div>
  )
}

export {F1}