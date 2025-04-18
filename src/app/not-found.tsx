import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-display text-bbq-red mb-4">404</h1>
        <h2 className="text-2xl font-display text-bbq-grey-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-bbq-grey mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            href="/"
            variant="default"
          >
            Return Home
          </Button>
          <Button
            asChild
            href="/events"
            variant="outline"
          >
            View Events
          </Button>
        </div>
      </div>
    </div>
  )
} 