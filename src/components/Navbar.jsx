import "./styles/Navbar.css";
export const Navbar = () => {
  return (
    <div id="container">
      <img
        id="img"
        style={{ width: "70px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
        alt=""
      />
      <input type="text" placeholder="Search" id="input" />
      <button>Search</button>
    </div>
  );
};
