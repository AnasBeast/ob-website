import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {useSelector} from "react-redux"
import NavBar from '../components/Navbar'
import SliderComponent from '../components/Swiper'
import StarRatingComponent from "react-rating-stars-component";
import Footer from '../components/Footer'

export default function Players() {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
  
  document.title = `Olympique de Béja | Joueurs`

  return (
    <section class="bg-black bg-opacity-50 h-full">
      <NavBar/>
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24 bg-black bg-opacity-70">
        <div class="max-w-3xl mx-auto text-center ">
          <h2 class="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Joueurs
          </h2>

          <div class="mt-4">
            <a href="https://www.flashscore.com/team/olympique-beja/Kp7Wrii1/squad/" target='_blank' title=""
              class="inline-flex items-center text-lg font-medium text-white hover:underline">
              Decouvrir nos joueurs
              <svg aria-hidden="true" class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16 ">
          <h2 class="text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white underline">
            Gardiens
          </h2>
          <div class="-my-4 divide-y divide-gray-500">
            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              33  
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/ghanmi-zied/ILtGpIqG/" class="text-white hover:underline">Ghanmi Zied</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              1
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/krir-achraf/f3OwZs4B/" class="text-white hover:underline">Krir Achraf</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>
          </div>

          <h2 class="text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white mt-8 underline">
            Défenseurs
          </h2>
          <div class="-my-4 divide-y divide-gray-500">
            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              4  
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/agbozo-klousseh/C8UjCHNk/" class="text-white hover:underline">Agbozo Klousseh</a>
              </h3>
              <img src={require("../assets/images/togo.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              16
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/ben-mohamed-aziz/zZ56dGFQ/" class="text-white hover:underline">Ben Mohamed Aziz</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              3
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/ben-rajeh-mehrez/E9nvs9uB/" class="text-white hover:underline">Ben Rajeh Mehrez</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              17
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/derbali-rayane/d6h7nvF3/" class="text-white hover:underline">Derbali Rayane</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              14
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/ferjani-najeh/zciBobU9/" class="text-white hover:underline">Ferjani Najeh</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              25
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/kasagga-richard/tUajviPT/" class="text-white hover:underline">Kasagga Richard</a>
              </h3>
              <img src={require("../assets/images/uganda.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>
          </div>

          <h2 class="text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white mt-8 underline">
            Milieux de terrain
          </h2>
          <div class="-my-4 divide-y divide-gray-500">
            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              22  
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/absi-mohamed/t09EtGL8/" class="text-white hover:underline">Absi Mohamed</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              20
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/ba-lamine/AXUIDYRN/" class="text-white hover:underline">Bah Mohamadou</a>
              </h3>
              <img src={require("../assets/images/mali.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              12
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/bouabid-yassine/4QjE2pG2/" class="text-white hover:underline">Bouabid Yassine</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              6
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/chihi-skander/2Vw4mKac/" class="text-white hover:underline">Chihi Skander</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              4
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/coumbassa-ousmane/Wj3lScv2/" class="text-white hover:underline">Coumbassa Ousmane</a>
              </h3>
              <img src={require("../assets/images/guinea.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              8
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/derbali-mohamed-wael/8v7H7O9b/" class="text-white hover:underline">Derbali Mohamed</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              21
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/jerbi-mohamed-amine/dYlnvjLf/" class="text-white hover:underline">Jerbi Mohamed</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              13
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/nalouti-rassem/rw5a8yZE/" class="text-white hover:underline">Nalouti Rassem</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              26
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/sarr-babacar/zPifIIEi/" class="text-white hover:underline">Sarr Babacar</a>
              </h3>
              <img src={require("../assets/images/guinea.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>
          </div>

          <h2 class="text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white mt-8 underline">
            Attaquants
          </h2>
          <div class="-my-4 divide-y divide-gray-500">
            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              19
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/abdelli-souhaib/fNse1HNu/" class="text-white hover:underline">Abdelli Souhaib</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              23
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/chouikh-malek/AcAVR0qE/" class="text-white hover:underline">Chouikh Malek</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
              29
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/saidi-othman/dhOdtc5F/" class="text-white hover:underline">Saidi Othman</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>
          </div>

          <h2 class="text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white mt-8 underline">
            Coach
          </h2>
          <div class="-my-4 divide-y divide-gray-500">
            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p class="w-8 text-lg font-normal text-white sm:text-right shrink-0">
               
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="https://www.flashscore.com/player/khcharem-jamel/ED3iLta7/" class="text-white hover:underline">Khcharem Jamel</a>
              </h3>
              <img src={require("../assets/images/tunisie.png")} alt="" className='h-14 w-auto ml-auto'/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
