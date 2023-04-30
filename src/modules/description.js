import { Component } from "react";

class Description extends Component {
    constructor(props) {
        super(props);
        this.description = props.description
    }


    render() {
        return (
            <li>Description : {this.description}</li>
        )
    }
}

export default Description