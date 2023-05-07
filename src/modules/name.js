import { Component } from "react";

class Name extends Component {



    render() {
        const { name } = this.props
        return (
            <li>Name : {name}</li>
        )
    }
}

export default Name