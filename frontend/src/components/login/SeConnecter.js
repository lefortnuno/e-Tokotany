import FormulaireSeConnecter from "./Form.SeConnecter";
import HeaderContext from "../../contexts/header/header.context";
import SidebarContext from "../../contexts/sidebar/sidebar.context";
import FooterContext from "../../contexts/footer/footer.context";
import axios from "../../api/axios"; 
import { useEffect } from "react";

export default function SeConnecter() {
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("bureau/glitch/")
        .then(function (response) {
        //   console.log("Données récupérées : ", response.data);
        })
        .catch((error) => {
        //   console.error("Erreur lors de la récupération : ", error);
        });
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // 1.MIN
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="wrapper">
        <HeaderContext />
        <SidebarContext />

        <div className="main-panel">
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic js-tilt" data-tilt>
                <img
                  src={process.env.PUBLIC_URL + `/picture/logo/fanjakana.jpg`}
                  alt="image"
                  // style={{ width: "100%", height: "80%", borderRadius: "0%" }}
                  style={{ marginTop: "16%" }}
                />
              </div>

              <FormulaireSeConnecter />
            </div>
          </div>
          <FooterContext />
        </div>
      </div>
      {/* {libraryList.forEach((x) => AjoutLibrary(x))} */}
    </>
  );
}
