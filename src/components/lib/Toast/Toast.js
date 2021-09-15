import React, { useState } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import "./style.scss";

const Toast = props => {
  const {
    message,
    color = "night",
    icon,
    visible = false,
    timeOut = 5000,
    positionY = "bottom",
    positionX = "left"
  } = props;

  const [isvisible, setIsVisible] = useState(visible);
  const style = {
    width: isvisible ? "100%" : "0",
    padding: isvisible ? "1em" : "0",
    boxShadow: isvisible ? "0px 0px 15px 5px rgba(0,0,0,.5)" : "none"
  };
  const positionStyle = {
    [positionY]: "10px",
    [positionX]: "10px"
  };

  const onClose = () => {
    setTimeout(() => setIsVisible(false), timeOut);
  };

  const close = e => {
    e.preventDefault();
    setIsVisible(false);
  };

  onClose();

  return (
    <div className="kromac-toast" style={positionStyle}>
      <div className={`kromac-toast-content ${color}`} style={style}>
        {icon &&
          <span>
            <ion-icon name={icon} />
          </span>}
        <p className="text-bg-light">
          {message}
        </p>
        <span onClick={close}>
          <ion-icon name="close-circle-outline" />
        </span>
      </div>
    </div>
  );
};

Toast.propTypes = exact({
  message: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "success",
    "error",
    "danger",
    "warning",
    "info",
    "night"
  ]),
  icon: PropTypes.string,
  visible: PropTypes.bool,
  timeOut: PropTypes.number,
  positionY: PropTypes.oneOf(["bottom", "top"]),
  positionX: PropTypes.oneOf(["right", "left"])
});

export default Toast;
