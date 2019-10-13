import React, { Component } from "react";
import ReactDom from "react-dom";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      diameter: 0,
      fancy_stitch: 0,
      order: props.order,
      patch: true,
      piece: 0,
      price: props.order.price(),
      stitch: 0,
      svie: true,
    }
  }

  changeSVIE = () => {
    this.state.order.svie(!this.state.svie);
    this.setState({
      price: this.state.order.price(),
      svie: !this.state.svie,
    });
  }

  changeCount = (event) => {
    let count = parseInt(event.target.value);
    this.state.order.count(count);

    this.setState({
      count: count,
      price: this.state.order.price(),
    });
  }

  changeDiameter = (event) => {
    let diameter = parseInt(event.target.value);
    this.state.order.diameter(Math.floor(diameter));

    this.setState({
      diameter: diameter,
      price: this.state.order.price(),
    });
  }

  changePiece = (event) => {
    let piece = parseInt(event.target.value);
    this.state.order.piece(Math.floor(piece));

    this.setState({
      piece: piece,
      price: this.state.order.price()
    });
  }

  changeStitch = (event) => {
    let stitch = parseInt(event.target.value);
    this.state.order.stitch(stitch);

    this.setState({
      stitch: stitch,
      price: this.state.order.price(),
    });
  }

  changeFancyStitch = (event) => {
    let stitch = parseInt(event.target.value);
    this.state.order.fancy_stitch(stitch);

    this.setState({
      fancy_stitch: stitch,
      price: this.state.order.price(),
    });
  }

  changeType = () => {
    this.state.order.patch(!this.state.patch);
    this.setState({
      patch: !this.state.patch,
      price: this.state.order.price(),
    });
  }

  render() {
    return (
      <div>
        <p onClick={this.changeSVIE}>
          Rendelő: {this.state.svie ? "Belsős" : "Külsős"}
        </p>
        <p onClick={this.changeType}>
          Típus: {this.state.patch ? "Folt" : "Hozott anyag"}
        </p>
        <p>
          Rendelés darabszám: <input value={this.state.count} type="number" min="0" onChange={this.changeCount} />
        </p>
        {this.state.patch ?
          <p>
            Átmérő: <input value={this.state.diameter} type="number" min="0" onChange={this.changeDiameter} />
          </p> :
          <p>
            Minta darab: <input value={this.state.piece} type="number" min="0" onChange={this.changePiece} />
          </p>
        }
        <p>
          Öltések: <input value={this.state.stitch} type="number" min="0" onChange={this.changeStitch} />
        </p>
        <p>
          Öltések (fancy): <input value={this.state.fancy_stitch} type="number" min="0" onChange={this.changeFancyStitch} />
        </p>
        <p>
          Összár: {this.state.price} ({Math.ceil(this.state.price / this.state.count)} / darab)
        </p>
      </div>
    );
  }
}

export default Calculator;
