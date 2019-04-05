import React from 'react'
import { connect } from 'react-redux'
import { sayHello,addItem } from '../actions'

let Button = ({ whatsUp, stateObject, saySomething,add }) => (
  <div >
    {/* <button onClick={saySomething}>PRESS TO DISPATCH FIRST ACTION</button>
    <h2>{whatsUp}</h2> */}
    <button onClick={add}>Item Add</button>
    {/* <h1>{stateObject.Count}</h1> */}
  </div>
)

const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
  saySomething: () => { dispatch(sayHello())},
  add: () => { dispatch(addItem())}
})

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
