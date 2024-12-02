import NotificationHeader from "./notification.header";
import ProfilHeader from "./profil.header";
import getDataUtilisateur from "../../api/udata";

import { useNavigate } from "react-router-dom";

export default function HeaderContext({
  children,
  toggleSidebar,
  isSidebarOpen,
  toggleTopbar,
  isTopbarOpen,
}) {
  const navigate = useNavigate();
  const u_info = getDataUtilisateur();

  const handleLogoClick = () => {
    navigate("/accueil");
  };

  return (
    <>
      <div className="main-header">
        <div className="logo-header">
          <div
            className="logo"
            style={{ cursor: "pointer" }}
            onClick={() => handleLogoClick()}
          >
            <img
              src={process.env.PUBLIC_URL + `/picture/logo/e-TK.png`}
              alt="pdp"
              style={{ width: "auto", height: "55px", borderRadius: "0%" }}
            />
          </div>

          {u_info.u_token ? (
            <>
              {/* Toggle For Sidebar */}
              <button
                className={`navbar-toggler sidenav-toggler ml-auto ${
                  isSidebarOpen ? "toggled" : ""
                }`}
                type="button"
                data-toggle="collapse"
                data-target="collapse"
                aria-controls="sidebar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleSidebar}
              >
                <span className="navbar-toggler-icon "> </span>
              </button>

              {/* Toggle For Profil  */}
              <button
                className={`topbar-toggler more monToggleoption ${
                  isTopbarOpen ? "toggled" : ""
                }`}
                onClick={toggleTopbar}
              >
                <i className="la la-ellipsis-v"></i>
              </button>
            </>
          ) : null}
        </div>

        {u_info.u_token ? (
          <>
            <nav className="navbar navbar-header navbar-expand-lg">
              <div className="container-fluid">
                {children}

                <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                  <NotificationHeader />
                  <ProfilHeader />
                </ul>
              </div>
            </nav>
          </>
        ) : null}
      </div>
    </>
  );
}
