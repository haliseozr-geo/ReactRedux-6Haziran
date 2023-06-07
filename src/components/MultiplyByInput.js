import React from "react";
import { Button } from "reactstrap";
import { bindActionCreators } from "redux";
import { multiplyByInput } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { Component } from "react";

class MultiplyByInput extends Component {
  render() {
    return (
      <div>
        <input
        id="num"
          valutype="number"
        />
        <Button
          color="success"
          onClick={(e) =>
            this.props.dispatch(multiplyByInput(Number(document.getElementById("num").value)))
          }
        >
          Multiply
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(multiplyByInput, dispatch) };
}

export default connect(mapDispatchToProps)(MultiplyByInput);
