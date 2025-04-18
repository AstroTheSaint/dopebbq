import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const AboutPage = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display text-bbq-grey-dark mb-6">
            Our Story
          </h1>
          <p className="text-xl text-bbq-grey max-w-3xl mx-auto">
            For over a decade, Dope BBQ has been bringing people together through the universal languages of music, food, and good vibes. What started as a simple gathering has evolved into NYC's most authentic community experience.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/about/mission.jpg"
              alt="Dope BBQ Community"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-display text-bbq-grey-dark mb-6">
              Our Mission
            </h2>
            <p className="text-bbq-grey mb-6">
              At Dope BBQ, we believe that great food and music have the power to transcend differences and create lasting connections. Our mission is to build bridges between communities, celebrating the diversity that makes NYC special while creating spaces where everyone feels welcome.
            </p>
            <p className="text-bbq-grey mb-6">
              Whether you're a longtime New Yorker or just visiting, whether you're a foodie or a music lover, Dope BBQ is your home. We're more than just an event – we're a movement that celebrates the universal joy of coming together.
            </p>
            <Button
              asChild
              href="/events"
              variant="default"
            >
              Join Our Next Event
            </Button>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-bbq-grey-dark text-white rounded-lg p-12 mb-20">
          <h2 className="text-3xl font-display text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-bbq-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display mb-4">Community First</h3>
              <p className="text-gray-300">
                Creating spaces where everyone feels welcome, regardless of background
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-bbq-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display mb-4">Authentic Experience</h3>
              <p className="text-gray-300">
                Delivering genuine moments through food, music, and connection
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-bbq-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display mb-4">Lasting Impact</h3>
              <p className="text-gray-300">
                Building memories and connections that extend beyond our events
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-display text-bbq-grey-dark text-center mb-12">
            The Dope BBQ Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-bbq-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display mb-4">Incredible Food</h3>
              <p className="text-bbq-grey">
                From perfectly smoked meats to creative sides, our chefs craft memorable culinary experiences
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-bbq-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display mb-4">Amazing Music</h3>
              <p className="text-bbq-grey">
                Live performances that bring energy and create the perfect soundtrack for connection
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-bbq-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display mb-4">Good Vibes</h3>
              <p className="text-bbq-grey">
                A welcoming atmosphere where strangers become friends and memories are made
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-display text-bbq-grey-dark mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-bbq-grey max-w-2xl mx-auto mb-8">
            Be part of our next event and experience the magic of Dope BBQ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              href="/events"
              variant="default"
            >
              View Events
            </Button>
            <Button
              asChild
              href="/contact"
              variant="outline"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage 