import Footer from "../../../../components/Footer/Footer";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";
import Navbar from "../../../../components/Navbar/Navbar";
import Herpes from "../../../../components/Novice/Herpes/Herpes";

export const metadata = {
  title: "Genitalni Herpes: Vse, kar morate vedeti o simptomih, zdravljenju in preventivi",
  description: "Raziskali bomo vse vidike genitalnega herpesa, od simptomov do zdravljenja in preventivnih ukrepov.",
  openGraph: {
    type: 'article',
    url: "https://horion.si/novice/herpes",
    title: "Genitalni Herpes: Vse, kar morate vedeti o simptomih, zdravljenju in preventivi",
    description: "Raziskali bomo vse vidike genitalnega herpesa, od simptomov do zdravljenja in preventivnih ukrepov.",
    images: [
      {
        url: "/Images/novica11.webp",
        alt: "Genitalni Herpes Article Image",
      }
    ],
    siteName: 'Horion',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Genitalni Herpes: Vse, kar morate vedeti o simptomih, zdravljenju in preventivi",
    description: "Raziskali bomo vse vidike genitalnega herpesa, od simptomov do zdravljenja in preventivnih ukrepov.",
    images: ["/Images/novica11.webp"],
  }
};

export default function Dokumentacija() {
  return (
    <main>
      <Navbar />
      <GoogleAnalytics />
      <Herpes />
      <Footer />
    </main>
  );
}