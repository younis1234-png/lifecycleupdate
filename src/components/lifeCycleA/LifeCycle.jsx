import React, { Component } from "react";
import LifecycleB from "./LifeCycleB";

class LifecycleA extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      name: " Younis",
    };
    console.log("LifeCycleA  consttructor ");
  }

  // method (1) in UPDATE 
  static getDerivedStateFromProps(props, state) {
    console.log("lifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA compontDidMount");
  }

  // method 2 in UPDATE 
  shouldComponentUpdate(){
    console.log("LifeCcyleA shouldComponeentUpdate")
    return true
  }

  // method 4
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("lifeCycleA getSnapshotBeofreUpdate")
    return null
  }

  // method 5

  componentDidUpdate(){
    console.log("LifecycleA componentDidUpdate");
  }


  changeState = () =>  {
    this.setState({
      name: 'Name Changed'
    })
  }

  render() {
    // metod (3) in UPDATE 
    console.log("LifeCycleA render");
    return (
      <>
        <div>LifeCycle A</div>
        <LifecycleB />
        <button onClick={this.changeState}>Change State</button>
      </>
    );
  }
}

export default LifecycleA;
