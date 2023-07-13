import Footer from "../components/Footer"
import NavBar from "../components/Navbar"


export default function Login() {
  document.title = `Olympique de béja | Nous Contacter`
  return (
    <div>
      <section className="bg-black bg-opacity-50 body-font relative">
        <NavBar/>
        <div className="container sm:px-5 py-8 mx-auto">
          <div className="px-4 sm:px-0 flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-3xl font-semibold title-font mb-4 text-white">
              Connexion
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Tu peux nous contacter via ce <a href="/Contact" className="font-semibold text-red-800 hover:text-red-500">lien</a> .
            </p>
          </div>
          <div className="px-4 sm:w-2/3 mx-auto">
            <div className="flex flex-wrap flex-col items-center -m-2"> 
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
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-white">
                    Mot De Passe
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-red-500 ring-offset-transparen text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="passw@rd"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex ml-auto text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-800 rounded text-lg">
                  Connexion
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-4 border-t border-gray-200 text-center">
                <a className="text-white font-semibold">support@olympique-beja.com</a>
                <p className="leading-normal my-4 text-white">
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
