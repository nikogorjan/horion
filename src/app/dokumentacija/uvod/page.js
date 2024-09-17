import DokumentacijaWrapper from "../../../../components/UvodPage/DokumentacijaWrapper/DokumentacijaWrapper";
import Navbar from "../../../../components/Navbar/Navbar";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";

export default function Dokumentacija() {
    return (
      <main>
        <Navbar/>
        <GoogleAnalytics/>
        <DokumentacijaWrapper/>
          
      </main>
    );
  }