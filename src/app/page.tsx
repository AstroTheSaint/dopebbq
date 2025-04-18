import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bbq.jpg"
            alt="Dope BBQ gathering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            Where Friends Become Family
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Join NYC's premier community experience where food, music, and connection collide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="btn btn-primary">
              Find Your City BBQ
            </Link>
            <Link href="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-display text-center mb-12">Experience Dope BBQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Food */}
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/food-feature.jpg"
                  alt="Delicious BBQ food"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-display mb-2">Soulful Food</h3>
              <p className="text-gray-600">
                Indulge in mouthwatering BBQ and soul food that brings people together.
              </p>
            </div>

            {/* Music */}
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/music-feature.jpg"
                  alt="Live music performance"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-display mb-2">Vibrant Music</h3>
              <p className="text-gray-600">
                Feel the rhythm with live performances from talented artists.
              </p>
            </div>

            {/* Community */}
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/community-feature.jpg"
                  alt="Community gathering"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-display mb-2">Genuine Connection</h3>
              <p className="text-gray-600">
                Build lasting relationships in a welcoming, inclusive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bbq-grey-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display mb-6">Ready to Join the Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of NYC's most vibrant cultural gathering. RSVP now for our next event.
          </p>
          <Link href="/events" className="btn btn-primary">
            RSVP Now
          </Link>
        </div>
      </section>
    </div>
  )
} 