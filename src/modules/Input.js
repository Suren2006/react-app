import { React, Component } from "react";



export default class Input extends Component {


    state = {
        firstValue: "",
        secondValue: "",
        productsArray: this.props.products
    }

    handleChangeFirst = (e) => {
        this.setState({
            firstValue: e.target.value
        })
    }


    handleChangeSecond = (e) => {
        this.setState({
            secondValue: e.target.value
        })
    }


    addFunction = (e) => {
        if (this.state.firstValue === "" || this.state.secondValue === "") {
            alert("Please enter the value")
        } else {
            this.state.productsArray.push({ name: this.state.firstValue, value: this.state.secondValue })
            this.setState({
                firstValue: "",
                secondValue: "",
                productsArray: this.state.productsArray
            })
            window.localStorage.setItem("products", JSON.stringify(this.state.productsArray))
            window.location.reload()
        }
    }

    removeFunction = () => {
        window.localStorage.clear()
        window.location.reload()
    }

    render() {
        return (
            <div className="input-div" >
                <input type="text" placeholder="Enter Name" onChange={this.handleChangeFirst} value={this.state.firstValue}></input>
                <input type="number" min={0} placeholder="Enter Price ($)" onChange={this.handleChangeSecond} value={this.state.secondValue}></input>
                <button onClick={this.addFunction}> Add </button>
                <button onClick={this.removeFunction}>Remove all</button>
            </div>
        )
    }
}