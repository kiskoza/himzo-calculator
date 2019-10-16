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
      type: 'patch'
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

  changeType = (type) => {
    this.state.order.patch(type === 'patch');
    this.setState({
      type: type,
      price: this.state.order.price(),
    });
  }

  render() {
    return (
      <div className="calculator">
        <div className="tabs">
          <span onClick={(e) => this.changeType('patch')} data-active={this.state.type == 'patch'}>
            Folt
          </span>
          <span onClick={(e) => this.changeType('tee')} data-active={this.state.type == 'tee'}>
            Póló
          </span>
          <span onClick={(e) => this.changeType('hoodie')} data-active={this.state.type == 'hoodie'}>
            Pulcsi
          </span>
          <span onClick={(e) => this.changeType('else')} data-active={this.state.type == 'else'}>
            Más..
          </span>
        </div>
        <div className="plane">
          <button onClick={this.changeSVIE} className={this.state.svie ? "offset-1 active" : "offset-1"}>
            {this.state.svie ? "Belsős" : "Külsős"}
          </button>

          <label key="count-label">
            Rendelés darabszám
          </label>
          <input key="count-input" value={this.state.count} type="number" min="0" onChange={this.changeCount} />

          {this.state.type === 'patch' ? [
              <label key="diameter-label">Átmérő (cm)</label>,
              <input key="diameter-input"value={this.state.diameter} type="number" min="0" onChange={this.changeDiameter} />
            ] : [
              <label key="piece-label">Minta darabszám</label>,
              <input key="piece-input"value={this.state.piece} type="number" min="0" onChange={this.changePiece} />
            ]
          }

          <label key="stitch-label">
            Öltések
          </label>
          <input key="stitch-input" value={this.state.stitch} type="number" min="0" step="100" onChange={this.changeStitch} />

          <label key="fancy-stitch-label">
            Öltések (fancy cérna)
          </label>
          <input key="fancy-stitch-input" value={this.state.fancy_stitch} type="number" step="50" min="0" onChange={this.changeFancyStitch} />
      </div>
      <div className="plane">
          <div className="sum">
            Összár
          </div>
          <div>
            {this.state.price} JMF
          </div>
          <div className="offset-1">
            ({this.state.count == 0 ? 0: Math.ceil(this.state.price / this.state.count)} / db)
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
