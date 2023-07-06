import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.searchInput);
    // // setTimeout(() => {
    // //     console.log(this.state.searchInput);
    // //   }, 1000);
    this.props.onSearch(this.state.searchInput);
  };
  render() {
    return (
      <nav
        className= {`p-0 navbar navbar-expand-lg bg-body-tertiary bg-${this.props.mode} border-bottom border-bottom-${this.props.mode}`}
        data-bs-theme={`${this.props.mode}`} 
        style={{position:'fixed',top:0,left:0,zIndex:'2000'}}        
      >
        <div className="container-fluid" style={{backgroundColor : `${this.props.mode}`, color:`${this.props.mode==='light'?'black':'white'}`}}>
          <a
            className="navbar-brand fs-2 fw-bold text-center ms-5 text-monospace"
            href="/"
            style={{
              boxSizing: "border-box",
              padding: "5px 15px",
              boxShadow: `${this.props.mode==='dark'?'0 2px 18px 9px #B30041':'0 2px 18px 9px cyan'}`,
              border: `${this.props.mode==='dark'?'0.001px solid pink':'0.001px solid cyan'}`,
              borderTop: "none",
            }}
          >
            <span className="text-primary">J. </span>
            <span className="text-warning">L. </span>
            <span className="text-danger">J. </span>
            <span className="text-info"> N e w s </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-3 mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <div class="form-check form-switch me-4">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={this.props.toggle}
              />
              <label
                className="form-check-label fs-6"
                htmlFor="flexSwitchCheckDefault"
                
              >
                Dark Mode
              </label>
            </div>
            <form className="d-flex me-3" role="search">
              <input
                id="user-input"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.searchInput}
                onChange={this.handleInputChange}
              />
              <button
                className="btn btn-outline-success"
                onClick={this.handleSubmit}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
