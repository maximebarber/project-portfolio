import React from 'react'
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import Logo from './img/mdb-logo.png'

const Navbar = (props) => {
    const { auth, profile } = props
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper grey">
            <div className="container">
                <Link to="/" className="brand-logo valign-wrapper">
                    <img src={Logo} alt="logo" className=" mdb-logo" />
                </Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)