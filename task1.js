class App extends React.Component {
  state = {
    options: ['first', 'second', 'third', 'fourth'],
    option: null,
    value: "",
  }
  handleDrawBtn = () =>{
    const index = Math.floor(Math.random() * this.state.options.length)
    console.log(index);
    this.setState({
      option: this.state.options[index]
    })
  }
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleAddOptionBtn = () => {
    if ( this.state.value === "" ) return alert('empty field')
    const options = [...this.state.options]
    options.push(this.state.value)
    this.setState({
      options,
      value: '',
    })
    alert(`Options added, current options: ${options}`);
  }
  render() {
    return(
      <>
        <button onClick={this.handleDrawBtn}>Random option</button>
        <br/>
        <input value={this.state.value} onChange={this.handleInputChange} type="text"/>
        <button onClick={this.handleAddOptionBtn}>Add option</button>
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));