import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const teamMembers = [
  {
    name: 'John Smith',
    role: 'Founder & BBQ Master',
    bio: 'With over 15 years of experience in the culinary world, John brings his passion for BBQ and community building to every Dope BBQ event.',
    image: '/images/team/john.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Event Director',
    bio: 'Sarah ensures every Dope BBQ event runs smoothly, bringing her expertise in event management and community engagement.',
    image: '/images/team/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Music Curator',
    bio: 'Michael curates the perfect soundtrack for our events, bringing together local artists and creating unforgettable musical experiences.',
    image: '/images/team/michael.jpg',
  },
]

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
            Dope BBQ started as a simple idea: bring people together through the universal language of food and music. What began as a small gathering of friends has grown into NYC's premier community experience.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/about/mission.jpg"
              alt="Dope BBQ Mission"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-display text-bbq-grey-dark mb-6">
              Our Mission
            </h2>
            <p className="text-bbq-grey mb-6">
              At Dope BBQ, we believe in the power of community. Our mission is to create spaces where people can connect, share stories, and build lasting relationships over delicious food and incredible music.
            </p>
            <p className="text-bbq-grey mb-6">
              We're more than just a BBQ event – we're a movement that celebrates diversity, creativity, and the spirit of togetherness that makes NYC special.
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

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-display text-bbq-grey-dark text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display text-bbq-grey-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="text-bbq-red mb-4">{member.role}</p>
                  <p className="text-bbq-grey">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-bbq-grey-dark text-white rounded-lg p-12 mb-20">
          <h2 className="text-3xl font-display text-center mb-12">
            Our Values
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
              <h3 className="text-xl font-display mb-4">Community</h3>
              <p className="text-gray-300">
                Building meaningful connections through shared experiences
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
              <h3 className="text-xl font-display mb-4">Quality</h3>
              <p className="text-gray-300">
                Delivering exceptional food, music, and experiences
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
              <h3 className="text-xl font-display mb-4">Passion</h3>
              <p className="text-gray-300">
                Pouring our hearts into every event we create
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