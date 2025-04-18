import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MobileMenuProps {
  navigation: Array<{ name: string; href: string }>
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-bbq-grey focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        {!isOpen ? (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* Mobile menu panel */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 left-0 right-0 bg-bbq-grey-dark`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isActive
                    ? 'bg-bbq-red text-white'
                    : 'text-gray-300 hover:bg-bbq-grey hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu 