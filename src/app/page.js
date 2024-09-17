import Navbar from "../../components/Navbar/Navbar";
import LandingHero from "../../components/LandingPage/LandingHero/LandingHero";
import LandingAbout from "../../components/LandingPage/LandingAbout/LandingAbout";
import LandingZacetekBlog from "../../components/LandingPage/LandingZacetekBlog/LandingZacetekBlog";
import LandingHorion from "../../components/LandingPage/LandingHorion/LandingHorion";
import Footer from "../../components/Footer/Footer";
import LandingAll from "../../components/LandingPage/LandingAll/LandingAll";
import Testimonials from "../../components/LandingPage/LandingTestimonials/Testimonials";
import LandingAnimation from "../../components/LandingPage/LandingAnimation/LandingAnimation";
import Blog from "../../components/LandingPage/LandingBlog/Blog";
import Images from "../../components/LandingPage/LandingPrvaMen/Images";
import LandingPost from "../../components/LandingPage/LandingPost/LandingPost";
import GoogleAnalytics from "../../components/GoogleAnalytics/GoogleAnalytics";

export default function Home() {
  return (
    <main>
        <Navbar/>
        <GoogleAnalytics/>
        <LandingHero/>
        <LandingAbout/>
        <Images/>
        <LandingAnimation/>
        <LandingHorion/>
        <LandingPost/>
        <LandingAll/>
        <Testimonials/>
        <Blog/>
        {/*<LandingZacetekBlog/>*/}
        <Footer/>
        
    </main>
  );
}
