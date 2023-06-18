import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {
    
    Bars3Icon,
    XMarkIcon,
    
} from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Agenda', href: '/Agenda' },
    { name: 'Photos', href: '/Photos' },
    { name: 'Nous Contacter', href: '/Contact' },
]


const NavBar = () => {
  return (
        <Popover as="header" className="relative">
            <div className=" py-6">
            <nav
                className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
                aria-label="Global"
            >
                <div className="flex flex-1 items-center">
                <div className="flex w-full items-center justify-between md:w-auto">
                    <Link to={"/"}>
                    <span className="sr-only">AnasBooking</span>
                    <img
                        className="h-16 w-auto sm:h-20"
                        src="https://upload.wikimedia.org/wikipedia/en/6/68/Olympique_B%C3%A9ja.png"
                        alt="logo"
                    />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                    </div>
                </div>
                <div className="hidden space-x-8 md:ml-10 md:flex">
                    {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-white hover:text-red-500"
                    >
                        {item.name}
                    </a>
                    ))}
                </div>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-6">
                
                <a
                    href="mailto:boussehminea@gmail.com"
                    className="inline-flex items-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white hover:bg-gray-900"
                >
                    Nous Supporter
                </a>
                </div>
            </nav>
            </div>

            <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden z-50">
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                    <img
                        className="h-16 w-auto"
                        src="https://upload.wikimedia.org/wikipedia/en/6/68/Olympique_B%C3%A9ja.png"
                        alt=""
                    />
                    </div>
                    <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                    </div>
                </div>
                <div className="pt-5 pb-6">
                    <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                    
                    
                </div>
                </div>
            </Popover.Panel>
            </Transition>
        </Popover>
  )
}

export default NavBar