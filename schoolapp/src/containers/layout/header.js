import React, {Component} from 'react';

class Header extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const { userDetails } = this.props;
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">School App <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Welcone {userDetails ? userDetails.firstName: 'Guest'}</a>
            </li>
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
      </div>
    </nav>
    );
  }
 
}

export default Header; 
