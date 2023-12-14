import "./Header.css";
import logo from "../img/logo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <div className="Header">
      <div className="Title">
        <img src={logo} />
      </div>
      <div className="User-logo">
        <AccountCircleIcon fontSize="large" sx={{ color: "black" }}/>
      </div>
    </div>
  );
};

export default Header;
