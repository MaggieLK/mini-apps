import {F1} from './F1.js'
import {F2} from './F2.js'
import {F3} from './F3.js'
import {Confirmation} from './Confirmation.js'
import {Cart} from './Cart.js'


function GetForm(props) {
  if (props.form === 'cart') {
    return (
      <Cart clicker = {props.clicker}/>
      )
  } if (props.form === 'F1') {
    return (
      <F1 clicker = {props.clicker} handleChange = {props.handleChange}/>
      )
  } else if (props.form === 'F2') {
    return (
      <F2 clicker = {props.clicker}/>
      )
  } else if  (props.form === 'F3') {
    return (
      <F3 clicker = {props.clicker}/>
      )
  } else if  (props.form === 'confirmation') {
    return (
      <Confirmation clicker = {props.clicker}/>
      )
  }
}

export {GetForm}