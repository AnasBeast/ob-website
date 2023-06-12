import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {useSelector} from "react-redux"
import NavBar from '../components/Navbar'
import SliderComponent from '../components/Swiper'
import StarRatingComponent from "react-rating-stars-component";
import Footer from '../components/Footer'

export default function PreferedDestination() {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
  
  const {id} = useParams();
  const blogPosts = useSelector(state => state.PreferedDestinations)
  const [Destination , setDestination] = useState(blogPosts.find((blog)=>blog.id==id))
  console.log(Destination)
  document.title = `AnasBooking | ${Destination.name}`

  return (
    <div className='bg-white'>
      <div className="relative overflow-hidden">
        <NavBar/>

        <main className="py-10">
          {/* Page header */}
          <div className="mx-auto max-w-3xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
            <div className="flex flex-col-reverse items-center gap-4">
              <div className="w-full">
                <div className="relative">
                  
                  <SliderComponent images={Destination.imageUrl}/>
                  <span className="absolute inset-0 rounded shadow-inner" aria-hidden="true" />
                </div>
              </div>
              <div className='self-start'>
                <h1 className="text-2xl font-bold text-gray-900">{Destination.name}</h1>
                <p className="text-sm font-medium text-gray-500">

                  <a href="#" className="text-gray-900 hover:underline">
                    {Destination.country}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2 lg:col-start-1 px-4">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2 id="applicant-information-title" className="text-lg font-medium leading-6 text-gray-900">
                      Destination Information
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Destination details and informations.</p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">Details</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {Destination.note}
                        </dd>
                      </div>
                      
                    </dl>
                  </div>
                </div>
              </section>

              {/* Comments*/}
              <section aria-labelledby="notes-title">
                <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
                  <div className="divide-y divide-gray-200">
                    <div className="px-4 py-5 sm:px-6">
                      <h2 id="notes-title" className="text-lg font-medium text-gray-900">
                        Video
                      </h2>
                    </div>
                    <div className="px-4 py-6 sm:px-6">
                      <iframe className='mx-auto' width="100%" height="430" src={`https://www.youtube.com/embed/${Destination.video}`} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                     
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section aria-labelledby="timeline-title" className="lg:col-span-1 lg:col-start-3 px-4">
              <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                  Rating
                </h2>
                {/* Activity Feed */}
                <div className="mt-6 flow-root">
                  <StarRatingComponent
                    starCount={5}
                    size={24}
                    value={Destination.rating}
                    edit={false}
                    isHalf={true}
                    />
                </div>
              </div>
            </section>
          </div>
          <div className='mx-auto mt-8 max-w-3xl sm:px-6 lg:max-w-7xl w-full px-4'>
            <Link
            to={"/"}
            type="button"
            className="w-full text-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Back To Homepage
            </Link>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  )
}
