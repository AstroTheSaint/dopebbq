'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-display text-bbq-red mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-bbq-grey-dark mb-6">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => reset()} variant="default">
            Try again
          </Button>
          <Button
            asChild
            href="/"
            variant="outline"
          >
            Go home
          </Button>
        </div>
      </div>
    </div>
  )
} 