import Footer from "../../../../components/Footer/Footer";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";
import Navbar from "../../../../components/Navbar/Navbar";
import PovecanaPorascenost from "../../../../components/Novice/PovecanaPorascenost/PovecanaPorascenost";

export default function Dokumentacija() {
    return (
      <main>
        <Navbar/>
        <GoogleAnalytics/>
        <PovecanaPorascenost/>
        <Footer/> 
      </main>
    );
  }