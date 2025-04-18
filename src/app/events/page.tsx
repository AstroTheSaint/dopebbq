import React from 'react'
import { Button } from '@/components/ui/Button'

// This would typically come from an API or database
const upcomingEvents = [
  {
    id: 1,
    title: 'Summer BBQ Bash',
    date: '2024-07-15',
    time: '2:00 PM - 10:00 PM',
    location: 'Prospect Park, Brooklyn',
    description: 'Join us for our biggest BBQ of the summer! Live music, food vendors, and community vibes.',
    image: '/images/events/summer-bbq.jpg',
    ticketLink: 'https://eventbrite.com/e/summer-bbq-bash',
  },
  {
    id: 2,
    title: 'Neighborhood Grill Night',
    date: '2024-08-01',
    time: '6:00 PM - 11:00 PM',
    location: 'Fort Greene Park, Brooklyn',
    description: 'A cozy evening of grilling and good company in the heart of Fort Greene.',
    image: '/images/events/neighborhood-grill.jpg',
    ticketLink: 'https://eventbrite.com/e/neighborhood-grill-night',
  },
]

export default function EventsPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display text-bbq-grey-dark mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl text-bbq-grey max-w-2xl mx-auto">
            Join us for unforgettable moments of food, music, and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-display text-bbq-grey-dark mb-2">
                  {event.title}
                </h2>
                <div className="space-y-2 mb-4">
                  <p className="text-bbq-grey">
                    <span className="font-medium">Date:</span>{' '}
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-bbq-grey">
                    <span className="font-medium">Time:</span> {event.time}
                  </p>
                  <p className="text-bbq-grey">
                    <span className="font-medium">Location:</span> {event.location}
                  </p>
                </div>
                <p className="text-bbq-grey mb-6">{event.description}</p>
                <Button
                  asChild
                  href={event.ticketLink}
                  variant="default"
                  className="w-full sm:w-auto"
                >
                  Get Tickets
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-bbq-grey-dark text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-display mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming events,
            exclusive offers, and community news.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md text-bbq-grey-dark focus:outline-none focus:ring-2 focus:ring-bbq-red"
            />
            <Button type="submit" variant="default">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
} 