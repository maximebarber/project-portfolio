import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import Logo from "./img/mdb-logo.png";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as BellIcon } from "../../icons/bell.svg";
import { ReactComponent as BoltIcon } from "../../icons/bolt.svg";
import { ReactComponent as CaretIcon } from "../../icons/caret.svg";
import { ReactComponent as ChevronIcon } from "../../icons/chevron.svg";
import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import { ReactComponent as MessengerIcon } from "../../icons/messenger.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { CSSTransition } from "react-transition-group";

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper white mdb-navbar z-depth-0">
            <div className="container">
                <Link to="/" className="brand-logo valign-wrapper">
                    <img src={Logo} alt="logo" className=" mdb-logo" />
                </Link>
                {links}
            </div>
        </nav>
    );
};

/*
const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState("main"); // settings, animals
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 30);
    }, []);

    const calcHeight = (el) => {
        const height = el.offsetHeight + 30;
        setMenuHeight(height);
    };

    const DropdownItem = (props) => {
        return (
            <a href="#" className="facebook-dropdown menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    };

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>
                        <b>My profile</b>
                    </DropdownItem>
                    <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem leftIcon="🦧" rightIcon={<ChevronIcon />} goToMenu="animals">
                        Animals
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === "settings"} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <b>My Tutorial</b>
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === "animals"} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <b>Animals</b>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
};

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <ul className=" facebook-dropdown navbar-nav">
                <NavItem icon={<BellIcon />} />
                <NavItem icon={<PlusIcon />} />
                <NavItem icon={<CogIcon />} />
                <NavItem icon={<CaretIcon />}>
                    <DropdownMenu />
                </NavItem>
            </ul>
        </nav>
    );
};

const NavItem = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <li className="nav-item">
            <a href="#" className="facebook-dropdown icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
};
*/

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    };
};

export default connect(mapStateToProps)(Navbar);
