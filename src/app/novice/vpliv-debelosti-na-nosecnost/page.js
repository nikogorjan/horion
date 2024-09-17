import Footer from "../../../../components/Footer/Footer";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";
import Navbar from "../../../../components/Navbar/Navbar";
import VplivDebelostiNaNosecnost from "../../../../components/Novice/VplivDebelostiNaNosecnost/VplivDebelostiNaNosecnost";

export default function Dokumentacija() {
    return (
      <main>
        <Navbar/>
        <GoogleAnalytics/>
        <VplivDebelostiNaNosecnost/>
        <Footer/> 
      </main>
    );
  }