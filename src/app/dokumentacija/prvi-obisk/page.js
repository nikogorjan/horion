import DokumentacijaWrapper from "../../../../components/PrviObiskPage/DokumentacijaWrapper/DokumentacijaWrapper";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import MobileContentNavbar from "../../../../components/MobileContentNavbar/MobileContentNavbar";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";

export const metadata = {
  title: "Prvi obisk ginekologa",
  description: "Odvzem in pregled celic z materničnega vratu se imenuje po grškem zdravniku Georgiosu Papanicolaou.",
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