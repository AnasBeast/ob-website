import Footer from "../components/Footer"
import NavBar from "../components/Navbar"


export default function Contact() {
  document.title = `Olympique de béja | Contact`
  return (
    <div>
      <section className="bg-black bg-opacity-50 body-font relative">
        <NavBar/>
        <div className="container sm:px-5 py-24 mx-auto">
          <div className="px-4 sm:px-0 flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-3xl font-semibold title-font mb-4 text-white">
              Nous Contacter
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Tu peux nous contacter via ce formulaire ou en appelant le numéro ci dessous.
            </p>
          </div>
          <div className="px-4 sm:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-white">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-red-500 ring-offset-transparen text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Votre Nom"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-red-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    placeholder="Message içi"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex ml-auto text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-800 rounded text-lg">
                  Envoyer
                </button>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d565.2872364701744!2d9.19970883257312!3d36.728624853936196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stn!4v1687049805993!5m2!1sen!2stn" width="100%" height="600" style={{"border":0}} allowFullScreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-white font-semibold">support@olympique-beja.com</a>
                <p className="leading-normal my-5 text-white">
                    Av. de l'Environnement, 
                  <br />
                  Béja, 9000
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
