import "./Header.css";

const Header = (props) => {
  return (
    <nav className="Header">
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        alt=""
      />

      <div>
        <h1>{props.Title}</h1>
      </div>
    </nav>
  );
};

export default Header;
