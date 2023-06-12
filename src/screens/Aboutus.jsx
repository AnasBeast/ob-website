import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'

const Aboutus = () => {
  document.title = "AnasBooking | About Us"

  const contactDetails = [
    { name: 'Share your experience', email: 'boussehminea@gmail.com', telephone: '+216 93 022 210' },
    { name: 'Join us', email: 'boussehminea@gmail.com', telephone: '+216 93 022 210' },
    { name: 'Support us', email: 'boussehminea@gmail.com', telephone: '+216 93 022 210' },
  ]
  const locations = [
    { city: 'Beja', address: ['Cite Erriad', 'Beja, TN 9000'] },
    { city: 'Tunis', address: ['Rue Med V', 'Tunis, TN 7050'] },
    
  ]
  const faqs = [
    {
      id: 1,
      question: 'How do we reserve an hotel?',
      answer:
        'Check our section Hotels where you can reserve your desired hotel.',
    },
    {
      id: 2,
      question: "Where are the planned travels?",
      answer:
        "We publish the plan of future travelings here in the Home section of the website.",
    },
    {
      id: 3,
      question: 'Could i add a prefered destination?',
      answer: 'Yes, you can share with us your prefered destination.',
    },
  ]
  return (
    <div>
      <header className="relative bg-sky-800 pb-24 sm:pb-32">

        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://pbs.twimg.com/media/Dr4D18TWwAAf1Td.jpg"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gradient-to-l from-sky-800 to-cyan-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <NavBar/>
        

        <div className="relative mx-auto max-w-md px-4 mt-24 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 z-10">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
          <p className="mt-6 max-w-3xl text-xl text-cyan-100">
            Get in touch with AnasBooking via our <br /> Email: boussehminea@gmail.com <br /> Phone: +216 93 022 210
          </p>
        </div>
      </header>
        <main>
        {/* Side-by-side grid */}
        <div className="bg-white">
          <div className="mx-auto max-w-md py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="divide-y divide-warm-gray-200">
              <section className="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contact-heading">
                <h2
                  id="contact-heading"
                  className="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight"
                >
                  Get in touch
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                  {contactDetails.map((item) => (
                    <div key={item.name}>
                      <h3 className="text-lg font-medium text-warm-gray-900">{item.name}</h3>
                      <dl className="mt-2 text-base text-warm-gray-500">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>{item.email}</dd>
                        </div>
                        <div className="mt-1">
                          <dt className="sr-only">Phone number</dt>
                          <dd>{item.telephone}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              </section>
              <section className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="location-heading">
                <h2
                  id="location-heading"
                  className="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight"
                >
                  Locations
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                  {locations.map((location) => (
                    <div key={location.city}>
                      <h3 className="text-lg font-medium text-warm-gray-900">{location.city}</h3>
                      <div className="mt-2 space-y-1 text-base text-warm-gray-500">
                        {location.address.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-warm-gray-50">
          <div className="mx-auto max-w-md py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-warm-gray-900">Frequently asked questions</h2>
                <p className="mt-4 text-lg text-warm-gray-500">
                  Can’t find the answer you’re looking for? Reach out to our{' '}
                  <a href="#" className="font-medium text-cyan-700 hover:text-cyan-600">
                    customer support
                  </a>{' '}
                  team.
                </p>
              </div>
              <div className="mt-12 lg:col-span-2 lg:mt-0">
                <dl className="space-y-12">
                  {faqs.map((faq) => (
                    <div key={faq.id}>
                      <dt className="text-lg font-medium text-warm-gray-900">{faq.question}</dt>
                      <dd className="mt-2 text-base text-warm-gray-500">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="relative">
          <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true" />
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="rounded-3xl bg-gradient-to-l from-sky-800 to-cyan-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-bold tracking-tight text-white">Sign up for our newsletter</h2>
                <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                  Receive all news and future plans.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-5 py-3 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-cyan-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Notify me
                  </button>
                </form>
                <p className="mt-3 text-sm text-cyan-100">
                  We care about the protection of your data. Read our{' '}
                  <a href="#" className="font-medium text-white underline">
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
        <Footer/>
    </div>
  )
}

export default Aboutus