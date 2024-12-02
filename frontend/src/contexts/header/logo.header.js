import getDataUtilisateur from "../../api/udata";
import { useNavigate } from "react-router-dom";

export default function LogoHeader() {
  const navigate = useNavigate();
  const u_info = getDataUtilisateur();

  const handleLogoClick = () => {
    navigate("/accueil");
  };

  return (
    <div className="logo-header">
      <div className="logo cursor-pointer"  style={{cursor:"pointer"}} onClick={() => handleLogoClick()}>
        <img
          src={`${process.env.PUBLIC_URL}/picture/logo/e-TK.png`}
          alt="Logo"
          style={{ width: "auto", height: "55px", borderRadius: "0%" }}
        />
      </div>

      {u_info?.u_token && (
        <>
          {/* Sidebar Toggle */}
          <button
            className="navbar-toggler sidenav-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#sidebar"
            aria-controls="sidebar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Profile Options Toggle */}
          <button className="topbar-toggler more monToggleoption">
            <i className="la la-ellipsis-v"></i>
          </button>
        </>
      )}
    </div>
  );
}
