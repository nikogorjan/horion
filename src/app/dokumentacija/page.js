import DokumentacijaWrapper from "../../../components/DokumentacijaPage/DokumentacijaWrapper/DokumentacijaWrapper";
import GoogleAnalytics from "../../../components/GoogleAnalytics/GoogleAnalytics";
import Navbar from "../../../components/Navbar/Navbar";


export const metadata = {
  title: "Horion učilnica",
  description: "Ponujamo obsežne informacije o različnih ginekoloških temah.",
};

export default function Dokumentacija() {
    return (
      <main>
        <Navbar/>
        <GoogleAnalytics/>
        <DokumentacijaWrapper/>
          
      </main>
    );
  }