"use client"

import { useState } from "react"
import { Toaster, toast } from "react-hot-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
    toast.success("Thank you for your message. We will get back to you soon!")
  }

  return (
    <main className="bg-gradient-to-b from-purple-100 to-white min-h-screen">
      <Toaster />
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight mb-6 text-center text-purple-800">
            Contact Us
          </h1>
          <p className="text-lg mb-8 text-center text-gray-600">
            Have questions or feedback? We'd love to hear from you. Fill out the form below, and we'll get back to you
            as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-300 ease-in-out"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

