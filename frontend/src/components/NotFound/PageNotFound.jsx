import { Button } from "@mui/material";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Error from "../../img/404error.png";

const PageNotFound = () => {
  return (
    <Fragment>
      <div className="error_main" style={{ height: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div>
            <img src={Error} size={20} style={{ marginTop: "50px" }}></img>
          </div>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0px",
            textAlign: "center",
          }}
          className="error_text"
        >
          <div>
            <h1>
              <span style={{ color: "#da3450" }}>OOPS ! </span>PAGE NOT BE FOUND
            </h1>
            <p style={{ width: "100%", marginTop: "20px" }}>
              Sorry but The page your looking for does not exit, have been
              removed .
            </p>
            <p style={{ marginTop: "10px" }}>
              name changed or is temporarily unavailable
            </p>
          </div>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button style={{ backgroundColor: "#da3450" }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Go to Home Page
            </Link>
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
