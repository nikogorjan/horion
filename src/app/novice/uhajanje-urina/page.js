import Footer from "../../../../components/Footer/Footer";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";
import Navbar from "../../../../components/Navbar/Navbar";
import Pomembnost from "../../../../components/Novice/PomembnostObiskaGinekologa/Pomembnost";
import PrviObisk from "../../../../components/Novice/PrviObisk/PrviObisk";
import RakZunanjegaSpolovila from "../../../../components/Novice/RakZunanjegaSpolovila/RakZunanjegaSpolovila";
import Spustitev from "../../../../components/Novice/SpustitevMaternice/Spustitev";
import UhajanjeUrina from "../../../../components/Novice/UhajanjeUrina/UhajanjeUrina";

export default function Dokumentacija() {
    return (
      <main>
        <Navbar/>
        <GoogleAnalytics/>
        <UhajanjeUrina/>
        <Footer/> 
      </main>
    );
  }