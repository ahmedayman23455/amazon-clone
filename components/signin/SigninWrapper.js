import React from "react";
import classes from "./signinWrapper.module.scss";

function SigninWrapper({ children }) {
  return (
    <div className={classes.signinWrapper}>
      <div className={classes.signinSection}>
        <div className={classes.image}>
          <img src="/amazon.png" alt="" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default SigninWrapper;
