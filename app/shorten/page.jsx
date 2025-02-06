"use client"

import Link from "next/link"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { ClipboardIcon, CheckIcon } from "lucide-react"

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState("")
  const [loadingToast, setLoadingToast] = useState(null)
  const [copied, setCopied] = useState(false)

  const generate = async () => {
    // Show loading toast
    const loadingId = toast.loading("Generating your short URL...")
    setLoadingToast(loadingId) // Store the toast id for dismissing later

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      })

      const result = await response.json()

      // Dismiss the loading toast
      toast.dismiss(loadingId)

      if (result.success) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        toast.success(result.message) // Show success toast
      } else {
        toast.error(result.message) // Show error toast
      }
    } catch (error) {
      toast.dismiss(loadingId) // Dismiss loading toast on error
      toast.error("Something went wrong!") // Show error toast
      console.error(error)
    } finally {
      setLoadingToast(null)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated).then(() => {
      setCopied(true)
      toast.success("Copied to clipboard!")
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Generate your short URL</h1>
          <div className="space-y-4">
            <input
              type="text"
              value={url}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="Enter your URL"
              onChange={(e) => seturl(e.target.value)}
            />
            <input
              type="text"
              value={shorturl}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="Enter your preferred short URL text"
              onChange={(e) => setshorturl(e.target.value)}
            />
            <button
              onClick={generate}
              className={`w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-150 ease-in-out ${
                loadingToast ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loadingToast !== null}
            >
              {loadingToast ? "Generating..." : "Generate"}
            </button>
          </div>

          {generated && (
            <div className="mt-6 p-4 bg-purple-50 rounded-md">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Your Short Link</h2>
              <div className="flex items-center space-x-2">
                <code className="flex-grow bg-white px-3 py-2 rounded-md text-sm font-mono">
                  <Link
                    href={generated}
                    target="_blank"
                    className="text-purple-600 hover:text-purple-800 transition duration-150 ease-in-out"
                  >
                    {generated}
                  </Link>
                </code>
                <button
                  onClick={copyToClipboard}
                  className="p-2 bg-purple-100 rounded-md hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <CheckIcon className="w-5 h-5 text-green-600" />
                  ) : (
                    <ClipboardIcon className="w-5 h-5 text-purple-600" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shorten

