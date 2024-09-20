import Footer from "../../../../components/Footer/Footer";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";
import Navbar from "../../../../components/Navbar/Navbar";
import Herpes from "../../../../components/Novice/Herpes/Herpes"
import Head from 'next/head';

export default function Dokumentacija() {
    const postTitle = "Genitalni Herpes: Vse, kar morate vedeti o simptomih, zdravljenju in preventivi";
    const postDescription = "Raziskali bomo vse vidike genitalnega herpesa, od simptomov do zdravljenja in preventivnih ukrepov.";
    const postImage = "/Images/novica11.webp"; // The path to the image to display when shared
    const postUrl = "https://horion.si/novice/herpes"; // Your blog post URL


    return (
        <main>
            <Head>
        {/* Open Graph meta tags for Facebook */}
        <title>{postTitle}</title>
        <meta name="description" content={postDescription} />

        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={postDescription} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={postImage} />
        <meta property="og:site_name" content="Horion" />
      </Head>
            <Navbar />
            <GoogleAnalytics />
            <Herpes />
            <Footer />
        </main>
    );
}