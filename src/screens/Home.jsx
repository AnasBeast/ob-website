
import {
  RocketLaunchIcon,
} from '@heroicons/react/20/solid'
import {useSelector} from "react-redux"
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  SparklesIcon,
} from '@heroicons/react/24/outline'
import Perso from '../components/Carousel'
import { useState } from 'react'





export default function Home() {
  document.title = "Olympique de Béja | Acceuil";
  const [readMore,setReadMore] = useState(false)
  return (
    <div >
      <div className="relative overflow-hidden">
        <NavBar/>
        <main>
        <div className="relative">
          <div className="mx-auto w-10/12 sm:max-w-5xl sm:px-6 lg:px-8 pt-4">
            <div className="relative rounded-2xl shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={require("../assets/images/equipetop.jpg")}
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-gray-700 mix-blend-multiply" />
              </div>
              <div className="relative px-2 py-4 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Olympique de béja</span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-red-200 sm:max-w-3xl">
                  Siteweb non officiel de l'équipe de football de béja.
                </p>

              </div>
            </div>
          </div>
        </div>
        <div id="docs-sidebar" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed z-[60] w-80 bg-white bg-opacity-70 border-r border-gray-200 py-10 px-8 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:z-10 dark:scrollbar-y ">
          <button type="button" class="ml-auto flex justify-end lg:hidden text-black hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
            <span class="sr-only">Toggle Navigation</span>
            <svg class="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>

          <nav id="sidebar-nav" class="relative space-y-8">
            <ul class="space-y-2 border-l-2 border-slate-100 dark:border-slate-800" data-hs-scrollspy="#scrollspy">
              <li><a class="block py-1 pl-4 -ml-px border-l-2 border-transparent text-lg text-black hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 active font-semibold" href="#historique">• Historique de l'équipe</a></li>
              <li><a class="block py-1 pl-4 -ml-px border-l-2 border-transparent text-lg text-black hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 font-semibold" href="#palmares">• Palmarès</a></li>
              <li><a class="block py-1 pl-4 -ml-px border-l-2 border-transparent text-lg text-black hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 font-semibold" href="#perso">• Personnalités</a></li>

            </ul>
          </nav>
        </div>
          {/* Feature section with screenshot */}
          <div className="relative py-16 sm:py-24 lg:py-32">
          
            <div className="mx-auto bg-white bg-opacity-70 rounded-lg max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <div id='historique'>
                <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
                  Historique de l'équipe
                </p>
              </div>
              <div className="mt-4">
                <img
                  className="rounded-lg w-full shadow-xl ring-1 ring-black ring-opacity-5"
                  src={require("../assets/images/historique2.jpg")}
                  alt=""
                />
                <p className='text-2xl font-semibold text-left pb-4'>
                Durant la période où la ville de Béja est placée sous le protectorat français, comme le reste du pays, les activités sportives s'organisent en fonction des communautés. Ainsi, il existe deux équipes dont l'une accueille les joueurs de confession juive et l'autre regroupe les Italiens, d'où l'idée de fonder une équipe de football pour les Tunisiens musulmans. Le club est prêt à exercer ses activités dès 1920 mais il est contesté par les autorités du protectorat car, à cette époque, tout club tunisien n'a le droit d'exister qu'avec l'autorisation des autorités. C'est donc en 1929 que Mahmoud Mnakbi, aux côtés d'autres personnalités, décide de créer une équipe de football sous le nom de l'Olympique de Béja et portant les couleurs blanc, noire et rouge.
                
                <br />{!readMore && <span className='cursor-pointer text-red-500' onClick={()=>setReadMore(true)}>lire plus...</span>} <br />
                
                {
                  readMore && 
                  <>
                    L'équipe accède en division nationale à l'issue de la saison 1984-1985 et s'y installe durant 21 ans. Elle connaît la rétrogradation au terme de la saison 2004-2005, après que la Fédération tunisienne de football a enlevé trois points après un match contre l'Étoile olympique La Goulette Kram. Après la saison 2006-2007, elle retourne en division nationale. En 1993, le club remporte sa première coupe de Tunisie face à l'Avenir sportif de La Marsa, avec des joueurs comme Haykel Guezmir (gardien), Karim Rihani, Béchir Homri, Khaled Jmai, Nabil Bechaouech, Aziz Dridi, Said Kouki, Maher Sdiri, Nabil Kouki, Hédi Mokrani et Zied Lyouzbachi. En 1995, après la finale de la coupe de Tunisie perdue contre le Club sportif sfaxien (2-1), l'Olympique de Béja remporte la Supercoupe de Tunisie de football contre la même équipe.
                    <br /> <br />
                    En 1999, elle participe pour la première fois à la coupe arabe des clubs champions en Égypte ; un match joué contre l'équipe d'Al Ahly au Caire (1-1) marque la mémoire des supporters béjaois. En 2010, le club prend sa revanche de la finale de 1995, en remportant grâce à un but de Mehdi Harb la coupe de Tunisie face au Club sportif sfaxien.
                    <br /> <br />
                    En 2005, après vingt ans parmi l'élite, le club subit sa première rétrogradation en Ligue II. Il y passe une seule saison et revient en Ligue I puis rétrograde à nouveau en 2014 avant de retrouver sa place en Ligue I à l'issue de la saison 2015-2016. Le club n’arrive pas à garder sa place parmi les élites en multipliant les descentes en Ligue II.
                  </>
                }
                 
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden pt-16 pb-32  bg-opacity-50">
            <div id='palmares' class="container mt-4 mx-auto bg-white bg-opacity-70 rounded-lg max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className='text-4xl font-bold tracking-tight text-black sm:text-5xl text-center'>Palmarès</h1>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-2/3 mx-auto">
                <div onClick={()=>window.open('https://fr.wikipedia.org/wiki/Coupe_de_Tunisie_de_football','_blank')} class="card bg-red-600 m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                  <div class="m-3">
                    <h2 class="text-lg mb-2 text-white font-semibold">Coupe de Tunisie (3)</h2>
                  <p class="font-light font-mono text-sm text-white hover:text-gray-900 transition-all duration-200">
                    Vainqueur : 1993, 2010, 2023
                  </p>
                  <img src={require("../assets/images/coupe-de-tunisie-trophée.jpg")} alt="" className='mt-4 rounded-lg w-full h-52'/>
                  </div>
                </div>
                <div onClick={()=>window.open('https://fr.wikipedia.org/wiki/Supercoupe_de_Tunisie_de_football','_blank')} class="card bg-red-600 m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                  <div class="m-3">
                    <h2 class="text-lg mb-2 text-white font-semibold">Supercoupe de Tunisie (1)</h2>
                  <p class="font-light font-mono text-sm text-white hover:text-gray-900 transition-all duration-200">
                    Vainqueur : 1995
                    Finaliste : 1995, 1998
                  </p>
                  <img src={require("../assets/images/supercoupe-tunisie.jpg")} alt="" className='mt-4 rounded-lg w-full h-52'/>
                  </div>
                </div>
                
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-2/3 mx-auto">
                <div onClick={()=>window.open('https://fr.wikipedia.org/wiki/Coupe_de_la_Ligue_tunisienne_de_football','_blank')} class="card bg-red-600 m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                  <div class="m-3">
                    <h2 class="text-lg mb-2 text-white font-semibold">Coupe de la Ligue tunisienne</h2>
                  <p class="font-light font-mono text-sm text-white hover:text-gray-900 transition-all duration-200">
                    Finaliste : 2003, 2004
                  </p>
                  <img src={require("../assets/images/Coupe-de-Tunisie.jpg")} alt="" className='mt-4 rounded-lg w-full h-52'/>
                  </div>
                </div>
                <div onClick={()=>window.open('https://fr.wikipedia.org/wiki/Championnat_de_Tunisie_de_football','_blank')} class="card bg-red-600 m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                  <div class="m-3">
                    <h2 class="text-lg mb-2 text-white font-semibold">Championnat de Tunisie D2 (3)</h2>
                  <p class="font-light font-mono text-sm text-white hover:text-gray-900 transition-all duration-200">
                    Champion : 1985, 2006, 2020
                  </p>
                  <img src={require("../assets/images/download.jpg")} alt="" className='mt-4 rounded-lg w-full h-52'/>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-red-600 to-white">
                        <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-bold tracking-tight text-white"> Coupe de Tunisie (3) : <br /> <span className='font-semibold'> Vainqueur : 1993, 2010, 2023</span> </h2>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-6"></div>
                  <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FOfficielOB%2Fvideos%2F839147807568271%2F&show_text=false&width=560&t=0" 
                    width="560" height="314" style={{border:"none",overflow:"hidden"}} onScroll={false} 
                    frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"
                    className='w-full'
                    >

                  </iframe>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src={require("../assets/images/coupe-tunisie.jpg")}
                      alt="coupe-tunisie"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-bl from-red-600 to-white">
                        <RocketLaunchIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-bold tracking-tight text-white">
                      Finaliste : 1995, 1998 <br />
                      Supercoupe de Tunisie (1) :
                      <span className='font-semibold'>Vainqueur : 1995</span>
                      </h2>

                    </div>
                  </div>
                  <img src={require("../assets/images/historiqueimg.jpg")} alt="equipe" />
                </div>
                <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                  <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                      src={require("../assets/images/supercoupe-tunisie.jpg")}
                      alt="supercoupe"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <div className="lg:mx-auto lg:max-w-7xl flex flex-col justify-center items-center text-center lg:gap-24 lg:px-8">
                <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-bl from-red-600 to-white">
                        <RocketLaunchIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-bold tracking-tight text-white">
                      Coupe de la Ligue tunisienne : <br />
                     <span className='font-semibold'>Finaliste : 2003, 2004</span>  <br />
                      Championnat de Tunisie D2 (3) : <br />
                      <span className='font-semibold'>Champion : 1985, 2006, 2020</span>
                      </h2>

                    </div>
                  </div>
                </div>
                <div className="mt-8 sm:mt-12 lg:mt-0">
                  <div className=" lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                      src={require("../assets/images/supercoupe-tunisie.jpg")}
                      alt="supercoupe"
                    />
                  </div>
                </div>
              </div> 
            </div>*/}
          </div>
          <div id='perso' className='container mx-auto bg-white bg-opacity-70 rounded-lg max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 py-4'> 
            <h1 className='text-4xl font-bold tracking-tight text-black sm:text-5xl text-center mb-4'>Personnalités</h1>
            <Perso/>
          </div>
          {/* <Perso/> */}
          {/* Feature section with grid */}
          {/* <div className="relative py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-lg font-semibold text-cyan-600">Plan, Travel and have fun faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to choose to travel with us
              </p>
              <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                We are TOP 1 Travel agency by the agreement of Ministry Of Tourisme.
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
                              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                          <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

           Testimonial section 
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
              <div className="relative lg:-my-8">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img
                      className="object-cover lg:h-full lg:w-full"
                      src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                  <blockquote>
                    <div>
                      <svg
                        className="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-6 text-2xl font-medium text-white">
                      We would recommend AnasBooking and will be using them again in the future. <br />
                      Anas and his team gave us excellent service
                      and have an amazing time.
                      </p>
                    </div>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-white">William Tudor</p>
                      <p className="text-base font-medium text-cyan-100">A Client Feedback</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

           Blog section 
          <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
            <div className="relative">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-lg font-semibold text-cyan-600">Hotels</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Some of prefered hotels</p>
                
              </div>
              <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
                {blogPosts.map((post) => (
                  <Link to={`/PreferedHotels/${post.id}`} key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-sm hover:shadow-lg">
                    <div className="flex-shrink-0">
                      <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-cyan-600">
                          <span className="hover:underline">
                            {post.category.name}
                          </span>
                        </p>
                        <div className="mt-2 block">
                          <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                          <p className="mt-3 text-base text-gray-500">{post.preview}</p>
                        </div>
                      </div>
                      
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

           CTA Section 
          <div className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                alt=""
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
              />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-lg font-semibold text-gray-300">Award winning support</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</p>
                <p className="mt-3 text-lg text-gray-300">
                  Helping us improving our website is grateful, if you got time you can send your feedback via mail boussehminea@gmail.com 
                  and we will reply you . <br /> Thanks in advance.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="mailto:boussehminea@gmail.com"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Visit the help center
                      <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </main>
        <Footer/>
      </div>
    </div>
  )
}
