import Image from "next/image"

export default function About() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight mb-6">
              About Bitlinks
            </h1>
            <p className="text-lg mb-6">
              Bitlinks is a cutting-edge URL shortening service designed with simplicity and privacy in mind. We believe
              in making the internet more accessible and user-friendly, one short link at a time.
            </p>
            <p className="text-lg mb-6">
              Our mission is to provide a fast, reliable, and secure way to shorten URLs without compromising user
              privacy or requiring unnecessary personal information.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Why Choose Bitlinks?</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>No account required - shorten URLs instantly</li>
              <li>Privacy-focused - we don't track or store personal data</li>
              <li>Lightning-fast redirects</li>
              <li>Secure and reliable service</li>
              <li>Open-source project - transparent and community-driven</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="relative aspect-square">
              <Image
                src="/vector.jpg"
                alt="Team working on computers"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

