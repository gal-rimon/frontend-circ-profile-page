import "./style.css";
import { Link } from "react-router-dom";
import {
  Logo,
  Search,
  HomeIcon,
  Friends,
  Envelope,
  Globe,
  Settings,
  Notifications,
  ArrowDown,
} from "../../svg/index.tsx";

// import { LogoFacebook } from "../../svg/index.tsx";

export default function Header({ page }: { page: string }) {
  return (
    <header>
      {/* Header Left Side */}
      <div className="header-left">
        <Link to="/" className="header-logo">
          <div className="circle">
            <Logo color="transparent" />
          </div>
        </Link>
        <div className="search">
          <Search color="#72b0d5" />
          <input
            type="text"
            placeholder="Search Circ"
            className="hide-input-field"
          ></input>
        </div>
      </div>
      {/* Header Middle Area */}
      <div className="header-middle">
        <Link
          to="/"
          className={`${
            page === "home"
              ? "header-middle-icon active-bottom-line"
              : "header-middle-icon hover1"
          }`}
        >
          <HomeIcon color="var(--top-menu-icon-color)" />
        </Link>
        <Link
          to="/posts"
          className={`${
            page === "posts"
              ? "header-middle-icon active-bottom-line"
              : "header-middle-icon hover1"
          }`}
        >
          <Friends color="var(--top-menu-icon-color)" />
        </Link>
        <Link
          to="/messages"
          className={`${
            page === "messages"
              ? "header-middle-icon active-bottom-line"
              : "header-middle-icon hover1"
          }`}
        >
          <Envelope color="var(--top-menu-icon-color)" />
        </Link>
        <Link
          to="/global"
          className={`${
            page === "global"
              ? "header-middle-icon active-bottom-line"
              : "header-middle-icon hover1"
          }`}
        >
          <Globe color="var(--top-menu-icon-color)" />
        </Link>
        <Link
          to="/settings"
          className={`${
            page === "settings"
              ? "header-middle-icon active-bottom-line"
              : "header-middle-icon hover1"
          }`}
        >
          <Settings color="var(--top-menu-icon-color)" />
        </Link>
      </div>
      {/* Header Right Side */}
      <div className="header-right">
        <Link
          to="/profile"
          className={`${
            page === "profile"
              ? "profile-link profile-active"
              : "profile-link hover1"
          }`}
        >
          <img
            src="../../../public/images/profile-pic.png"
            alt="profile picture"
          />
          <span>User Name</span>
        </Link>
        <div className="circle-icon right-menu-hover">
          <Notifications color="var(--top-menu-icon-color-2)" />
          <div className="num-of-notification">5</div>
        </div>
        <div className="circle-icon right-menu-hover">
          <ArrowDown color="var(--top-menu-icon-color-2)" />
        </div>
      </div>
    </header>
  );
}
