import { Component } from "react";

class Name extends Component {
    constructor(props) {
        super(props);
        this.name = props.name
    }
    render() {
        return (
            <li>Name : {this.name}</li>
        )
    }
}

export default Name