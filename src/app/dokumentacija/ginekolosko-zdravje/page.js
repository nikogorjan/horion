import DokumentacijaWrapper from "../../../../components/GinekoloskoZdravjePage/DokumentacijaWrapper/DokumentacijaWrapper";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import MobileContentNavbar from "../../../../components/MobileContentNavbar/MobileContentNavbar";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";
export const metadata = {
  title: "Ginekološko zdravje",
  description: "Že približno 10 let pred menopavzo (zadnjo menstruacijo) pride do postopnega upadanja delovanja jajčnikov.",
};
export default function Dokumentacija() {
    return (
      <main>
        <Navbar/>
        <GoogleAnalytics/>
        <MobileContentNavbar/>
        <DokumentacijaWrapper/>
        <Footer/>
      </main>
    );
  }