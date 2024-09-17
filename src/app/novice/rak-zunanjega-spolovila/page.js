import Footer from "../../../../components/Footer/Footer";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";
import Navbar from "../../../../components/Navbar/Navbar";
import RakZunanjegaSpolovila from "../../../../components/Novice/RakZunanjegaSpolovila/RakZunanjegaSpolovila";

export default function Dokumentacija() {
    return (
      <main>
        <Navbar/>
        <GoogleAnalytics/>
        <RakZunanjegaSpolovila/>
        <Footer/> 
      </main>
    );
  }