import { Component } from "react";

class Description extends Component {


    render() {
        const { description } = this.props
        return (
            <li>Description : {description}</li>
        )
    }
}

export default Description