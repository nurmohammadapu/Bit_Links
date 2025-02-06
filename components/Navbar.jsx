"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, GitlabIcon as GitHub } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-purple-700 text-white shadow-lg">
      <div className=" w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="font-bold text-xl">Bitlinks</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-white hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              href="/shorten"
              className="text-white hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
            >
              Shorten
            </Link>
            <Link
              href="/contact"
              className="text-white hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>
            <Link href="/shorten" className="inline-block">
              <button className="bg-white hover:bg-purple-100 text-purple-700 font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                Try Now
              </button>
            </Link>
            <Link href="/github" target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center">
                <GitHub className="mr-2 h-5 w-5" />
                GitHub
              </button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-white hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/shorten"
            className="text-white hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Shorten
          </Link>
          <Link
            href="/contact"
            className="text-white hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <div className="flex flex-col space-y-2 mt-4">
            <Link href="/shorten" className="block" onClick={toggleMenu}>
              <button className="w-full bg-white hover:bg-purple-100 text-purple-700 font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out">
                Try Now
              </button>
            </Link>
            <Link
              href="/github"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onClick={toggleMenu}
            >
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center justify-center">
                <GitHub className="mr-2 h-5 w-5" />
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

