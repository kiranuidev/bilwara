import React from "react";
import { connect } from "react-redux";
let Cart = ({ stateObject }) =>( <h1>{stateObject.say}</h1>
);
const mapStateToProps = (state) => ({
    stateObject: state
});

Cart = connect(
    mapStateToProps
)(Cart);
export default Cart;