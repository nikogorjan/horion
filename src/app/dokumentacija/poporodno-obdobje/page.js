import DokumentacijaWrapper from "../../../../components/PoporodnoObdobjePage/DokumentacijaWrapper/DokumentacijaWrapper";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import MobileContentNavbar from "../../../../components/MobileContentNavbar/MobileContentNavbar";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";
export const metadata = {
  title: "Popporodno obdobje",
  description: "Obdobje po porodu se imenuje tudi puerperij. Za čas poporodnega obdobja se običajno šteje prvih šest tednov po porodu.",
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