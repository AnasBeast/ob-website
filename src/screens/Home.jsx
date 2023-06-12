
import {

  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/20/solid'
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {useSelector} from "react-redux"
import NavBar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


const features = [
  {
    name: 'Plan Ahead',
    description: 'Choosing us will help you get the best plan for your travel.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Everything Explained',
    description: 'You don\'t need to worry about your travel since we provide you with all necessary informations.',
    icon: LockClosedIcon,
  },
  {
    name: 'Make a budget',
    description: 'Traveling with us will help you making your budget so you don\'t need to worry about your pocket money.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Assistance with travel insurance',
    description: 'As a travel agency, we\'re aware of your health that\'s why we provide you with travel insurance in any case.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Low fare traveling',
    description:
      'With us, you can travel with low fare so you don\'t need to worry about flight fares.',
    icon: CogIcon,
  },
  {
    name: 'Easy to reserve',
    description: 'You can stay updated by subscribing to our website then reserve/cancel at anytime.',
    icon: PaperAirplaneIcon,
  },
]


export default function Home() {
  document.title = "AnasBooking | Home"
  const blogPosts = useSelector(state => state.PreferedHotels)

  return (
    <div >
      <div className="relative overflow-hidden">
        <NavBar/>
        <main>
        <div className="relative">
          <div className="mx-auto max-w-5xl sm:px-6 lg:px-8 pt-4">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://sport.tunisienumerique.com/wp-content/uploads/2020/06/ob-%C3%A9quipe-1280x720.jpg"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-gray-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Olympique de beja</span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-red-200 sm:max-w-3xl">
                  Website non officiel de l'équipe de football de beja.
                </p>

              </div>
            </div>
          </div>
        </div>

          {/* Feature section with screenshot */}
          <div className="relative py-16 sm:py-24 lg:py-32">
            <div className="mx-auto bg-white bg-opacity-70 rounded-lg max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <div>
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
                <br /> <br />
                L'équipe accède en division nationale à l'issue de la saison 1984-1985 et s'y installe durant 21 ans. Elle connaît la rétrogradation au terme de la saison 2004-2005, après que la Fédération tunisienne de football a enlevé trois points après un match contre l'Étoile olympique La Goulette Kram. Après la saison 2006-2007, elle retourne en division nationale. En 1993, le club remporte sa première coupe de Tunisie face à l'Avenir sportif de La Marsa, avec des joueurs comme Haykel Guezmir (gardien), Karim Rihani, Béchir Homri, Khaled Jmai, Nabil Bechaouech, Aziz Dridi, Said Kouki, Maher Sdiri, Nabil Kouki, Hédi Mokrani et Zied Lyouzbachi. En 1995, après la finale de la coupe de Tunisie perdue contre le Club sportif sfaxien (2-1), l'Olympique de Béja remporte la Supercoupe de Tunisie de football contre la même équipe.
                <br /> <br />
                En 1999, elle participe pour la première fois à la coupe arabe des clubs champions en Égypte ; un match joué contre l'équipe d'Al Ahly au Caire (1-1) marque la mémoire des supporters béjaois. En 2010, le club prend sa revanche de la finale de 1995, en remportant grâce à un but de Mehdi Harb la coupe de Tunisie face au Club sportif sfaxien.
                <br /> <br />
                En 2005, après vingt ans parmi l'élite, le club subit sa première rétrogradation en Ligue II. Il y passe une seule saison et revient en Ligue I puis rétrograde à nouveau en 2014 avant de retrouver sa place en Ligue I à l'issue de la saison 2015-2016. Le club n’arrive pas à garder sa place parmi les élites en multipliant les descentes en Ligue II.
                </p>
              </div>
            </div>
          </div>

          {/* Feature section with grid */}
          <div className="relative py-16 sm:py-24 lg:py-32">
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

          {/* Testimonial section */}
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

          {/* Blog section */}
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

          {/* CTA Section */}
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
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  )
}
