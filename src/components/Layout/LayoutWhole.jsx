import Navbar from "../Common/Navbar";
import HeroSection from "../Pages/HeroSection"
import About from "../Pages/About"
import Skills from "../Pages/Skills";
import Project from "../Pages/Project"
import MyWriting from "../Pages/MyWriting";
import Contact from "../Pages/Contact";
import Footer from "../Common/Footer";

const LayoutWhole = () => {
  return (
    <div>
      {/* Header section Yaha rakhney: header have logo at left contains at the center like Home,About,Skills,Project,Contact */}
      <header className="border-b-2 border-gray-200 bg-white fixed top-0 left-0 w-full z-50 shadow-md">
          <Navbar />
      </header>
     

      {/* Main section Yaha rakhney: body of the webpage */}
      <main className="pt-16">
        <HeroSection/>
        <About/>
        <Skills/>
        <Project/>
        <MyWriting/>
        <Contact/>
       
        
      </main>

      {/* Footer section Yaha rakhney: footer have copyrights, social media icons */}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default LayoutWhole;
