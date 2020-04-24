import React from "react";
import "./header.css";
import logo from "../../Resources/img/logo.png";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "../../styles/main.css";
// import AccountCircle  from 'meterial-ui-icons/AccountCircle ';

const Header = () => {
  return (
    <div className="header">
      <div className="absolute">
        {/* ======Logo======== */}
        <div className="bg_logo" style={{ background: `url(${logo})` }}></div>
      </div>
      {/* =======Links======= */}
      <div className="menu">
        <a>Productos</a>
        <a>Soluciones</a>
        <a>Documentacion</a>
       
      </div>
    </div>
  );
};
export default Header;

// const styles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing.unit * 3,
//     width: "100%",
//   },
//   flex: {
//     flex: 1,
//   },
//   menuButtom: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// }));
// const Header = () => {
//   return (
//
//
//         <div className="boton">
//           <button
//             type="button"
//             className="block  px-2 py-2 hover:border-white hover:border-solid hover:border-2 "
//           >
//             <svg
//               class="fill-current  h-4 w-4"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <title>Menu</title>
//               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Header;
