import React from "react";

export default ({heading, subHeading}) => (
    <div
        style={{
            backgroundColor: "#276b2e",
            marginTop: "20px",
            fontSize: "32px",
            fontWeight: "bold",
            color: "white",
        }}
    >
        <div
            className="container"
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "64px 0",
            }}
        >
            <span>{heading}</span>
            <span>{subHeading}</span>
        </div>
    </div>
)