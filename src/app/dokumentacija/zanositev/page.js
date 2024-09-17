import DokumentacijaWrapper from "../../../../components/ZanositevPage/DokumentacijaWrapper/DokumentacijaWrapper";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import MobileContentNavbar from "../../../../components/MobileContentNavbar/MobileContentNavbar";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";

export const metadata = {
  title: "Zanosite in neplodnost",
  description: "V enem letu rednih spolnih odnosov, kar pomeni 2‒3-krat na teden, zanosi okoli 80 % parov.",
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