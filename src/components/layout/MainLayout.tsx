import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Merch', href: '/merch' },
  { name: 'About', href: '/about' },
  { name: 'Press', href: '/press' },
];

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-bbq-grey-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="font-display text-2xl text-bbq-red">
                DOPE BBQ
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${
                        isActive
                          ? 'bg-bbq-red text-white'
                          : 'text-gray-300 hover:bg-bbq-grey hover:text-white'
                      } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu navigation={navigation} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-bbq-grey-dark text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <h3 className="font-display text-xl text-bbq-red mb-4">DOPE BBQ</h3>
              <p className="text-gray-300">
                Where friends become family. Where the spirit of community thrives.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-xl text-bbq-red mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-display text-xl text-bbq-red mb-4">Connect</h3>
              <div className="space-y-2">
                <a
                  href="mailto:hello@dopebbq.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200 block"
                >
                  hello@dopebbq.com
                </a>
                <div className="flex space-x-4">
                  {/* Social Media Icons */}
                  <a
                    href="https://instagram.com/dopebbq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="sr-only">Instagram</span>
                    {/* Instagram Icon */}
                  </a>
                  <a
                    href="https://twitter.com/dopebbq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="sr-only">Twitter</span>
                    {/* Twitter Icon */}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-center text-gray-300">
              © {new Date().getFullYear()} Dope BBQ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 