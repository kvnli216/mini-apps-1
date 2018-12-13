function AcctView() {
  return (
    // <form onSubmit={this.handleSubmit}>
    <div> 
      <form>
        <label>
          Name:
          {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
          <input id='name'/>
        </label> <br></br>
        <label>
          Email:
          <input id='email'/>
        </label> <br></br>
        <label>
          Password:
          <input id='password'/>
        </label>
      </form>
      <button id='next'>Next</button>
    </div>
  );
}


class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
    }
  }

  render() {
    return;
  };
  
};

ReactDOM.render(
  <AcctView />,
  document.getElementById('root')
);