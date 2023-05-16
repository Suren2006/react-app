import Name from "./Name"
import Price from "./Price"
import { Component } from "react"




export default class Product extends Component {
    render() {
        return (
            <tr>
                <Name name={this.props.name} />
                <Price price={this.props.price} currency={"$"} />
            </tr>
        )
    }
}


