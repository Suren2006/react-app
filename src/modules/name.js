import { Component } from "react";

class Name extends Component {



    render() {
        const { name } = this.props
        return (
            <td>{name}</td>
        )
    }
}

export default Name