import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";

export default ({heading, subHeading}) => (
    <React.Fragment>
        <NavBar />
        <Banner heading={heading} subHeading={subHeading} />
    </React.Fragment>
)