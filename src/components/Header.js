function Header(props) {
    return (
      <header className="header">
          <div className="header1">
            <img src="img/soat.svg" className="images" alt=""/>
            <h3>Timer</h3>
          </div>
          <div className="header1">
            <input placeholder="Search"/>
          </div>
          <div className="header1">
            <button>New</button>
            <img src="img/nic.svg" alt=""/>
            <p>Nick Robins</p>
          </div>
      </header>
    );
  }
  
  export default Header;