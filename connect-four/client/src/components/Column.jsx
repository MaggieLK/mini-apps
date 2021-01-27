const Column = (props) => (
  <div id={`col${props.x}`} onClick={props.handleClick} disabled = {props.disabled}>
    {props.y.map(y => {
      return <div key={`key${props.x}${y}`} data-x={props.x} data-y={y} className={`space ${y}`}></div>
    }).reverse()}
  </div>
)

export default Column;