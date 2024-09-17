import Footer from "../../../components/Footer/Footer";
import GoogleAnalytics from "../../../components/GoogleAnalytics/GoogleAnalytics";
import Navbar from "../../../components/Navbar/Navbar";
import NovicePage from "../../../components/NovicePage/NovicePage";

export const metadata = {
  title: "Horion novice",
  description: "Avtorji člankov so strokovnjaki, subspecialisti, ki skrbijo za posamezne teme o ginekološkem zdravju žensk.",
};

export default function Dokumentacija() {
    return (
      <main>
        <Navbar/>
        <GoogleAnalytics/>
        <NovicePage/>   
        <Footer/> 
      </main>
    );
  }