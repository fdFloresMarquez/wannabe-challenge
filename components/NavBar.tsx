type Props = {};

const NavBar: React.FC<Props> = () => {
  return (
    <nav className="navbar navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand">Wannabe Challenge</a>
        <form className="d-flex" role="search">
          <input
            aria-label="Search"
            className="form-control me-2"
            placeholder="Search"
            type="search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
