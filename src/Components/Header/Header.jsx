import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../Resources/img/logo.png";
import "../../styles/main.css";
import Menu_List from "../Menu_Items";
import { ToggleLayer } from "react-laag";
import { AnimatePresence } from "framer-motion";
import Menu, { MenuItem } from "../Menu_Deploy";
// import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "@material-ui/core/Toolbar/Toolbar";

// ===== PopoverMenu========
const PopoverMenu = forwardRef(function PopoverMenu(props, ref) {
  return (
    <ToggleLayer
      renderLayer={(props) => {
        function handleClick(item) {
          return function onClick() {
            alert(`has clickeado el elemento "${item}"`);
            props.close();
          };
        }
        return (
          <AnimatePresence>
            {props.isOpen && (
              <Menu
                ref={props.layerProps.ref}
                style={props.layerProps.style}
                arrowStyle={props.arrowStyle}
                layerSide={props.layerSide}
              >
                <MenuItem onClick={handleClick("Item 1")}>Item 1</MenuItem>
                <MenuItem onClick={handleClick("Item 2")}>Item 2 </MenuItem>
                <MenuItem onClick={handleClick("Item 3")}>Item 3</MenuItem>
                <MenuItem onClick={handleClick("Item 4")}>Item 4</MenuItem>
              </Menu>
            )}
          </AnimatePresence>
        );
      }}
      closeOnOutsideClick
      closeOnDisappear="partial"
      placement={{
        anchor: "BOTTOM_CENTER",
        autoAdjust: true,
        snapToAnchor: false,
        triggerOffset: 10,
        scrollOffset: 16,
        preferX: "RIGHT",
      }}
    >
      {({ triggerRef, toggle }) => (
        <button ref={triggerRef} className="toggle-btn" onClick={toggle}>
          Toggle
        </button>
      )}
    </ToggleLayer>
  );
});
// ============ Initial Point============
const Header = ({ active, fu }) => {
  const [act, setAct] = useState(0);

  const chage = (ind) => {
    setAct(ind);
  };
  return (
    <div className="header">
      <div className="absolute">
        {/* Container left */}
        <div className="header-left">
          {/* Text Logo */}
          <div className="header-text">
            <h1>Servicios Profesionales</h1>
          </div>
          {/* ======Logo======== */}
          <div className="bg_logo" style={{ background: `url(${logo})` }}></div>
        </div>

        {/* =======Links======= */}
        <div className="menu">
          {Menu_List.map((item, index) => (
            <Link
              key={item.label}
              className={
                act === index ? `menu-button page-active` : `menu-button`
              }
              to={item.pathname}
              onClick={(e) => chage(index)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* <PopoverMenu /> */}
      </div>
    </div>
  );
};
export default Header;
