
import NavBar from '../components/Navbar'
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';


export default function Photos() {
  document.title = `Olympique de béja | Photos`


  return (
      <div className="min-h-full">
        <NavBar/>
        <Gallery/>
        <Footer/>
      </div>
  )
}
