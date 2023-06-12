import { EnvelopeIcon, PhoneIcon, CurrencyDollarIcon , HomeModernIcon } from '@heroicons/react/20/solid'
import { useSelector } from 'react-redux'
import NavBar from '../components/Navbar'
import SearchForm from '../components/SearchForm'
import StarRatingComponent from "react-rating-stars-component";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Hotels() {
  document.title = `AnasBooking | Hotels`
  const [hotels , setHotels] = useState(useSelector(state => state.SearchHotels))
  console.log(hotels)
  return (
    <div>
        <NavBar/>
        <div className="font-sans text-black w-full mx-auto bg-white">
           <SearchForm setHotels={setHotels}/>
        </div>
        <div className='mx-auto'>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {hotels.map((hotel) => (
                <li
                key={hotel.id}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow m-4"
                >
                <div className="flex flex-1 flex-col">
                    {hotel.optimizedThumbUrls.srpDesktop!==undefined &&
                    <img className="mx-auto h-36 w-full flex-shrink-0 rounded-t" src={hotel.optimizedThumbUrls.srpDesktop} alt="" />}
                    <h3 className="mt-6 text-sm font-medium text-gray-900">{hotel.name}</h3>
                    <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-sm text-gray-500">{hotel.neighbourhood}</dd>
                    <dt className="sr-only">Role</dt>
                    
                    <dd className="mt-3 mx-auto">
                    <StarRatingComponent
                    starCount={5}
                    size={24}
                    value={hotel.starRating}
                    edit={false}
                    isHalf={true}
                    />
                    </dd>
                    </dl>
                </div>
                <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                        <div
                        
                        className="relative hover:cursor-pointer -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                        >
                        <CurrencyDollarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="ml-3">{hotel.ratePlan.price.current}</span>
                        </div>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                        <Link
                        to={`/Hotel/${hotel.id}`}
                        className="relative hover:cursor-pointer inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                        >
                            
                        <span className="mr-3">Discover</span>
                        <HomeModernIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />

                        </Link>
                    </div>
                    </div>
                </div>
                </li>
            ))}
            </ul>
        </div>
        <Footer/>
    </div>
  )
}
