import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { searchHotels } from '../Redux/Actions/Actions';

const Countries = ({setDestination})=>{    
    return(
        <select name="destionations" id="destionations" className='w-full' onChange={(e)=>setDestination(e.target.value)}>
                <option value="Tunis">Tunis</option>
                <option value="Ariana">Ariana</option>
                <option value="Ben Arous">Ben Arous</option>
                <option value="Mannouba">Mannouba</option>
                <option value="Bizerte">Bizerte</option>
                <option value="Nabeul">Nabeul</option>
                <option value="Béja">Béja</option>
                <option value="Jendouba">Jendouba</option>
                <option value="Zaghouan">Zaghouan</option>
                <option value="Siliana">Siliana</option>
                <option value="Le Kef">Le Kef</option>
                <option value="Sousse">Sousse</option>
                <option value="Monastir">Monastir</option>
                <option value="Mahdia">Mahdia</option>
                <option value="Kasserine">Kasserine</option>
                <option value="Kairouan">Kairouan</option>
                <option value="Gafsa">Gafsa</option>
                <option value="Sfax">Sfax</option>
                <option value="Gabès">Gabès</option>
                <option value="Médenine">Médenine</option>
                <option value="Tozeur">Tozeur</option>
                <option value="Kebili">Kebili</option>
                <option value="Ttataouine">Ttataouine</option>
        </select>
    )
}

const SearchForm = ({setHotels}) => {
  const [hotelName , setHotelName] = useState("")
  const [destination , setDestination] = useState("Tunis")
  const [destinations , setDesinations] = useState([])
  var hotels = useSelector(state => state.SearchHotels)
  const dispatch = useDispatch()
  const handleClick = ()=>{
    hotels = hotels.filter((hotel)=>hotel.address.region.includes(destination) && hotel.name.toLowerCase().includes(hotelName.toLowerCase()))
    setHotels(hotels)
  }
  /* const handleClick = ()=>{
      
    axios.get("https://hotels-com-provider.p.rapidapi.com/v1/destinations/search",{
      params : {query: destination, currency: 'USD', locale: 'en_US'},
      headers: {
        'X-RapidAPI-Key': '0666f94a3fmshbaa10fa2c552f38p117c13jsn6ebcaf93cc75',
        'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
      }
    })
    .then(({data})=>setDesinations(data.suggestions.find((suggest)=>suggest.group=="CITY_GROUP").entities))
    .catch((err)=>console.log("error", err))
  
  }
  useEffect(()=>{
    console.log(destinations)
    destinations.forEach((destination)=>{
      let destination_id = destination.destinationId;
      axios.get("https://hotels-com-provider.p.rapidapi.com/v1/hotels/search",{
        params: {
          checkin_date: '2022-11-26',
          checkout_date: '2022-11-27',
          sort_order: 'STAR_RATING_HIGHEST_FIRST',
          destination_id: destination_id,
          adults_number: '1',
          locale: 'en_US',
          currency: 'USD',
          children_ages: '4,0,15',
          price_min: '10',
          star_rating_ids: '3,4,5',
          accommodation_ids: '20,8,15,5,1',
          price_max: '500',
          page_number: '1',
          theme_ids: '14,27,25',
          amenity_ids: '527,2063',
          guest_rating_min: '4'
        },
        headers: {
          'X-RapidAPI-Key': '0666f94a3fmshbaa10fa2c552f38p117c13jsn6ebcaf93cc75',
          'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
        }
      })
      .then(({data})=>setHotels(data.searchResults.results))
    })
    
  },[destinations])
  useEffect(()=>{
    console.log(hotels)
    hotels!==undefined && hotels.length!==0 ? dispatch(searchHotels(hotels)) : console.log("false");
  },[hotels]) */

  
  return (
   
    <div className="flex items-center justify-center p-12">
    
      <div className="mx-auto w-full max-w-[550px]">
        <form action='#' onSubmit={(e)=>e.preventDefault()}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="fName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Hotel Name
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Hotel Name"
                  className="h-16 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onChange={(e)=>setHotelName(e.target.value)}
                  onKeyPress={(e)=>e.key === 'Enter' ? handleClick : null}

                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="destionations"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Destination
                </label>
                <div className='h-16 w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'>
                <Countries setDestination={setDestination}/>

                </div>
              </div>
            </div>
          </div> 
          <div>
            <button
              type='button'
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchForm