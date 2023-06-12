import { ADDDESTINATION, SEARCHHOTELS } from "../Constants/Action_type";


let initialstate = {
    PreferedHotels : [
        {
            id: 1,
            title: 'El Mouradi Gammarth',
            href: '#',
            category: { name: 'Tunisia-Gammarth', href: '#' },
            imageUrl:
              'https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/54e3d373.jpg?impolicy=resizecrop&rw=1200&ra=fit',
            images : [
            'https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/54e3d373.jpg?impolicy=resizecrop&rw=1200&ra=fit',
            "https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/d1b12f5f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/3d8e9f54.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/01cb1007.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/4c134ad4.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/b4f6c278.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/44a1cbe5.jpg?impolicy=resizecrop&rw=1200&ra=fit"
            ],
            preview:
              'El Mouradi Gammarth offers a private beach where you can enjoy the shade from a beach umbrella or relax on a sunlounger. The outdoor pool and indoor pool provide fun for everyone, while guests in the mood for pampering can visit the spa to indulge in massages, body wraps and aromatherapy. Les Rosiers, one of 2 restaurants, serves breakfast, lunch and dinner. Other features of this luxurious hotel include a free kid\'s club, a poolside bar and a health club. The pool and breakfast get good marks from fellow travellers.', 
            stars : 5,
            notes:[
                {
                    name: "Alan Walker",
                    feedback : "Great central location I stayed at Hotel Arthur for a night, really enjoyed its location in the city centre where everything is within walking distance. The staff was very helpful, breakfast really delicious, and the room nice. I appreciated the luggage room option as well.",
                    review : 5
                },
                {
                    name: "Kamel Romdhani",
                    feedback : "Nice jazz-evening in Hotel Arthur's restaurant Room was just for my needs for this type of \"staycation. Suprisingly fun jazz evening with good tapas table and nice wines. Hotels location is perfect and breakfast really ok with warm dishes and good coffee. What else do you need?",
                    review : 4.5
                    
                },
                {
                    name: "Adem Saidi",
                    feedback : "The hotel room was clean, nice and spacious. Breakfast offered with a wide variety of food. The staff were friendly and helpful. The location is just perfect for a walk around the city centre.",
                    review : 5
                }
            ]
        },
        {
            id: 2,
            title: 'La Badira',
            href: '#',
            category: { name: 'Tunisia-Hammamet', href: '#' },
            imageUrl:
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/42192660.jpg?k=40f891f673734e72c33716c940f28911439d312bc3357c03e59dfee65a2d28e7&o=&hp=1',
            images:[
                'https://cf.bstatic.com/xdata/images/hotel/max1024x768/42192660.jpg?k=40f891f673734e72c33716c940f28911439d312bc3357c03e59dfee65a2d28e7&o=&hp=1',
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/75881056.jpg?k=5ae83fc38270b09384307c99fd41d7e497b79c73e54d7c2538f011d18c011d3d&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37141586.jpg?k=16a46f099c68e02205afb63eae59a5889198334099c5b85a1a63e030fe5596d7&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223956241.jpg?k=5db1570e99e84084774c30d55be284d67e20443fa6137984ee2d534c1b941da0&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/42192678.jpg?k=b0a73450e5abd472534e0471457d1bffb1749da1d596ebee7771376eb9d8eaca&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223955877.jpg?k=5303c473558fb51994479f66ff026e4311f1f97bef246ec32b724aeb8ffd9d90&o=&hp=1"
            ],
             preview:
              'You\'re eligible for a Genius discount at La Badira - Adult Only! To save at this property, all you have to do is to reserve.Offering 3 outdoor pools and a private beach access, La Badira - Adult Only is located in Hammamet. Free WiFi access is available.Each room here will provide you with a TV, satellite channels, air conditioning and a terrace. They include a minibar and a safety deposit box. Private bathroom also comes with bathrobes. You can enjoy sea view and pool view from the room from the balcony.A buffet breakfast is served each morning at Zahilah restaurant. Guests can enjoy local cuisine at the Adra restaurant.',
            stars: 4,
            notes:[
                {
                    name: "Mohamed",
                    feedback : "One of the best hotels in Tunisia. Thanks for all the staff for the warm reception!",
                    review : 4
                },
                {
                    name: "Mouez",
                    feedback : "The sea was amazing. The team was quite welcoming.",
                    review : 4.5
                },
                
            ]
        },
          {
            id: 3,
            title: 'Hasdrubal Prestige',
            href: '#',
            category: { name: 'Tunisia-Djerba', href: '#' },
            imageUrl:
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/239908167.jpg?k=c85e455dd96e75283994d69027c234f03dcec2bfa8ac928f9109ca253902cc30&o=&hp=1',
            images:[
                'https://cf.bstatic.com/xdata/images/hotel/max1024x768/42192660.jpg?k=40f891f673734e72c33716c940f28911439d312bc3357c03e59dfee65a2d28e7&o=&hp=1',
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/75881056.jpg?k=5ae83fc38270b09384307c99fd41d7e497b79c73e54d7c2538f011d18c011d3d&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37141586.jpg?k=16a46f099c68e02205afb63eae59a5889198334099c5b85a1a63e030fe5596d7&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223956241.jpg?k=5db1570e99e84084774c30d55be284d67e20443fa6137984ee2d534c1b941da0&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/42192678.jpg?k=b0a73450e5abd472534e0471457d1bffb1749da1d596ebee7771376eb9d8eaca&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223955877.jpg?k=5303c473558fb51994479f66ff026e4311f1f97bef246ec32b724aeb8ffd9d90&o=&hp=1"
            ],
            preview:
              'You\'re eligible for a Genius discount at Hasdrubal Prestige Djerba! To save at this property, all you have to do is reserve. Situated on the Sidi Mahrez beach in Djerba, The Hasdrubal Prestige Thalassa & Spa Djerba offers luxurious 5-star accommodation, a spa and free Wi-Fi. Rooms at the Hasdrubal Prestige are air-conditioned and have flat-screen TV. They also include a bedroom and a lounge that opens out onto a terrace or balcony.',
            stars: 4,
            notes:[
                {
                    name: "Walid",
                    feedback : "everything was really great superb suite superb staff superb beach and swimming pool",
                    review : 4.5
                },
                {
                    name: "Hichem",
                    feedback : "The building is huge and privacy of residents Also the priotised service provided by the staff from the fiat point of contact.",
                    review: 4
                },
                  
            ]
        },
    ],
    PreferedDestinations : [
        {
            id : 1,
            name : "Dubai",
            imageUrl : ["http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTnavcE0R1cW9vbZSJU9A_92W41dYEqmnQRVz51osw9lq-dYLXMRz2uqIIL1LrWzvQN"],
            country : "United Arab Emirates",
            note : "Dubai is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai.",
            video : "Ex2iAyaEElQ",
            rating : 5,
        },
        {
            id : 2,
            name : "Mallorca",
            imageUrl : ["https://a.cdn-hotels.com/gdcs/production88/d1205/9bd85b85-3eb0-45b3-8f13-35ab0355dff0.jpg?impolicy=fcrop&w=800&h=533&q=medium"],
            country : "Spain",
            note : "Mallorca (Majorca) is one of Spain's Balearic Islands in the Mediterranean. It's known for beach resorts, sheltered coves, limestone mountains and Roman and Moorish remains.",
            video : "CnrRZAP_OjE",
            rating : 5,
        },
        {
            id : 3,
            name : "Cairo",
            imageUrl : ["https://cdn.britannica.com/46/189746-050-C790AE3F/Skyline-Cairo.jpg"],
            country : "Egypt",
            note : "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts.",
            video : "1Lz0EQ0MGRE",
            rating : 5,
        },
        {
            id : 3.1,
            name : "Rhodes",
            imageUrl : ["https://media.mitsishotels.com/uploads/2020/06/rhodes-lindos-shutterstock-381824248-wxga.jpg"],
            country : "Greece",
            note : "Rhodes, the largest of Greece’s Dodecanese islands, is known for its beach resorts, ancient ruins and remnants of its occupation by the Knights of St. John during the Crusades.",
            video : "9rBvSBUMtPA",
            rating : 5,
        },
        {
            id : 4,
            name : "Tulum",
            imageUrl : ["http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSoCeUlCrwYRTZB3UXaJ_OtIHaWiFpOP8HTPWE9OeCYvTOq22wuJyN4HftmAZMoqzr2"],
            country : "Mexico",
            note : "Tulum is a town on the Caribbean coastline of Mexico’s Yucatán Peninsula. It’s known for its beaches and well-preserved ruins of an ancient Mayan port city.",
            video : "2Zi39YLZMWk",
            rating : 5,
        },
        {
            id : 5,
            name : "Dubrovnik",
            imageUrl : ["http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTbQzH5gEg41XJhOYhrNdGe2csjzY2G1cgXeZN-VFUktcP76vHeE5SOX5t22lBiqTc5"],
            country : "Croatia",
            note : "Dubrovnik is a city in southern Croatia fronting the Adriatic Sea. It's known for its distinctive Old Town, encircled with massive stone walls completed in the 16th century.",
            video : "4tPG4z2HeXg",
            rating : 5,
        },
        {
            id : 6,
            name : "Ibiza",
            imageUrl : ["https://onestep4ward.com/wp-content/uploads/2011/01/Destino-Ibiza-Pacha.jpg"],
            country : "Spain",
            note : "Ibiza is one of the Balearic islands, an archipelago of Spain in the Mediterranean Sea. It's well known for the lively nightlife in Ibiza Town and Sant Antoni, where major European nightclubs have summer outposts.",
            video : "KJAYC7fn8oc",
            rating : 5,
        },
        {
            id : 7,
            name : "Natal",
            imageUrl : ["https://content.r9cdn.net/rimg/dimg/d0/e0/70c053fb-city-18483-177d8507914.jpg?width=1366&height=768&xhint=2185&yhint=1527&crop=true"],
            country : "Brazil",
            note : "Natal is the capital city of the state of Rio Grande do Norte, on Brazil's northeastern tip. It's known for its extensive coastal sand dunes and star-shaped Forte dos Reis Magos, a 16th-century Portuguese fortress at the mouth of the Potengi River.",
            video : "mQ6hFinSBBs",
            rating : 4.5,
        },
        {
            id : 8,
            name : "Arusha",
            imageUrl : ["https://t3.ftcdn.net/jpg/04/94/96/90/360_F_494969068_hRXuOS2Ol1c2VVFjyXwEAb5GYBwEr2Rf.jpg"],
            country : "Tanzania",
            note : "Arusha is a city in East Africa's Tanzania, located at the base of volcanic Mt. Meru. It's a gateway to safari destinations and to Africa's highest peak, 5,895m Mt. Kilimanjaro, lying some 100 kilometers northeast.",
            video : "BHJwo8JrRuI",
            rating : 4,
        }
    ],
    SearchHotels: [
        {
            "id": 568362,
            "name": "The Orangers Garden Villas & Bungalows",
            "details" : "Offering a seasonal outdoor pool and a private beach area, The Orangers Beach Resort and Bungalows Ultra All Inclusive is situated in Hammamet.\n The hotel has an indoor pool, a barbecue, children's playground and sun terrace.\n Free WiFi is featured throughout the property and free private parking is available on site.\n Guests can enjoy a meal at the restaurant or a drink at the bar.\n Each room at this hotel is air conditioned and is equipped with a flat-screen TV.\n Some rooms include a seating area where you can relax.\n Enjoy a cup of tea while looking out at the sea or garden.\n The rooms are equipped with a private bathroom equipped with a bath.\n For your comfort, you will find bathrobes and slippers.\n There is a 24-hour front desk, babysitting service, room service and gift shop at the property.\n You can engage in various activities, such as golfing and horse riding.\n Pupput Roman Site is 1.1 km from The Orangers Beach Resort and Bungalows Ultra All Inclusive, while George Sebastian Villa is 1.2 km from the property.\n Enfidha-Hammamet International Airport is 38 km away.\n Couples particularly like the location — they rated it 9.0 for a two-person trip.",
            "starRating": 5,
            "urls": {},
            "address": {
                "streetAddress": "RUE DE NEVERS,BP 7",
                "extendedAddress": "",
                "locality": "Hammamet",
                "postalCode": "8050",
                "region": "Nabeul",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.3641754056534!2d10.57732235120931!3d36.40038339770385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd61872aa5de09%3A0x2721024924f90350!2sThe%20Orangers%20Garden%20Villas%20%26%20Bungalows!5e0!3m2!1sen!2stn!4v1667253264847!5m2!1sen!2stn",
                "obfuscate": false
            },
            "welcomeRewards": {
                "collect": true
            },
            "guestReviews": {
                "unformattedRating": 4.4,
                "rating": "4.4",
                "total": 11,
                "scale": 5,
                "badge": "fabulous",
                "badgeText": "Fabulous"
            },
            "landmarks": [
                {
                    "label": "Tunis (TUN-Tunis - Carthage Intl.)",
                    "distance": "37 miles"
                }
            ],
            "geoBullets": [],
            "ratePlan": {
                "price": {
                    "current": "$446",
                    "exactCurrent": 445.92,
                    "old": "$495",
                    "fullyBundledPricePerStay": "total $479 for 1&nbsp;room, 4&nbsp;guests"
                },
                "features": {
                    "freeCancellation": true,
                    "paymentPreference": false,
                    "noCCRequired": false
                },
                "type": "EC"
            },
            "neighbourhood": "Hammamet",
            "deals": {
                "specialDeal": {
                    "dealText": "Mobile exclusive: save 10%"
                },
                "priceReasoning": "DRR-444"
            },
            "messaging": {
                "scarcity": "2 left on our app"
            },
            "badging": {},
            "pimmsAttributes": "DoubleStamps|Privatebeachv1|D13|TESCO",
            "coordinate": {
                "lat": 36.400821,
                "lon": 10.577529
            },
            "roomsLeft": 2,
            "providerType": "LOCAL",
            "supplierHotelId": 13276715,
            "isAlternative": false,
            "optimizedThumbUrls": {
                "srpDesktop": ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/256531166.jpg?k=de3cdd92f2a24c095f1ba761e590d6037d51dce6236b947b48461dd1ef495af4&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/256531152.jpg?k=c91010e56181bd2ac14cd04fde3e9a0226b46a1430a5e2b583106cb55d2acfa1&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/256480313.jpg?k=0a5ff4bd29e25fb7fa82c3a642df87704ba69978ea4ed26cbcfaa73404ed2d6d&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/256532547.jpg?k=cb367bc7a09ee630c01138f2fa2b720b1732029be414a1f1284b0486b7566103&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/256531158.jpg?k=8799adc276fde600ffa892b9626310137f6489729523ac91120184c5ac715eb6&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/153915081.jpg?k=f96fc615d776ee9c9d50974d14e7ec9f29a621cc2ab1bac4ec24cd2c554bba10&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/256529763.jpg?k=b60ba5a56141b209a728ff655e4f9cd15e7a4fded1984804a0785a3b508619ca&o=&hp=1"]
            },
            "reviews" :[
                {
                    name : "Nesrine",
                    note : "“The garden and the sea were absolutely fantastic. the food was also very good : both in quality and in variety”",
                    review : 5
                },
                {
                    name : "Abduallatif",
                    note : "“The breakfast selection and variety of food was great. Service at the beach with the snacks available and drinks was also great.”",
                    review : 5
                },
                {
                    name : "Ahmed",
                    note : "“Everything thing was wonderful thx to all the staff”",
                    review : 5
                }
            ]
        },
        {
            "id": 92476448,
            "name": "Iberostar Selection Kuriat Palace",
            "details" : "Facing the beachfront in Monastir, Iberostar Selection Kuriat Palace features a private beach area. Among the various facilities of this property are an outdoor swimming pool and a spa and wellness centre. The property has a hot tub, entertainment staff and a 24-hour front desk. At the hotel, the rooms include a desk and a flat-screen TV. Rooms are complete with a private bathroom fitted with a shower, while certain rooms at Iberostar Selection Kuriat Palace also provide guests with a seating area. All units include a wardrobe. A buffet breakfast is available each morning at the property. There is an in-house restaurant, which serves a variety of International dishes and also offers gluten-free options. The property has a sauna. Sousse is 15 km from the accommodation, while Port El Kantaoui is 24 km from the property. The nearest airport is Monastir Habib Bourguiba International Airport, 600 m from Iberostar Selection Kuriat Palace. Couples particularly like the location — they rated it 8.8 for a two-person trip.",
            "starRating": 5,
            "urls": {},
            "address": {
                "streetAddress": "Zone Touristique Skanes",
                "extendedAddress": "",
                "locality": "Monastir",
                "postalCode": "5060",
                "region": "Monastir",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12949.61992149443!2d10.7558064!3d35.7654271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020dee7acb5b4d%3A0xad544cfc7ea1a206!2sIberostar%20Selection%20Kuriat%20Palace!5e0!3m2!1sen!2stn!4v1667252994316!5m2!1sen!2stn",
                "obfuscate": false
            },
            "welcomeRewards": {
                "collect": true
            },
            "guestReviews": {
                "unformattedRating": 4.2,
                "rating": "4.2",
                "total": 121,
                "scale": 5,
                "badge": "very-good",
                "badgeText": "Very Good"
            },
            "landmarks": [
                {
                    "label": "Tunis (TUN-Tunis - Carthage Intl.)",
                    "distance": "81 miles"
                }
            ],
            "geoBullets": [],
            "ratePlan": {
                "price": {
                    "current": "$132",
                    "exactCurrent": 132.45,
                    "old": "$147",
                    "fullyBundledPricePerStay": "total $144 for 1&nbsp;room, 4&nbsp;guests"
                },
                "features": {
                    "freeCancellation": false,
                    "paymentPreference": false,
                    "noCCRequired": false
                },
                "type": "EC"
            },
            "neighbourhood": "Monastir",
            "deals": {
                "secretPrice": {
                    "dealText": "Save more with Secret Prices"
                },
                "priceReasoning": "DRR-443"
            },
            "messaging": {},
            "badging": {},
            "pimmsAttributes": "Oceanviewv1|DoubleStamps|Privatebeachv1|D13|HRW|TESCO",
            "coordinate": {
                "lat": 35.765368,
                "lon": 10.755779
            },
            "providerType": "LOCAL",
            "supplierHotelId": 2858639,
            "isAlternative": false,
            "optimizedThumbUrls": {
                "srpDesktop": ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/221768875.jpg?k=60bdd96a85faf2bacb98e95072f56b9d4fcecaac922eddde074e1d2c7fd808c3&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/206043974.jpg?k=abfaf63b3bc5d4788029ebc00f56b87c612b00eaa5b5d37f54af4e73aa989c00&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/333547862.jpg?k=80b2bec6d6f0d0378cced26436ddcfa177b188b25c742462ea8b27facca4f84f&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/221769074.jpg?k=6f72781c5abbc5e31ca758177cab7ef9ecf99294c508c68244e5b382840faf41&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/221767594.jpg?k=b665dac3e52b7f9e7d72a418307e47defd572ffa82d23146c727d0ea49ecb52b&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/221771607.jpg?k=cba282e1b9e08bcc74cede0ff2c70dccc97a92eed5a5cca7b892bcd8dc4b781b&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/206044002.jpg?k=f6f5c9819b0467c7814e8677f64361da4ce65cd34f6ca82d1f8c6e195251f838&o=&hp=1"]
            },
            "reviews" : [
                {
                    name : "Veronika",
                    note : "“great location, amazing staff, delicious food, sea view. kids pool with water slides, great evening entertainment.”",
                    review : 5
                },
                {
                    name : "Andrew",
                    note : "“All very good, cannot complain at all. Lovely holiday”",
                    review : 5
                },
                {
                    name : "Nadia",
                    note : "“The hotel is very well located. The beachwas amazing: the water is crystal clear and the sand is silky. The stuff was extremely nice and always ready to help.”",
                    review : 5
                },
                {
                    name : "Megan",
                    note : "“Super staff-super friendly the entire time and even got us some food when we got in really late. Very positive.”",
                    review : 5
                },
                {
                    name : "Souhaiel",
                    note : "“Great stay with family, very friendly staff, amazing international food !! Beautiful beach with mesmerizing sunsets!!! 😍”",
                    review : 5
                }
            ]
        },
        {
            "id": 350816,
            "name": "Iberostar Selection Royal El Mansour",
            "details": "Iberostar Selection Royal El Mansour is located in Mahdia near the beaches of the Mediterranean Sea. It has an outdoor swimming pool, a Thalassotherapy centre and 5-star rooms and suites. Each guest room at the Iberostar Selection Royal El Mansour is air-conditioned and has satellite TV, internet access and a balcony. Guests of the Iberostar Selection Royal El Mansour can enjoy grilled meats and international cuisine in the hotel restaurant and snacks at the poolside bar. There is also a disco and a Tunisian tea room. Children are invited to join the children’s club and adults can relax in the spa. The Iberostar Selection Royal El Mansour also offers a range of outdoor activities including tennis, golf and numerous water sports. Parking area is available onsite. Couples particularly like the location — they rated it 8.7 for a two-person trip.",
            "starRating": 5,
            "details" : "",
            "urls": {},
            "address": {
                "streetAddress": "Route de la Corniche",
                "extendedAddress": "",
                "locality": "Mahdia",
                "postalCode": "5111",
                "region": "Mahdia",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.66323479534!2d11.047502251192709!3d35.51260454671119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130223ea60513759%3A0x7e21f589496e6b8f!2sIberostar%20Selection%20Royal%20El%20Mansour!5e0!3m2!1sen!2stn!4v1667253316718!5m2!1sen!2stn",
                "obfuscate": false
            },
            "welcomeRewards": {
                "collect": true
            },
            "guestReviews": {
                "unformattedRating": 4.2,
                "rating": "4.2",
                "total": 210,
                "scale": 5,
                "badge": "very-good",
                "badgeText": "Very Good"
            },
            "landmarks": [
                {
                    "label": "Tunis (TUN-Tunis - Carthage Intl.)",
                    "distance": "100 miles"
                }
            ],
            "geoBullets": [],
            "ratePlan": {
                "price": {
                    "current": "$112",
                    "exactCurrent": 112.38,
                    "old": "$125",
                    "fullyBundledPricePerStay": "total $122 for 1&nbsp;room, 4&nbsp;guests"
                },
                "features": {
                    "freeCancellation": false,
                    "paymentPreference": false,
                    "noCCRequired": false
                },
                "type": "EC"
            },
            "neighbourhood": "Mahdia",
            "deals": {
                "secretPrice": {
                    "dealText": "Save more with Secret Prices"
                },
                "priceReasoning": "DRR-443"
            },
            "messaging": {},
            "badging": {
                "hotelBadge": {
                    "type": "vipBasic",
                    "label": "VIP"
                }
            },
            "pimmsAttributes": "Oceanviewv1|DoubleStamps|D13|OnBeachPropertyv2|TESCO",
            "coordinate": {
                "lat": 35.512295,
                "lon": 11.049214
            },
            "providerType": "LOCAL",
            "supplierHotelId": 3697070,
            "isAlternative": false,
            "optimizedThumbUrls": {
                "srpDesktop": ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/27609644.jpg?k=23dc2a8c597a24238ce8da1ba8501e4aeb6adeead994edef2df506adf0f4271a&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/28222423.jpg?k=d9d29d5d5969c003e0301d41acdb6a31166b159eadf6766de463c423109ed86c&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/27609654.jpg?k=a5011c1cffbf32b89b4513669adc6ca173564f9443fbd7017962356cb9033619&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/27609612.jpg?k=839ada9b6c6ef500d2fcd66920d0d76bdef0fecf82bcf1765c80c7a57ee8d871&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/7354422.jpg?k=b7bcd04167c324c268acaff27652673c5852a509d22437cebed8554a64b613e8&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/317166181.jpg?k=3a7b70794bd3e7f325d384e99c860987899cab4ca7b39f3f78916baf788736ab&o=&hp=1"]
            },
            "reviews" : [
                {
                    name : "Faicel",
                    note : "“Everything. Excellent staff. Excellent services. Excellent food. Excellent environment. If you want to feel like a star, I gladly recommend spending your holiday at Iberostar. You will not regret!”",
                    review : 5
                },
                {
                    name : "Bilel",
                    note : "“The interaction with all the staff was great. They were very helpful and always available to help with anything. I really appreciate that and sometimes make uncomfortable to be so well served.”",
                    review : 5
                },
                {
                    name : "Cinzia",
                    note : "“beautiful hall and swimming pools. very good spa with professional staff. Very good breakfast”",
                    review : 5
                }
            ]
        },
        {
            "id": 435770,
            "name": "Radisson Blu Resort & Thalasso, Hammamet",
            "details" : "Located in Hammamet, Radisson Blu Resort & Thalasso Hammamet features a swimming pool and a garden. The bar offers a terrace with seating areas decorated in oriental style and views of the bay. Free Wi-Fi is available in the rooms equipped with a TV and satellite channels. The rooms’ balcony provides views of the sea, the pool or the garden. The bathroom features tiled floor and slippers. The hotel’s restaurant serves typical Tunisian and international food. Every morning, a continental breakfast is provided that can also be enjoyed in the comfort of guest rooms. Sauna, hot tub or Turkish steam bath are available on site at an extra cost. The hotel is located just 3 km from Hammamet Kasbah and the city centre and Train Station. Grombalia is less than 3 km away. Couples particularly like the location — they rated it 8.4 for a two-person trip.",
            "starRating": 5,
            "urls": {},
            "address": {
                "streetAddress": "Avenue Hedi Nouira",
                "extendedAddress": "",
                "locality": "Hammamet",
                "postalCode": "8050",
                "region": "Nabeul",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.283517092334!2d10.634291967336212!3d36.40233523363677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029e0d8e674ac7%3A0x3f5e4d0655c4cb69!2sRadisson%20Blu%20Resort%20%26%20Thalasso%2C%20Hammamet!5e0!3m2!1sen!2stn!4v1667253351363!5m2!1sen!2stn",
                "obfuscate": false
            },
            "welcomeRewards": {
                "collect": true
            },
            "guestReviews": {
                "unformattedRating": 4.1,
                "rating": "4.1",
                "total": 607,
                "scale": 5,
                "badge": "very-good",
                "badgeText": "Very Good"
            },
            "landmarks": [
                {
                    "label": "Tunis (TUN-Tunis - Carthage Intl.)",
                    "distance": "39 miles"
                }
            ],
            "geoBullets": [],
            "ratePlan": {
                "price": {
                    "current": "$152",
                    "exactCurrent": 152.14,
                    "fullyBundledPricePerStay": "total $165 for 1&nbsp;room, 4&nbsp;guests"
                },
                "features": {
                    "freeCancellation": false,
                    "paymentPreference": false,
                    "noCCRequired": false
                },
                "type": "EC"
            },
            "neighbourhood": "Hammamet",
            "deals": {},
            "messaging": {},
            "badging": {
                "hotelBadge": {
                    "type": "vipBasic",
                    "label": "VIP"
                }
            },
            "pimmsAttributes": "Oceanviewv1|DoubleStamps|D13|showFrequentlyAskedQuestionsenUS|OnBeachPropertyv2|TESCO",
            "coordinate": {
                "lat": 36.402689,
                "lon": 10.639512
            },
            "providerType": "LOCAL",
            "supplierHotelId": 6318064,
            "isAlternative": false,
            "optimizedThumbUrls": {
                "srpDesktop": ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/373130581.jpg?k=f1df5800440566a2162f7c9fa3fc40b7b246d7430ad404547d21760e73689c1b&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/373646831.jpg?k=df874356992bee519b658abd6fe423d6556fbb19e55759052cce6aceb86a364d&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/373130584.jpg?k=f576bc80acdbd6fb0d86c9648a724b6974d0162528e5bd559827a957325804e3&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/373130578.jpg?k=98a28f70ff8a4299eff8c5c568e25c1c11f21e64bb207e255f80fe2b71e95a60&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/373130577.jpg?k=d88a288311c91a89f6304714472a03ac6c655a4ded88fe414757426ce6026171&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/373130586.jpg?k=d9dde6a9f9488dc6dd39b759e6bce65bbcec6ddd5370a6f28a3d1218a904e164&o=&hp=1"]
            },
            "reviews" : [
                {
                    name : "Bogdan",
                    note : "“the pool area is very nice the private beach very handy and nice hotel lounge is clean and cozy staff were very friendly and helpful nice welcoming first day food is good, tasty very nice and...”",
                    review : 4.5
                },
                {
                    name : "Letife",
                    note : "“Hospitality was good, staff were very kind and helpful! Loved the prestige room and benefits - well worth the extra money. Room was spacious and bed was very comfortable, had the best sleep.”",
                    review : 4
                }
            ]
        },
        {
            "id": 233372,
            "name": "Iberostar Selection Diar El Andalous",
            "details" : "This Iberostar is located on the Mediterranean coast in Sousse. It overlooks the sandy beaches and offers an indoor and outdoor swimming pool, a Spa and children’s pool and playground. Diar El Andalous provides spacious 5-star guest rooms and suites. They are all air-conditioned and have satellite TV. Guests can enjoy numerous health and beauty treatments in the Spa and relax in the Sauna or enjoy a game of tennis on one of the hotel’s courts. Al Hambra, the hotel’s restaurant serves typical Tunisian specialties and a range of international dishes. There is also has a poolside snack bar, a cocktail bar and a buffet-style restaurant. Please note that a dress code is requested : -Shorts allowed in buffet. (No swimsuit, no tank tops, no flip-flops) -A la carte restaurants: long trousers Couples particularly like the location — they rated it 8.8 for a two-person trip.",
            "starRating": 5,
            "urls": {},
            "address": {
                "streetAddress": "BP 40",
                "extendedAddress": "",
                "locality": "Port El Kantaoui",
                "postalCode": "4089",
                "region": "Sousse",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.8065938394307!2d10.586524751199924!3d35.902752225300176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd899624d737a5%3A0xe702c75e2cb4e186!2sHotel%20Iberostar%20Diar%20El%20Andalous!5e0!3m2!1sen!2stn!4v1667253381252!5m2!1sen!2stn",
                "obfuscate": false
            },
            "welcomeRewards": {
                "collect": true
            },
            "guestReviews": {
                "unformattedRating": 4.3,
                "rating": "4.3",
                "total": 191,
                "scale": 5,
                "badge": "fabulous",
                "badgeText": "Fabulous"
            },
            "landmarks": [
                {
                    "label": "Tunis (TUN-Tunis - Carthage Intl.)",
                    "distance": "68 miles"
                }
            ],
            "geoBullets": [],
            "ratePlan": {
                "price": {
                    "current": "$94",
                    "exactCurrent": 93.63,
                    "old": "$104",
                    "fullyBundledPricePerStay": "total $102 for 1&nbsp;room, 4&nbsp;guests"
                },
                "features": {
                    "freeCancellation": false,
                    "paymentPreference": false,
                    "noCCRequired": false
                },
                "type": "EC"
            },
            "neighbourhood": "Port El Kantaoui",
            "deals": {
                "secretPrice": {
                    "dealText": "Save more with Secret Prices"
                },
                "priceReasoning": "DRR-443"
            },
            "messaging": {},
            "badging": {},
            "pimmsAttributes": "Oceanviewv1|DoubleStamps|D13|OnBeachPropertyv2|TESCO",
            "coordinate": {
                "lat": 35.902963,
                "lon": 10.587525
            },
            "providerType": "LOCAL",
            "supplierHotelId": 1217572,
            "isAlternative": false,
            "optimizedThumbUrls": {
                "srpDesktop": ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/52857685.jpg?k=fa60455475371fc383d9a9a03f80922cf215849af6f9280cacff68599ad56e61&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/53189422.jpg?k=8d7f36962f1a5db95f6d02d126a158af49abd92dcd1ecb3f65900530b5ca9c1d&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/76238080.jpg?k=132b933d262d9cbcea4b8e3f461bab5e7c00b7babb486d4a54d2d2e2a65c7f70&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/52858080.jpg?k=410aa27b736ee85e8f17457b46bdebfb9b6d2cf0b4a86c7dac36d76e6d78d2ac&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/52857683.jpg?k=3c5b9525748a6c47545e8b08feceb35013480e3538e59f2d6dfc88fa9c287a03&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/53188425.jpg?k=0e17fdbef8a58874fa16813463fb7d1da37e9d79a1ef637bf64b14b76b7ea563&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/77406049.jpg?k=3edbc1a0877cab8171ddff3f258364b3b85fac66d75126c0be8cf791406ebf08&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/53076452.jpg?k=5b84a8681767a5754d33a321ea66f878a2873cf8491f73c1792a1738a86d977f&o=&hp=1"]
            },
            "reviews" : [
                {
                    name : "Salima",
                    note : "“The staff made my stay impeccable. They are very careful and attentive and always smiling.”",
                    review : 5
                },
                {
                    name : "Majdi",
                    note : "“I would like to take this opportunity to thank first of all Mr Hassine for his outstanding and brilliant host welcoming us at the diar Andelous Sousse Tunisia as well as his team.”",
                    review : 5
                },
                {
                    name : "Doc",
                    note : "“Everything was good. I would like to give special thanks to Marim front desk.”",
                    review : 5
                },
                {
                    name : "Chayma",
                    note : "“Very welcoming and friendly staff, good service, clean swimming pool and wonderful sandy beach.”",
                    review : 5
                },
            ]
        },
        {
            "id": 396679,
            "name": "Novotel Tunis",
            "details" : "Set in the heart of Tunis’ business district, this 4-star hotel is 1.8 km from the city centre. You can relax in the bar with a drink or play video games in the games room. The air-conditioned rooms and suites at Novotel Mohamed V are contemporary in style and offer a TV with films on demand. All accommodation has free Wi-Fi access and some have an iPod dock. The on-site Novotel Café serves international cuisine for lunch and dinner. You can also enjoy a cocktail in the bar with a light meal, cakes or pastries. Dry cleaning, a 24-hour reception and babysitting are some of the other services at this hotel. Free private parking is available on site and Tunis-Carthage Airport is 7 km from the property.",
            "starRating": 4,
            "urls": {},
            "address": {
                "streetAddress": "44, Avenue Mohamed V",
                "extendedAddress": "",
                "locality": "Tunis",
                "postalCode": "1002",
                "region": "Tunis",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.8923441153347!2d10.279205951217806!3d36.845054272774085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4bc450b1d75b%3A0xd2193a727520a972!2sNovotel%20Tunis%20Lac!5e0!3m2!1sen!2stn!4v1667253407243!5m2!1sen!2stn",
                "obfuscate": false
            },
            "welcomeRewards": {
                "collect": true
            },
            "guestReviews": {
                "unformattedRating": 4,
                "rating": "4.0",
                "total": 200,
                "scale": 5,
                "badge": "very-good",
                "badgeText": "Very Good"
            },
            "landmarks": [
                {
                    "label": "Tunis (TUN-Tunis - Carthage Intl.)",
                    "distance": "3.1 miles"
                }
            ],
            "geoBullets": [],
            "ratePlan": {
                "price": {
                    "current": "$112",
                    "exactCurrent": 112.21,
                    "fullyBundledPricePerStay": "total $122 for 1&nbsp;room, 4&nbsp;guests"
                },
                "features": {
                    "freeCancellation": false,
                    "paymentPreference": false,
                    "noCCRequired": false
                },
                "type": "EC"
            },
            "neighbourhood": "La Fayette",
            "deals": {},
            "messaging": {},
            "badging": {},
            "pimmsAttributes": "DoubleStamps|TESCO",
            "coordinate": {
                "lat": 36.811132,
                "lon": 10.184578
            },
            "providerType": "LOCAL",
            "supplierHotelId": 4715679,
            "isAlternative": false,
            "optimizedThumbUrls": {
                "srpDesktop": ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/67849717.jpg?k=9ff5122276fa46295e8940786cc80c37becaff0899eb56ea2a7795a5301c5790&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/67851162.jpg?k=a046ea83f42a0af10292479203e51687b9966655a6bf8221e9cf4a1a033c0fa5&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/7946789.jpg?k=193c9d81ece885c03860ebe9f7d8dd74fa29107001d503f79cdcf300b24a840a&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/67848156.jpg?k=3322b5069d2512cb7159716a70fadbda01a40d34693c8c47f4db66371c712b3a&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/67847893.jpg?k=5a771a56db725a73c1b95b202987fcccad8d731312bf98d949f456cd700857f3&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/67851141.jpg?k=f1df241c034005de880d58e2520ac290fb058284a0cbf0692ecdb89c8d76b0f9&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/67850142.jpg?k=32557569f7ed1a862ca5d14bb1a8e7c8fa709f6fe8d349edca998881a6b88721&o=&hp=1"]
            },
            "reviews" : [
                {
                    name : "Pedro",
                    note :"“Close to the center which is quite important because transport for 5 people is not easy in Tunis. Great swimming pool with amazing views - very good to relax at the end of the day. Good breakfast.”",
                    review : 4.5
                },
                {
                    name : "Pedro",
                    note :"“The food was excellent! And the staff was very attentive. The next time I am in Tunis, I will stay at Novotel. Thank you.”",
                    review : 4
                },
                {
                    name : "Clare",
                    note :"“Customer service was good & the room was comfortable. Enjoyed the breakfast as lots of variety.”",
                    review : 4.5
                }
            ]
        },
        {
            "id": 443108,
            "name": "Khayam Garden Beach Resort & Spa",
            "details" : "Khayam Garden is located in Nabeul and offers a view of the sea and direct beach access. The air-conditioned hotel proposes an outdoor swimming pool with waterslides and a terrace with deck chairs. The guest rooms at Khayam Garden include air conditioning, a TV and a telephone. They each have a wardrobe and an en suite bathroom with a hairdryer. The on-site restaurant has a terrace with a sea view and a continental breakfast can be enjoyed every morning. Guests are also invited to relax in the garden or in one of the lounge areas. Free private parking is available on site and Nabeul Train Station is a 20-minute drive away. The hotel is a 10-minute drive from Hammamet and a 1-hour drive from central Tunis. Couples particularly like the location — they rated it 8.7 for a two-person trip.",
            "starRating": 4,
            "urls": {},
            "address": {
                "streetAddress": "Avenue Mohamed V",
                "extendedAddress": "",
                "locality": "Nabeul",
                "postalCode": "8000",
                "region": "Sousse",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.7074219965602!2d10.72946105121007!3d36.44045679546776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130298c2618ed683%3A0x153c52eb7453341c!2sH%C3%B4tel%20Khayam%20Garden%20Beach%20Resort%20and%20Spa!5e0!3m2!1sen!2stn!4v1667253430755!5m2!1sen!2stn",
                "obfuscate": false
            },
            "welcomeRewards": {
                "collect": true
            },
            "guestReviews": {
                "unformattedRating": 4.4,
                "rating": "4.4",
                "total": 110,
                "scale": 5,
                "badge": "fabulous",
                "badgeText": "Fabulous"
            },
            "landmarks": [
                {
                    "label": "Tunis (TUN-Tunis - Carthage Intl.)",
                    "distance": "40 miles"
                }
            ],
            "geoBullets": [],
            "ratePlan": {
                "price": {
                    "current": "$161",
                    "exactCurrent": 160.85,
                    "old": "$179",
                    "fullyBundledPricePerStay": "total $174 for 1&nbsp;room, 4&nbsp;guests"
                },
                "features": {
                    "freeCancellation": false,
                    "paymentPreference": false,
                    "noCCRequired": false
                },
                "type": "EC"
            },
            "neighbourhood": "Nabeul",
            "deals": {
                "secretPrice": {
                    "dealText": "Save more with Secret Prices"
                },
                "priceReasoning": "DRR-443"
            },
            "messaging": {
                "scarcity": "2 left on our app"
            },
            "badging": {},
            "pimmsAttributes": "Oceanviewv1|DoubleStamps|D13|OnBeachPropertyv2|TESCO",
            "coordinate": {
                "lat": 36.441166,
                "lon": 10.730812
            },
            "roomsLeft": 2,
            "providerType": "LOCAL",
            "supplierHotelId": 6791168,
            "isAlternative": false,
            "optimizedThumbUrls": {
                "srpDesktop": ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/399307125.jpg?k=417ad4438d01ac7c917a0dc38067ef1b9cb2924b4f28b39c9b024b1aa32e385b&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/303215925.jpg?k=3684d56a042056569d12a4dad7490ce8cefd979b8ac0f00adbf15157257c8549&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/343247217.jpg?k=15ebdcbcc4fd712cc777231886a655e93fb3c107f628ba7242ee3f44aa930175&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/343247575.jpg?k=9c7a35cb23004d61a74a40071609ad41d96a484bf10f88265ac226e5ee66a33f&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/343247551.jpg?k=4186d49eee74d89025adf358633a71a34863f5d1d51c321fa44db078c762ddef&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/354421231.jpg?k=4f4a58cefa7cd8bbed59c7772c9eefc9caf88abab74d1efe7ba20db83b9c8aa3&o=&hp=1"]
            },
            "reviews" : [
                {
                    name : "Astrid",
                    note : "“I liked everything about this hotel. It was a very nice room and not to mention clean, I have been to many hotels but this hotel was the cleanest. the beds are very soft and good, the air conditioning works very well. The food was very good, plenty to choose from. nice family hotel with nice outdoor area. For children, they are slippery. the people who work there are very kind. super nice hotel”",
                    review : 5
                },
                {
                    name : "Salim",
                    note : "“We had an excellent stay with our 2 boys, ages 13 and 16, who also enjoyed the activities and leisure options offered by the establishment and the animators on site are exceptional, super nice, professional and close to all hotel guests.”",
                    review : 4
                },
                {
                    name : "Abouafif",
                    note : "“Loved everything about this hotel. Clean and nice to fight good food. The room was very clean and I mean clean. Been to many hotels. But this was clean!! Nice view from the room and looked down towards the sea. Perfect stay. Everyone is cheerful and helpful.”",
                    review : 4.5
                }
            ]
        },
        {
            "id": 234091,
            "name": "Djerba Plaza Thalasso & Spa",
            "details" : "Set in Triffa, within 1.9 km of Mezraia Beach and 2.3 km of Plage de Sidi Mahrez, Terre d'Oasis Djerba offers accommodation with a garden and as well as free private parking for guests who drive. Boasting family rooms, this property also provides guests with a terrace. Guests can enjoy garden views. At the guest house, each room is equipped with a desk. All rooms have a kettle and a private bathroom with a shower and free toiletries, while selected rooms also offer a kitchenette fitted with a fridge. At Terre d'Oasis Djerba every room comes with bed linen and towels. Popular points of interest near the accommodation include Triffa, Al Maqārisah and Djerba. The nearest airport is Djerba–Zarzis International Airport, 26 km from Terre d'Oasis Djerba.",
            "starRating": 4,
            "urls": {},
            "address": {
                "streetAddress": "Zone Touristique",
                "extendedAddress": "Dejrba Island",
                "locality": "Djerba Midun",
                "postalCode": "4116",
                "region": "Djerba",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.272776943443!2d11.003488366885358!3d33.831075374778614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa978c4297c42f%3A0xf99ff9bd5e73f6d2!2sDjerba%20Plaza%20Thalasso%20and%20Spa!5e0!3m2!1sen!2stn!4v1667253458029!5m2!1sen!2stn",
                "obfuscate": false
            },
            "welcomeRewards": {
                "collect": true
            },
            "guestReviews": {
                "unformattedRating": 4.1,
                "rating": "4.1",
                "total": 192,
                "scale": 5,
                "badge": "very-good",
                "badgeText": "Very Good"
            },
            "landmarks": [
                {
                    "label": "Zarzis",
                    "distance": "23 miles"
                },
                {
                    "label": "Oamarit Beach",
                    "distance": "16 miles"
                }
            ],
            "geoBullets": [],
            "ratePlan": {
                "price": {
                    "current": "$210",
                    "exactCurrent": 209.55,
                    "old": "$233",
                    "fullyBundledPricePerStay": "total $305 for 1&nbsp;room, 4&nbsp;guests"
                },
                "features": {
                    "freeCancellation": true,
                    "paymentPreference": true,
                    "noCCRequired": false
                },
                "type": "Dual"
            },
            "neighbourhood": "Djerba Midun",
            "deals": {
                "secretPrice": {
                    "dealText": "Save more with Secret Prices"
                },
                "priceReasoning": "DRR-443"
            },
            "messaging": {
                "scarcity": "1 left on our app"
            },
            "badging": {
                "hotelBadge": {
                    "type": "vipBasic",
                    "label": "VIP"
                }
            },
            "pimmsAttributes": "Oceanviewv1|DoubleStamps|Privatebeachv1|D13|TESCO",
            "coordinate": {
                "lat": 33.830339,
                "lon": 11.006937
            },
            "roomsLeft": 1,
            "providerType": "LOCAL",
            "supplierHotelId": 9124,
            "isAlternative": false,
            "optimizedThumbUrls": {
                "srpDesktop": ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/f2/fd/9e/djerba-plaza-by-night.jpg?w=700&h=-1&s=1" , "https://www.holidaycheck.de/main-photo-redirect/b4ebdcb3-e982-3b62-a44a-326013d352e7/w_1280,h_720,c_fill,q_auto,f_auto" , "https://img.ev.mu/images/hotels/1468/600x400/688344.jpg" , "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/be/66/a1/djerba-plaza-hotel-spa.jpg?w=700&h=-1&s=1" , "https://www.kayak.com/rimg/himg/75/bf/a0/arbisoftimages-346920-_0a0i-image.jpg?width=1366&height=768&crop=true"]
            },
            "reviews" : [
                {
                    name : "Anas",
                    note : "Awesome Hotel , really enjoyed my weekend there.",
                    review : 4
                },
                {
                    name : "Pedro",
                    note :"“The food was excellent! And the staff was very attentive. The next time I am in Tunis, I will stay at Novotel. Thank you.”",
                    review : 4
                },
                {
                    name : "Clare",
                    note :"“Customer service was good & the room was comfortable. Enjoyed the breakfast as lots of variety.”",
                    review : 4.5
                }
            ]
        },
        {
            id: 443109,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/18000000/17840000/17830200/17830110/da091e3f.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/61/63/0b/alrawabi-hotel.jpg?w=700&h=-1&s=1" , "https://media-cdn.tripadvisor.com/media/photo-s/18/61/63/54/alrawabi-hotel.jpg" , "https://fwk.resabo.com/cr.fwk/images/hotels/Hotel-4443-20171024-054748.jpg" , "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/39/90/3990426.jpeg"],
                
            },
            name:"Hotel Alrawabi",
            details : "Offering an outdoor pool and a restaurant, Hotel Alrawabi is located in Nefza, 28 km from Tabarka. Free WiFi access is available. Each room here will provide you with a TV, air conditioning and satellite channels. Featuring a bath, private bathroom also comes with a shower and free toiletries. At Hotel Alrawabi you will find a 24-hour front desk, a garden and a terrace. Other facilities offered at the property include entertainment staff, a nightclub and meeting facilities. The property offers free parking. Tabarka-Ain Draham Airport is 18 km away.",
            address: {
                "streetAddress": "Route de Bizete (Route de Sajnene)",
                "extendedAddress": "",
                "locality": "Nefza",
                "postalCode": "9010",
                "region": "Béja",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.066188645837!2d9.078938851220432!3d36.98435326491223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e4ac8ce49ed0fd%3A0x86a452d9538df594!2sHotel%20Alrawabi!5e0!3m2!1sen!2stn!4v1667253490236!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Nefza",
            starRating : 3,
            ratePlan : {
                price:{
                    current : "$49"
                }
            },
            reviews : [
                {
                    name : "Youssef",
                    note : "Not a very good hotel. But a least providing with the minimum.",
                    review : 2.5
                }
            ]
        },
        {
            id: 443110,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/10000000/9350000/9346200/9346158/6b13cf83.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/55753705.jpg?k=547c4260bc738e0662ae28db62727a3a5acda2c712ae422dcbbc76a2e97c563a&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/172680390.jpg?k=b3b37b5c7fa5599bdff32c72f468bb5e2969d0061605f9c8888713aee9d1dc55&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/55756567.jpg?k=58071252e9595c5ad04b23bd3e34add1d65cff26dc5529ed63033e7f47e460bf&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/172688505.jpg?k=c920fc55521291d40774ee6d955e1535b1c5203c6b209dff70204c8b464941c1&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/172680370.jpg?k=661e10d7516366286a103671dd29b04e701fced2f1784e6bb4cc4b61078c2195&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/172680151.jpg?k=fd477a9dc36f38c06f339bfec7164d1f8503e5478c02923f9f506656f826cf77&o=&hp=1"],
                
            },
            name:"The Penthouse Suites Hotel",
            details : "Located in Tunis, The Penthouse Suites Hotel offers an outdoor pool, skating rink and a restaurant. This self-catering accommodation features free WiFi. The property is 4.8 km from Belvedere Parc and 7.3 km from Habib Bourguiba Avenue. Each suite will provide you with a TV, air conditioning and a seating area. There is a kitchen with a dishwasher and a microwave. Featuring a bath or shower, shared bathroom also comes with a hairdryer and bathrobes. At The Penthouse Suites Hotel you will find a garden and a snack bar. Other facilities like dry cleaning and laundry facilities are offered. Activities in the surrounding area include bowling. The property offers free parking. If you feel like visiting the surroundings, check out Medina (7.4 km). Tunis Airport is located 5 km from the property.",
            address: {
                "streetAddress": "Rue Medinat Radhoua",
                "extendedAddress": "",
                "locality": "Ennasr 2",
                "postalCode": "2080",
                "region": "Ariana",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.154318941912!2d10.157997751218097!3d36.86272487177814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2ccad665537dd%3A0x535dc4977eb31ede!2sThe%20Penthouse!5e0!3m2!1sen!2stn!4v1667253517832!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Ariana",
            starRating : 4,
            ratePlan : {
                price:{
                    current : "$111"
                }
            },
            reviews : [
                {
                    name : "Nabil",
                    note : "“Everything was well arranged. Staff was very nice and helpful. Rooms are clean and nice.”",
                    review : 4
                },
                {
                    name : "Mohamed",
                    note : "“I liked Ismail he is a very nice gentelman and all housekeeping staff and Zeid he is a proffessional”",
                    review : 4
                },
                {
                    name : "Krisztina",
                    note : "“Huge room, you can find everything what you need. They have bowling, and ice skating place to spend your time. The breakfast is perfect, you can choose from a lot of meal.”",
                    review : 5
                }

            ]

        },
        {
            id: 443111,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/24000000/23360000/23359500/23359455/6dbdc3fb.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/155579093.jpg?k=267a052164970eecf1b431637b50cb64caad06a7c51310b9b40bc5fe935dcce2&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/195085179.jpg?k=4910ed16e5b7c2098af3d80c4b815db4bba3b940e23724213e2f8bf2b66842c9&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/154460755.jpg?k=059c870fbe26487120e804274c6c3912d030074d74c1258cf050659b49606ebe&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/154460477.jpg?k=8b1de3b5a613b59077a3f017e70e8fe93aad372410d48de30909613e0c876193&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/157907745.jpg?k=8652b15392648034dbd362c6acda863592d6e43a5163a1f1e5eea5d1fd31cd3b&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/154461064.jpg?k=81801a7a279641698c73847403c1515bf945569a2059147e61075cb230d89236&o=&hp=1"],
                
            },
            name:"Marigold Hotel",
            details : "Located in Tunis, 14 km from Salammbo Tophet Archaeological Museum, Marigold Hotel provides accommodation with a shared lounge, private parking and a terrace. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi throughout the property. The hotel features family rooms. The hotel will provide guests with air-conditioned rooms offering a wardrobe, a kettle, a minibar, a safety deposit box, a flat-screen TV and a private bathroom with a shower. Continental and buffet breakfast options are available daily at Marigold Hotel. Guests can make use of the business centre or relax in the snack bar. Habib Bourguiba Avenue is 2.2 km from the accommodation, while Belvedre Parc is 1.8 km away. The nearest airport is Tunis–Carthage Airport, 6 km from Marigold Hotel.",
            address: {
                "streetAddress": "Angle Ibn Ennadim et, Rue Chabia Mont- plaisir",
                "extendedAddress": "",
                "locality": "Ennasr 2",
                "postalCode": "1073",
                "region": "Ben Arous",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.0328174690176!2d10.180568267411848!3d36.817733510074405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3489c5b2fa0d%3A0xb6c7181c2970c096!2sH%C3%B4tel%20Marigold!5e0!3m2!1sen!2stn!4v1667253543124!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Ben Arous",
            starRating : 4,
            ratePlan : {
                price:{
                    current : "$86"
                }
            },
            reviews : [
                {
                    name : "Dominique",
                    note : "« Tout.. la gentillesse et professionnalisme du personnel.. Très grande chambre.. propreté impeccable.. literie très confortable.. grande salle de bain.. Petit déjeuner très varié et copieux.. »",
                    review : 4.5
                },
                {
                    name : "Dania",
                    note : "« Le petit déjeuner est le seul que je n ai pas aime »",
                    review : 3.5
                }
            ]

        },
        {
            id: 443112,
            optimizedThumbUrls:{
                srpDesktop	:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/02/d6/8b/hotel-saheb-ettabaa.jpg?w=700&h=-1&s=1" , "https://www.kayak.com/rimg/himg/45/53/05/expediav2-2582720-0208ca-162412.jpg?width=1366&height=768&crop=true" , "https://az712897.vo.msecnd.net/images/full/070b8ba0-7341-4e76-8c43-2aee07398c7a.jpeg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsONQthOqAklC0laM4d0dwtvY-cRhHq9cAVXwitsPG4d3CCP0jkY2dqtJ6g3ONhbmYaM&usqp=CAU"],
                
            },
            name:"Hotel Saheb Ettabaa",
            details : "Featuring air-conditioned accommodation with a private pool, Dar El Halfaouine is set in Tunis. Free WiFi is available in this apartment, located 17 km from Salammbo Tophet Archaeological Museum and 400 m from Sidi Mahrez Mosque. The apartment features 3 bedrooms, a flat-screen TV with satellite channels, an equipped kitchen with a microwave and a fridge, a washing machine, and 3 bathrooms with a shower. Towels and bed linen are featured. The apartment offers a terrace. Guests can enjoy the indoor pool at Dar El Halfaouine. Popular points of interest near the accommodation include Dar Lasram Museum, Kasbah Square and Bab El Bhar - Porte de France. The nearest airport is Tunis–Carthage Airport, 11 km from Dar El Halfaouine.",
            address: {
                "streetAddress": "37 Avenue Hedi Saiidi",
                "extendedAddress": "",
                "locality": "Mannouba",
                "postalCode": "1002",
                "region": "Mannouba",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.3159633211153!2d10.162447351217164!3d36.81094787469501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd33842a1fdd53%3A0xdd8fc6623e783d24!2z2YbYstmEINi12KfYrdioINin2YTYt9in2KjYuSAtIEjDtHRlbCBTYWhlYiBFdHRhYmFh!5e0!3m2!1sen!2stn!4v1667253571323!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Mannouba",
            starRating : 3,
            ratePlan : {
                price:{
                    current : "$54"
                }
            },
            reviews : [
                {
                    name : "Kamel",
                    note : "This is not a hotel, my house is better x10",
                    review : 2
                }
            ]

        },
        {
            id: 443113,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/2000000/1670000/1661800/1661701/6a554b96.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/286150620.jpg?k=16512d6ade7157a859d1dc99ca1d6faf608cc131f2e0c29a36d76229be974919&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/286150102.jpg?k=8f9a0f28f88b74c6c8e6d816ee1b5d29a3807b36861336b21c17201aa02327ff&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/286150571.jpg?k=56b657783f08e0dda0d80eb3af7f99cf1ad73c957394f673cefee76c7fcdfb44&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/144787803.jpg?k=610b1e6082aff9130b620cdb3f71760a02f65f4c0535d056a2a317f0b0160b4c&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/144787447.jpg?k=3acfebce44357366476f695696c23c4e0b76d03f0a4b7a89f0a2a6f7431d06d1&o=&hp=1"],
                
            },
            name:"Residence Ain Meriem",
            details : "The Ain Meriem Beach Holiday Village is between the beach and the mountain in Bizerte. It has a restaurant that serves international cuisine and an outdoor swimming pool. Its spacious rooms have TV and air conditioning (in high season), a terrace or a balcony and a fully equipped kitchenette. Wi-Fi internet access is available in the public areas of Ain Meriem Beach Holiday Village and is free of charge. In summer a mini market is available and activities are organized at the village. Couples particularly like the location — they rated it 8.2 for a two-person trip.",
            address: {
                "streetAddress": "Route De La Corniche",
                "extendedAddress": "",
                "locality": "Bizerte",
                "postalCode": "7000",
                "region": "Bizerte",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.986391634322!2d9.870316851226468!3d37.29545634726428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e31e46a9c84d71%3A0x4eb02384f1f434f0!2sR%C3%A9sidence%20Ain%20Meriem%20Bizerte!5e0!3m2!1sen!2stn!4v1667253600634!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Bizerte",
            starRating : 3,
            ratePlan : {
                price:{
                    current : "$60"
                }
            },
            reviews : [
                {
                    name : "James",
                    note: "“The staff and management, the location, the food, the pool and the little private beach.”",
                    review : 3.5
                },
                {
                    name : "Martin",
                    note: "“The staff was very friendly and they gave us a great flat with two rooms out of courtesy. The hotel is nicely located by the sea-side, with the possiblitly to have a bath in the sea in walking distance. The breakfast is generous with good produce.”",
                    review : 4
                }
            ]
        },
        {
            id: 443114,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/2000000/1660000/1651900/1651850/ed72b841.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106246251.jpg?k=34156124071328bd1702ba6b70f2d72d82820dd017d848501010ce9406529973&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106246259.jpg?k=22761e87f9ee65394365ecbfccfe88a1460265132ba851e16d5b6de8b83f3df5&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106246272.jpg?k=f8031e87e1e71b4a617a5388128857d0b299d491f0b473c76d985a13a3fa2f0e&o=&hp=1" ,"https://cf.bstatic.com/xdata/images/hotel/max1024x768/107129517.jpg?k=2775550eaf719f8f7c209bc2948feaf6fc8894ea3fa881adbbddfc0e7c1894d2&o=&hp=1" ,"https://cf.bstatic.com/xdata/images/hotel/max1024x768/107129508.jpg?k=390edd72302d54d6b7cf9bb7a75abc54aaf349758564b74386d6975509f845bc&o=&hp=1"],
                
            },
            name:"El Mouradi Hammam Bourguiba",
            details : "This 4-star El Mouradi hotel is located in the Ain Draham regional forest in the north-west of Tunisia. It offers air-conditioned rooms, suites and bungalows with satellite TV and a terrace or balcony. Guests can relax in the Hammam Bourguiba’s spa centre, which offers a variety of fitness and beauty treatments. The El Mouradi Hammam Bourguiba has a bar and restaurant which served traditional cuisine. The hotel also provides a 24-hour reception. The Hammam Bourguiba is a 30 minute drive from the seaside resort of Tabarka. Couples particularly like the location — they rated it 8.9 for a two-person trip.",
            address: {
                "streetAddress": "Hammam Bourguiba",
                "extendedAddress": "",
                "locality": "Ain Draham",
                "postalCode": "8136",
                "region": "Jendouba",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.0728416223465!2d8.577870751216333!3d36.76881997706611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fb242c2c73b9c9%3A0xcf1c9c644130efc1!2sEl%20Mouradi%20Hammam%20Bourguiba!5e0!3m2!1sen!2stn!4v1667253623931!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Ain Draham",
            starRating : 4,
            ratePlan : {
                price:{
                    current : "$71"
                }
            },
            reviews : [
                {
                    name : "Hatem",
                    note : "Very good hotel, but a little bit expensive",
                    review : 5
                }
            ]
        },
        {
            id: 443115,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/12000000/11100000/11099700/11099612/0ca52b14.jpg?impolicy=resizecrop&rw=1200&ra=fit"],
                
            },
            name:"Dar Salima",
            details : "Al Khulaydiyah country house with outdoor pool and restaurant",
            address: {
                "streetAddress": "El Kessibi Mornag",
                "extendedAddress": "",
                "locality": "Al Khulaydiyah",
                "postalCode": "4001",
                "region": "Zaghouan",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.609735801125!2d10.268888851213337!3d36.61170728588819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd475b53788313%3A0x6a2b04a927e19bd1!2sDar%20Salima!5e0!3m2!1sen!2stn!4v1667253650643!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Al Khulaydiyah",
            starRating : 2,
            ratePlan : {
                price:{
                    current : "$65"
                }
            },
            reviews : [
                {
                    name : "Ali",
                    note : "A not very good hotel. Not recommended",
                    review : 2.5
                }
            ]
        },
        {
            id: 443116,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/3000000/2920000/2911100/2911088/222edce4.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/3000000/2920000/2911100/2911088/68c3780d.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/3000000/2920000/2911100/2911088/510490ee.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/3000000/2920000/2911100/2911088/978d4b02.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/3000000/2920000/2911100/2911088/4027acb9.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/3000000/2920000/2911100/2911088/13502f91.jpg?impolicy=resizecrop&rw=1200&ra=fit"],
                
            },
            name:"Movenpick Resort & Marine Spa Sousse",
            details : "Movenpick Resort & Marine Spa Sousse offers a private beach where you can enjoy beach umbrellas, volleyball and beachside drinks, plus you'll have access to on-site parasailing, windsurfing and sailing. 2 outdoor pools provide fun for everyone, while guests in the mood for pampering can visit the spa to indulge in hot stone massages, hydrotherapy and thalassotherapy. The restaurant is a great spot for a bite to eat, and cold drinks are served at the pool bar. Other highlights at this luxurious hotel include 2 bars/lounges, a rooftop terrace and a free kid's club. Fellow travellers say good things about the room service and helpful staff.",
            address: {
                "streetAddress": "Boulevard du 14 Janvier",
                "extendedAddress": "",
                "locality": "Sousse",
                "postalCode": "4001",
                "region": "Sousse",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.2629023695176!2d10.625084051198805!3d35.84255652861659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13027584510f3853%3A0x4a2185abf6d1d7c9!2sM%C3%B6venpick%20Sousse!5e0!3m2!1sen!2stn!4v1667253677123!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Sousse",
            starRating : 5,
            ratePlan : {
                price:{
                    current : "$124"
                }
            },
            reviews : [
                {
                    name : "Sofiene",
                    note :"Nous arrivons à la fin de nos 2 semaines de vacances au Movenpick de Sousse et nous avons adoré notre séjour. Il est très bien centré (20 minutes à pieds de la Medina ou quelques minutes en taxi pour 4 ou 5 Dinars). Le hall d'entrée est vraiment grand et accueillant, le personnel cherche à répondre à toutes les demandes. Le restaurant fonctionne bien même en pleine saison, le buffet est varié et de qualité. Le personnel de service est très attentif et serviable. Notre chambre avec balcon et vue sur la mer et la piscine est bien équipée et très jolie, la salle de bain est top. Le service de chambre est soigné et ces dames sont attentives à nos demandes. Nous avons passé des moments merveilleux, merci à tous.",
                    review : 5
                },
                {
                    name : "Amira",
                    note : "Excellent hotel",
                    review :5 
                }
            ]
        },
        {
            id: 443117,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/75000000/74450000/74443900/74443847/1c5e53d5.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/75000000/74450000/74443900/74443847/124f7b5b.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/75000000/74450000/74443900/74443847/650590b7.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/75000000/74450000/74443900/74443847/81b9cb1f.jpg?impolicy=resizecrop&rw=1200&ra=fit" ,"https://images.trvl-media.com/hotels/75000000/74450000/74443900/74443847/7980c9ea.jpg?impolicy=resizecrop&rw=1200&ra=fit" ,"https://images.trvl-media.com/hotels/75000000/74450000/74443900/74443847/f16705a6.jpg?impolicy=resizecrop&rw=1200&ra=fit"],
                
            },
            name:"Hotel Sufetula",
            details : "Set in Sbeitla, 2.4 km from Sbeitla, Sufetula Hotel offers accommodation with a restaurant, free private parking, a seasonal outdoor swimming pool and a bar. This 3-star hotel offers a 24-hour front desk, room service and free WiFi. The hotel has a garden and features a terrace. At the hotel, rooms have a wardrobe. Complete with a private bathroom equipped with a bidet and free toiletries, the units at Sufetula Hotel have a TV and air conditioning, and certain rooms here will provide you with a seating area. At the accommodation every room has bed linen and towels. Guests at Sufetula Hotel can enjoy a continental breakfast. Ksar el Kradem is 21 km from the hotel, while Henchir el Haouachi is 24 km away. The nearest airport is Gafsa Airport, 114 km from Sufetula Hotel. Couples particularly like the location — they rated it 8.8 for a two-person trip.",
            address: {
                "streetAddress": "Route De Kasserine km 2",
                "extendedAddress": "",
                "locality": "Subaytilah",
                "postalCode": "1250",
                "region": "Kasserine",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.4662396588756!2d9.109489251187785!3d35.244654961301016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f94a22a55d3f37%3A0x9aeeab720e531036!2sHotel%20Sufetula!5e0!3m2!1sen!2stn!4v1667253696819!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Subaytilah",
            starRating : 3,
            ratePlan : {
                price:{
                    current : "$43"
                }
            },
            reviews : [
                {
                    name : "Ala",
                    note : "A good place to relax and have some beers.",
                    review : 3.5
                }
            ]
        },
        {
            id: 443118,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/2000000/1730000/1721900/1721884/f5e57c29.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/2000000/1730000/1721900/1721884/9c788489.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/2000000/1730000/1721900/1721884/5d5213f2.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/2000000/1730000/1721900/1721884/0f3df617.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/2000000/1730000/1721900/1721884/66d1cdbc.jpg?impolicy=resizecrop&rw=1200&ra=fit"],
                
            },
            name:"La Kasbah",
            details : "Enjoy your visit to Kairouan with a stay at la Kasbah. Guests can grab a bite to eat at the coffee shop/cafe and visit the spa to be pampered with massages, facials or body scrubs. Other highlights at this luxurious hotel include a bar/lounge, a steam room and a seasonal outdoor pool.",
            address: {
                "streetAddress": "Avenue Ibn El Jazzar-Cité La Mosquée",
                "extendedAddress": "",
                "locality": "Kairouan",
                "postalCode": "3100",
                "region": "Kairouan",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.892501665316!2d10.097191951195784!3d35.6796488375683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fdc546c22c3ec7%3A0x22463a0da446a27b!2sHotel%20La%20Kasbah!5e0!3m2!1sen!2stn!4v1667253725581!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Kairouan",
            starRating : 5,
            ratePlan : {
                price:{
                    current : "$95"
                }
            },
            reviews : [
                {
                    name : "Ahmed",
                    note : "Good hotel to relax and spend Muled time there",
                    review : 4
                }
            ]
        },
        {
            id: 443119,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/21000000/20200000/20192000/20191949/e0b89aba.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/21000000/20200000/20192000/20191949/e0b89aba.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/21000000/20200000/20192000/20191949/8e922aea.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/21000000/20200000/20192000/20191949/06c7936e.jpg?impolicy=resizecrop&rw=1200&ra=fit"],
                
            },
            name:"Hotel Jugurtha Palace",
            details : "Enjoy your visit to Gafsa with a stay at Hotel Jugurtha Palace. After a dip in one of 2 outdoor pools, guests can grab a bite to eat at Douar, one of 2 restaurants, which serves international cuisine and is open for breakfast, lunch and dinner. This upmarket hotel also features a poolside bar, a seasonal outdoor pool and a children's pool.",
            address: {
                "streetAddress": "Sidi Ahmed Zarroug BP 10",
                "extendedAddress": "",
                "locality": "Gafsa",
                "postalCode": "2100",
                "region": "Gafsa",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.6452608470527!2d8.741610851173125!3d34.43576480477238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f896fc0ec74d39%3A0xdc6a080a8cf92f6e!2sHotel%20Jugurtha%20Palace!5e0!3m2!1sen!2stn!4v1667253748179!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Gafsa",
            starRating : 4,
            ratePlan : {
                price:{
                    current : "$83"
                }
            },
            reviews : [
                {
                    name : "Iyed",
                    note : "Not a very good hotel but you can spend some time there and have fun",
                    review : 4
                }
            ]
        },
        {
            id: 443120,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/2000000/1750000/1741600/1741599/fee47996.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/2000000/1750000/1741600/1741599/016693f0.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/2000000/1750000/1741600/1741599/06303a11.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/2000000/1750000/1741600/1741599/20484181.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/2000000/1750000/1741600/1741599/a66f11d8.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/2000000/1750000/1741600/1741599/2be9cb59.jpg?impolicy=resizecrop&rw=1200&ra=fit"],
                
            },
            name:"Les Oliviers Palace",
            details : "Located near a train station, Les Oliviers Palace is a great choice for a stay in Sfax. Guests can be pampered with massages at the spa and grab a bite to eat at the coffee shop/cafe. Other features of this luxurious hotel include an indoor pool, a bar/lounge and a snack bar/deli.",
            address: {
                "streetAddress": "25 Avenue Hedi Chaker Sfax",
                "extendedAddress": "",
                "locality": "Sfax",
                "postalCode": "3000",
                "region": "Sfax",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.978992959403!2d10.763352151178426!3d34.730923889009716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002d2e0853ccb1%3A0x519a81a50253a5f0!2sLes%20Oliviers%20Palace!5e0!3m2!1sen!2stn!4v1667253770164!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Sfax",
            starRating : 5,
            ratePlan : {
                price:{
                    current : "$78"
                }
            },
            reviews : [
                {
                    name : "Aziz",
                    note : "I spent some time there with friends and had so much fun",
                    review : 5
                }
            ]
        },
        {
            id: 443121,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/75000000/74700000/74696500/74696421/cc8cf11e_y.jpg" ],
                
            },
            name:"Hotel l'Oasis Gabes",
            details : "Enjoy your visit to Gabes with a stay at Hotel l'Oasis Gabes. The coffee shop/cafe is the perfect spot for a bite to eat, and after having fun at the seasonal outdoor pool, you can unwind with a drink at the bar/lounge.",
            address: {
                "streetAddress": "Av.Habib Thameur",
                "extendedAddress": "",
                "locality": "Gabès",
                "postalCode": "6000",
                "region": "Gabès",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9760585137924!2d10.113177951163516!3d33.89027043360005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12556f9163ac99d3%3A0xbf77854965a36117!2sHotel%20l&#39;Oasis%20Gabes!5e0!3m2!1sen!2stn!4v1667253793451!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Gabès",
            starRating : 4,
            ratePlan : {
                price:{
                    current : "$171"
                }
            },
            reviews : [
                {
                    name : "James",
                    note : "Very good hotel to admire oasis of gabes",
                    review : 4.5
                }
            ]
        },
        {
            id: 443122,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/1000000/530000/527600/527511/1f3ea410.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/1000000/530000/527600/527511/2ecb3e1a.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/1000000/530000/527600/527511/1f3ea410.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/1000000/530000/527600/527511/d7af083f.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/1000000/530000/527600/527511/eb336e42.jpg?impolicy=resizecrop&rw=1200&ra=fit"],
                
            },
            name:"Club Palm Azur - Families and Couples",
            details : "At Club Palm Azur - Families and Couples, you'll have access to on-site scuba-diving and windsurfing. There's plenty of fun with the 2 outdoor pools and indoor pool, and guests in the mood for pampering can visit the spa to indulge in hot stone massages, hydrotherapy and reflexology. Dining choices include 3 restaurants, and the bar/lounge is a great place to grab a cold drink. Other highlights at this upmarket hotel include a poolside bar, a health club and a fitness centre.",
            address: {
                "streetAddress": "Zona Touristique",
                "extendedAddress": "",
                "locality": "Aghir",
                "postalCode": "4116",
                "region": "Médenine",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.9017778714!2d11.01776315116125!3d33.7632039402582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9663f532155d%3A0xed8eec6db9fc785d!2sSENTIDO%20Palm%20Azur!5e0!3m2!1sen!2stn!4v1667253825474!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Aghir",
            starRating : 4,
            ratePlan : {
                price:{
                    current : "$102"
                }
            },
            reviews : [
                {
                    name : "Emilie",
                    note : "Séjour octobre 2022 très agréable. Très beau temps. L'hôtel est propre, spacieux. L'alimentation est diversifiée. Très bon accueil à l'arrivée ainsi que les serveurs. Grande disponibilité et écoute. A refaire",
                    review : 4.5
                }
            ]
        },
        {
            id: 443123,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/1000000/530000/525300/525272/f84a2cf2.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/270352438.jpg?k=c06c928be4974ae4673fead67967812b2709168cc1321b68bbec2234b2704e1f&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/270352441.jpg?k=3914f1b1629649134d6d534a73b128cb51d942b05826fb7fef0a1c39209d9dce&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/270352465.jpg?k=bb03be76bbebb1228d3ba978a578c6f5179f077df2eb164ea50face9c5b27463&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/270351390.jpg?k=672ffe6d64b5edad45edfe5953bc9bcac873dfff21f3e013af21645602cfbe84&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/270343698.jpg?k=8cb25ec69a3a74ce39f3e7c765c9702945bc2a956abda3d2702c8f25014b4c97&o=&hp=1"],
                
            },
            name:"Palm Beach Palace Tozeur",
            details : "Situated just 5 minutes away from Tozeur’s international airport, at the beginning of the Tunisian desert, Palm Beach Palace Tozeur offers elegant accommodation with excellent spa and leisure facilities. Palm Beach Palace Tozeur is a grand building, full of character and decorated with local crafts and Tozeur brick. Each of the suites is well-appointed and decorated in warm colours with rich fabrics. Guests can enjoy a full range of relaxation and wellbeing treatments at the hotel’s spa. After a dip in one of Palm Beach Palace Tozeur's spacious pools, they can relax in the sauna or steam bath. The great location of Palm Beach Palace Tozeur allows guests to easily access the Tunisian desert, as well as the beautiful architecture and commercial district of Tozeur. Couples particularly like the location — they rated it 8.3 for a two-person trip.",
            address: {
                "streetAddress": "Zona Touristique",
                "extendedAddress": "",
                "locality": "Tozeur",
                "postalCode": "2200",
                "region": "Tozeur",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.001858834394!2d8.115775751163921!3d33.91535173228327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1257c029520009cf%3A0xcb6e092a5b229615!2sPalm%20Beach%20Palace!5e0!3m2!1sen!2stn!4v1667253850699!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Tozeur",
            starRating : 5,
            ratePlan : {
                price:{
                    current : "$90"
                }
            },
            reviews : [
                {
                    name : "Elio",
                    note : "Very kind staff, food/drinks is always available.",
                    review: 5 
                }
            ]
        },
        {
            id: 443124,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/8000000/7120000/7117900/7117801/f45ecae6.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/122090040.jpg?k=864888fbe00bf12b424374eefcaf9f5cb5bce6c6d2c330550dfeb71017cb4fa8&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/122090035.jpg?k=a32df10b4ba3ad8f47e634213c69db231fa1e1746bbed641af83bc594dcf4bd5&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/122090046.jpg?k=05cc5cdf45c9e924ae664d32acca64d2a9f9a8480ff1b979e71f54d8fc919b16&o=&hp=1" , "https://cf.bstatic.com/xdata/images/hotel/max1024x768/2586285.jpg?k=de57f6f5c6a1da4a9ec24244a1ccee2f3017e06e46199aba7b7493c20cd154fb&o=&hp=1"],
                
            },
            name:"Hotel Sahara Douz",
            details: "This hotel is located on the edge of the Sahara Desert in Douz, central Tunisia. It has 2 swimming pools and a spa and wellness centre with massage and relaxation treatments.\n Hotel Sahara Douz offers air-conditioned rooms and suites with satellite TV and free Wi-Fi. Rooms have a balcony or large windows overlooking the palm groves or the dunes of the Sahara.\n The hotel’s restaurant offers Tunisian and international cuisine with a buffet service. The Sahara Douz also has a hotel bar, a poolside bar and a Moorish café.\n Guests can discover the town of Douz, which is a starting point for desert treks through the Sahara by camel or 4x4.\n Couples particularly like the location — they rated it 8.0 for a two-person trip.",
            address: {
                "streetAddress": "Zone touristique",
                "extendedAddress": "",
                "locality": "Douz",
                "postalCode": "4260",
                "region": "Kebili",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405060.1642276663!2d8.30016412294506!3d33.546774643318905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125687f3ffffffdd%3A0xf635c36ff8fdbea8!2sSahara%20Douz!5e0!3m2!1sen!2stn!4v1667253908526!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Douz",
            starRating : 3,
            ratePlan : {
                price:{
                    current : "$61"
                }
            },
            reviews : [
                {
                    name : "Bechir",
                    note : "Not very clean hotel, WIFI sometimes isn't available",
                    review : 2
                }
            ]
        },
        {
            id: 443125,
            optimizedThumbUrls:{
                srpDesktop	:["https://images.trvl-media.com/hotels/5000000/4270000/4261500/4261475/f830f8c6.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/5000000/4270000/4261500/4261475/10bc47e7_y.jpg" , "https://images.trvl-media.com/hotels/5000000/4270000/4261500/4261475/da25ffb7.jpg?impolicy=resizecrop&rw=1200&ra=fit" , "https://images.trvl-media.com/hotels/5000000/4270000/4261500/4261475/93940287.jpg?impolicy=resizecrop&rw=1200&ra=fit" , ""],
                
            },
            name:"Hotel Dakyanus Tataouine",
            details : "A great choice for a stay in Tataouine, Hotel Dakyanus Tataouine offers an airport shuttle (available 24 hours). After splashing around at the outdoor pool, you can grab a bite to eat at one of the 3 restaurants or unwind with a drink at the bar/lounge. A poolside bar, a snack bar/deli and a terrace are other highlights.",
            address: {
                "streetAddress": "Route El Ferch BP 234",
                "extendedAddress": "",
                "locality": "Tataouine",
                "postalCode": "3200",
                "region": "Ttataouine",
                "countryName": "Tunisia",
                "countryCode": "tn",
                "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.340261172624!2d10.370611966736409!3d32.94202482166022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1254b9724fdef40b%3A0x133f1bf22e7d0d48!2sHotel%20Dakyanus!5e0!3m2!1sen!2stn!4v1667253933851!5m2!1sen!2stn",
                "obfuscate": false
            },
            neighbourhood: "Tataouine",
            starRating : 3,
            ratePlan : {
                price:{
                    current : "$71"
                }
            },
            reviews : [
                {
                    name : "Souha",
                    note : "A good place to organize an event.",
                    review : 3
                }
            ]
        }
        
    ]
}

export const BookingReducer = (state = initialstate , action) =>{

    const {type , payload} = action;

    switch(type){
        case SEARCHHOTELS:
            state.SearchHotels = payload
            return{
                SearchHotels : state.SearchHotels
            }
        case ADDDESTINATION:
            payload.id = state.PreferedDestinations[state.PreferedDestinations.length-1].id + 1;
            state.PreferedDestinations.push(payload)
            return{
                PreferedDestinations : state.PreferedDestinations
            }
        default: return state;

    }
}