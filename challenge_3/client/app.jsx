function AcctView() {
  return (
    // <form onSubmit={this.handleSubmit}>
    <div> 
      <form method='POST' action=''>
        <label>
          Name:
          {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
          <input type='text' id='name' name='name'/>
        </label> <br></br>
        <label>
          Email:
          <input type='text' id='email' name='email'/>
        </label> <br></br>
        <label>
          Password:
          <input type='text' id='password' name='password'/>
        </label>
        <input type='submit' name='submit'></input>
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