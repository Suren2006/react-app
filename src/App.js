import "./App.css"
import Input from "./modules/Input"
import Product from "./modules/Product"


var products = (window.localStorage.length !== 0) ? JSON.parse(window.localStorage.getItem("products")) : []


export default function App() {

  var product = products.map((el, index) => {
    return <Product name={el.name} price={el.value} key={index} />
  })



  return (
    <div className="main">
      <h1>Product Class Component</h1>
      <Input products={products} />
      <table border={1}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {product}
        </tbody>
      </table>
    </div>
  )
}


// Ունենալ 2 input, name ու price արժեքների մուտքագրման համար: 
// Կոճակը սեղմելուց հետո, եթե արժեքները դատարկ չեն, լցնել զանգվածի մեջ և զանգվածը ցուցադրել:
