import Footer from "../../../../components/Footer/Footer";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";
import Navbar from "../../../../components/Navbar/Navbar";
import RakZunanjegaSpolovila from "../../../../components/Novice/RakZunanjegaSpolovila/RakZunanjegaSpolovila";
import Spustitev from "../../../../components/Novice/SpustitevMaternice/Spustitev";

export default function Dokumentacija() {
    return (
      <main>
        <Navbar/>
        <GoogleAnalytics/>
        <Spustitev/>
        <Footer/> 
      </main>
    );
  }