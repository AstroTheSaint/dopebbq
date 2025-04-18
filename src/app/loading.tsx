import React from 'react'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <p className="text-bbq-grey-dark font-medium">Loading...</p>
      </div>
    </div>
  )
} 