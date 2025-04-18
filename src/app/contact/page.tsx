import React from 'react'
import { Button } from '@/components/ui/Button'

const ContactPage = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display text-bbq-grey-dark mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-bbq-grey">
              Interested in partnering with Dope BBQ? We'd love to hear from you!
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-bbq-grey-dark mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bbq-red focus:border-bbq-red"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-bbq-grey-dark mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bbq-red focus:border-bbq-red"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-bbq-grey-dark mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bbq-red focus:border-bbq-red"
                required
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-bbq-grey-dark mb-2"
              >
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bbq-red focus:border-bbq-red"
                required
              />
            </div>

            <div>
              <label
                htmlFor="partnershipType"
                className="block text-sm font-medium text-bbq-grey-dark mb-2"
              >
                Partnership Type
              </label>
              <select
                id="partnershipType"
                name="partnershipType"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bbq-red focus:border-bbq-red"
                required
              >
                <option value="">Select a partnership type</option>
                <option value="vendor">Food Vendor</option>
                <option value="sponsor">Event Sponsor</option>
                <option value="artist">Musical Artist</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-bbq-grey-dark mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bbq-red focus:border-bbq-red"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                variant="default"
                className="w-full md:w-auto"
              >
                Send Message
              </Button>
            </div>
          </form>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-display text-bbq-grey-dark mb-4">
              Other Ways to Connect
            </h2>
            <div className="space-y-4">
              <p className="text-bbq-grey">
                Email:{' '}
                <a
                  href="mailto:partnerships@dopebbq.com"
                  className="text-bbq-red hover:text-bbq-red-dark"
                >
                  partnerships@dopebbq.com
                </a>
              </p>
              <p className="text-bbq-grey">
                Follow us on{' '}
                <a
                  href="https://instagram.com/dopebbq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bbq-red hover:text-bbq-red-dark"
                >
                  Instagram
                </a>{' '}
                for the latest updates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage 