import Footer from "../../../../components/Footer/Footer";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";
import Navbar from "../../../../components/Navbar/Navbar";
import Adenomioza from "../../../../components/Novice/Adenomioza/Adenomioza";

export default function Dokumentacija() {
    return (
      <main>
        <Navbar/>
        <GoogleAnalytics/>
        <Adenomioza/>
        <Footer/> 
      </main>
    );
  }