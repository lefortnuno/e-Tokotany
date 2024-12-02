import { Link, useLocation } from "react-router-dom";
import getDataUtilisateur from "../../api/udata";

import {
  BsFolder2Open,
  BsGlobe2,
  BsGeoAlt,
  BsHouse,
  BsInfoLg,
  BsGoogle,
  BsPeople,
  BsStickies,
  BsReception4,
} from "react-icons/bs";

export default function NavbarContext() {
  const u_info = getDataUtilisateur();
  const location = useLocation();

  const isActive = (path) => location.pathname === path; // Vérifie si le chemin correspond

  return (
    <>
      <ul className="nav">
        <li
          className={`nav-item ${
            isActive("/accueil") ||
            isActive("/bureau") ||
            isActive("/procedure")
              ? "active"
              : ""
          }`}
        >
          <Link to="/accueil">
            <i>
              <BsHouse />
            </i>
            <p> Accueil </p>
            <span className="badge badge-count">3</span>
          </Link>
        </li>
        {u_info.u_attribut !== "Usager" ? (
          <>
            <li className={`nav-item ${isActive("/dossier/") ? "active" : ""}`}>
              <Link to="/dossier">
                <i className="">
                  <BsFolder2Open />
                </i>
                <p> Dossiers </p>
                <span className="badge badge-count">1</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                isActive("/individu") ||
                isActive("/requerant") ||
                isActive("/utilisateur")
                  ? "active"
                  : ""
              }`}
            >
              <Link to="/individu">
                <i>
                  <BsPeople />
                </i>
                <p> Personnes </p>
                <span className="badge badge-count">3</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                isActive("/C_ND") ||
                isActive("/C_A") ||
                isActive("/C_D") ||
                isActive("/C_I") ||
                isActive("/C_RDV")
                  ? "active"
                  : ""
              }`}
            >
              <Link to="/C_ND">
                <i>
                  <BsStickies />
                </i>
                <p> Cahiers </p>
                <span className="badge badge-count">5</span>
              </Link>
            </li>
            <br />
            <li className={`nav-item ${isActive("/terrain") ? "active" : ""}`}>
              <Link to="/terrain">
                <i>
                  <BsGlobe2 />
                </i>
                <p>Terrain</p>
                <span className="badge badge-success">3</span>
              </Link>
            </li>
            <li className={`nav-item ${isActive("/stats") ? "active" : ""}`}>
              <Link to="/stats">
                <i>
                  <BsReception4 />
                </i>
                <p>Statisique</p>
                <span className="badge badge-info">3</span>
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </>
  );
}
