var Header= React.createClass({
  render: function() {
    return (
      <header>
        <div className="homepage-header">
          <img src="http://localhost:8000/assets/images/header.jpg" alt="Walmart Header"/>
        </div>
        <nav>
          <div>
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </nav>
      </header>
    )
  }
});