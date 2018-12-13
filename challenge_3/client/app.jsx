// -------------------------------------------------------------------------------------
//                                   C o n t r o l l e r 
// -------------------------------------------------------------------------------------

function AcctView() {
  return (
    <div> 
      <form method='POST' action=''>
        <label>
          Name:
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
    </div>
  );
}

function ShippingView() {
  return (
    <div> 
      <form method='POST' action=''>
        <label>
          Address:
          <br></br>
            <label>
            line 1:
              <input type='text' id='name' name='line1'/>
            </label> <br></br>
            <label>
            line 2:
              <input type='text' id='name' name='line1'/>
            </label> <br></br>
            <label>
            city:
              <input type='text' id='name' name='city'/>
            </label> <br></br>
            <label>
            state:
              <input type='text' id='name' name='state'/>
            </label> <br></br>
            <label>
            zipcode:
              <input type='text' id='name' name='zipcode'/>
            </label> <br></br>
        </label> <br></br>
        <label>
          Phone #:
          <input type='text' id='email' name='phone'/>
        </label> <br></br>
        <input type='submit' name='submit'></input>
      </form>
    </div>
  );
}

function ShippingView() {
  return (
    <div> 
      <form method='POST' action=''>
        <label>
          credit card #:
          <input type='text' name='creditcard'/>
        </label> <br></br>
        <label>
          exp date:
          <input type='text' name='expdate'/>
        </label> <br></br>
        <label>
          CVV:
          <input type='text' name='cvv'/>
        </label> <br></br>
        <input type='submit' name='submit'></input>
      </form>
    </div>
  );
}

// -------------------------------------------------------------------------------------
//                                       M o d e l
// -------------------------------------------------------------------------------------

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: AcctView
    }

    this.formShipping = this.formShipping.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     form: ShippingView
  //   });
  // }


  formShipping() {
    debugger;
    this.setState({
      form: AcctView
    });
  }

  render() {
    return <this.state.form />;
  };
  
};

// -------------------------------------------------------------------------------------
//                                       V i e w 
// -------------------------------------------------------------------------------------

ReactDOM.render(
  <Client />,
  document.getElementById('root')
);