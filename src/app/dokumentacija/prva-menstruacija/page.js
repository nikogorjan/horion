import DokumentacijaWrapper from "../../../../components/PrvaMenstruacijaPage/DokumentacijaWrapper/DokumentacijaWrapper";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import MobileContentNavbar from "../../../../components/MobileContentNavbar/MobileContentNavbar";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";


export const metadata = {
  title: "Prva menstruacija",
  description: "Prvo menstruacijo imenujemo tudi menarha. Menstruacija je normalna krvavitev iz maternice, ki se pojavlja v določenih časovnih razmikih.",
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