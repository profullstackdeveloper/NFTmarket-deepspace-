import SmallButton from "./Button/SmallButton";
import logo from "../assets/img/icons/logo.png";
import notification  from "../assets/img/icons/notification.png";
import user from '../assets/img/icons/user-avatar.png'
import MediumButton from "./Button/MediumButton";
const Header = () => {
  return (
    <>
      <div className="header d-flex flex-row align-items-center justify-content-between">
          <div className="d-flex flex-row align-items-center">
          <img src={logo} className="header_logo" />
          <div className="header-item-container d-flex flex-row align-items center">
            <div className="header-item">Market</div>
            <div className="header-item">Assets</div>
            <div className="header-item">Wallet</div>
            <div className="header-item">Create</div>
          </div>
          </div>
        <div className="d-flex align-items-center flex-row header-nav-right">
            <div className="header-notification">
                <img src={notification} />
            </div>
            <div className="sm-btn"><MediumButton name="Connect Wallect" /></div>
            <div className="header-avatar">
                <img src={user} />
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
