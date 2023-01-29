import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LogOutProtection from "./contexts/protected/logout.protected";
import SinInProtected from "./contexts/protected/singin.protected";
import SeConnecter from "./components/login/SeConnecter";
import SEnregistrer from "./components/login/SEnregistrer";
import Utilisateur from "./components/personnes/utilisateurs/Utilisateur";
import Individu from "./components/personnes/individu/Individu";
import Requerant from "./components/personnes/requerant/Requerant";

import Accueil from "./components/accueil/accueil";
import Bureau from "./components/bureau/bureau";
import Procedure from "./components/procedures/procedure";

import Dossier from "./components/dossiers/Dossiers";
import DossierAgent from "./components/dossiers/mesDossier";
import DetailsDossier from "./components/dossiers/DetailsDossier";
import NouvelleDemande from "./components/dossiers/NouvelleDemande";

import AjoutIndividu from "./components/personnes/individu/AjoutIndividu";
import AjoutRequerant from "./components/personnes/requerant/AjoutRequerant";

import CahierNouvelleDemande from "./components/historique/cahierNouvelleDemande/cahier.nouvelle.demande";
import CahierArriver from "./components/historique/cahierArriver/cahier.arriver";
import CahierInterne from "./components/historique/cahierInterne/cahier.interne";
import CahierDepart from "./components/historique/cahierDepart/cahier.depart";
import CahierRendezVous from "./components/historique/cahierRendezVous/cahier.rendez.vous";
import MapsForFtsoa from "./contexts/maps/maps";

import Terrain from "./components/terrain/Terrain";
import PageNotFound from "./contexts/404/page404";

import StatisiqueGenerale from "./components/statistiques/statistique.general";
import PREVISA from "./components/traitementApprobation/PREVISA";
import VISA from "./components/traitementApprobation/VISA";
import UtilisateurEnAttente from "./components/traitementApprobation/ActivationCompte";

import DetailsTerrain from "./components/terrain/DetailsTerrain";
import DetailsIndividu from "./components/personnes/individu/DetailsIndividu";

export default function App() {
	return (
		<div className="App">
			<ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />
			<BrowserRouter>
				<Routes>
					<Route index element={<SeConnecter />} />

					<Route path="/*" element={<PageNotFound />} />

					<Route path="stats/" element={<StatisiqueGenerale />} />

					<Route path="nouveauUtilisateur/" element={<SEnregistrer />} />
					<Route path="utilisateur/" element={<Utilisateur />} />
					<Route path="individu/" element={<Individu />} />
					<Route path="requerant/" element={<Requerant />} />
					<Route path="accueil/" element={<Accueil />} />
					<Route path="procedure/" element={<Procedure />} />
					<Route path="bureau/" element={<Bureau />} />
					<Route path="dossier/" element={<Dossier />} />
					<Route path="mesDossiers/" element={<DossierAgent />} />
					<Route
						path="viewDossier/:numeroDossier"
						element={<DetailsDossier />}
					/>
					<Route path="nouvelleDemande/" element={<NouvelleDemande />} />
					<Route path="nouveauIndividu/" element={<AjoutIndividu />} />
					<Route path="nouveauRequerant/" element={<AjoutRequerant />} />

					<Route path="C_ND/" element={<CahierNouvelleDemande />} />
					<Route path="C_RDV/" element={<CahierRendezVous />} />
					<Route path="C_A/" element={<CahierArriver />} />
					<Route path="C_D/" element={<CahierDepart />} />
					<Route path="C_I/" element={<CahierInterne />} />

					<Route path="maps/" element={<MapsForFtsoa />} />
					<Route path="terrain/" element={<Terrain />} />

					<Route path="PREVISA/" element={<PREVISA />} />
					<Route path="VISA/" element={<VISA />} />
					<Route path="validationCompte/" element={<UtilisateurEnAttente />} />

					<Route path="viewTerrain/:numeroTitre" element={<DetailsTerrain />} />
					<Route path="viewIndividu/:cin" element={<DetailsIndividu />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
