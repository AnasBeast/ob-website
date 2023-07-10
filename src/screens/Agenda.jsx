import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {useSelector} from "react-redux"
import NavBar from '../components/Navbar'
import SliderComponent from '../components/Swiper'
import StarRatingComponent from "react-rating-stars-component";
import Footer from '../components/Footer'

export default function Agenda() {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
  
  document.title = `Olympique de Béja | Agenda`

  return (
    <section class="bg-black bg-opacity-50 h-full">
      <NavBar/>
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Agenda
          </h2>

          <div class="mt-4">
            <a href="https://www.flashscore.com/team/olympique-beja/Kp7Wrii1/fixtures/#fsbody" title=""
              class="inline-flex items-center text-lg font-medium text-white hover:underline">
              Decouvrir nos prochaines parties
              <svg aria-hidden="true" class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <div class="-my-4 divide-y divide-gray-900">
            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-36 text-lg font-normal text-white sm:text-right shrink-0">
                24.06.2023 16:30
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/match/hbXl7GbQ/#/match-summary" class="text-white hover:underline">US Tataouine</a>
              </h3>
              <img src={require("../assets/images/tatouine.png")} alt="" className='h-20 w-20 ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-36 text-lg font-normal text-white sm:text-right shrink-0">
              26.06.2023 16:30
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/match/8WYLaYj0/#/match-summary" class="text-white hover:underline">Monastir</a>
              </h3>
              <img src={require("../assets/images/monastir.png")} alt="" className='h-20 w-20 ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-36 text-lg font-normal text-white sm:text-right shrink-0 line-through">
                29.06.2023 13:30
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/match/AeJKKZSP/#/match-summary" class="text-white hover:underline">Etoile Sahel</a>
              </h3>
              <img src={require("../assets/images/etoile-sahel.png")} alt="" className='h-20 w-20 ml-auto'/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
