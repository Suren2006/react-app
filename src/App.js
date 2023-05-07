import "./App.css"
import Counter from "./modules/counter"
import Name from "./modules/name"
import Price from "./modules/price"
import Description from "./modules/description"
import { Component } from "react"

class Product extends Component {


  render() {
    const { name, price, currency, description } = this.props
    return (
      <ul className="product">
        <Name name={name} />
        <Price price={price} currency={currency} />
        <Description description={description} />
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
        <Product name="Banana" price="1" currency="USD" description="Fresh bananas from Ecuador" />
        <Product name="Car" price="2000" currency="USD" description="Black BMW" />
      </div>
    </div>
  )
}