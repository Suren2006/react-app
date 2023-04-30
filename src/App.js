import "./App.css"
import Counter from "./modules/counter"
import Name from "./modules/name"
import Price from "./modules/price"
import Description from "./modules/description"
import { Component } from "react"

class Product extends Component {
  constructor(props) {
    super(props)
    this.name = props.name
    this.price = props.price
    this.description = props.description
  }

  render() {
    return (
      <ul className="product">
        <Name name={this.name} />
        <Price price={this.price} />
        <Description description={this.description} />
      </ul>
    )
  }
}
export default function MyApp() {
  return (
    <div>
      <div>
        <h1>Counter Class Component</h1>
        <h3> Click "+" for Plus and "-" for Minus </h3>
        <Counter />
      </div>
      <hr />
      <div>
        <h1>Product Class Component</h1>
        <Product name={"banabas"} price="1$" description="Fresh bananas from Ecuador" />
      </div>
    </div>
  )
}