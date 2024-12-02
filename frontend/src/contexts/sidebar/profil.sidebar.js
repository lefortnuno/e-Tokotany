import getDataUtilisateur from "../../api/udata";

export default function ProfilSidebar() {
  const u_info = getDataUtilisateur();
  return (
    <>
      <div className="user">
        <div className="photo">
          {/* <img
            src={
              process.env.REACT_APP_SUN_COMPLET_URL +
              `uploads/${u_info.u_photoPDP}`
            }
            alt="pdp"
          /> */}
          <img
            src={`https://etokotanys.onrender.com/api/uploads/1672771262506-logo.jpg`}
            alt="pdp2"
          /> 
        </div>
        <div className="info">
          <a href="#" aria-expanded="true">
            <span>
              {u_info.u_identification}
              <span className="user-level">{u_info.u_attribut}</span>
            </span>
          </a>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
}
