import DokumentacijaWrapper from "../../../../components/NosecnostPage/DokumentacijaWrapper/DokumentacijaWrapper";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import MobileContentNavbar from "../../../../components/MobileContentNavbar/MobileContentNavbar";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";

export const metadata = {
  title: "Nosečnost",
  description: "Nosečnost je obdobje od oploditve jajčne celice do rojstva otroka. Nosečnost traja 40 lunarnih tednov oziroma 280 dni.",
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