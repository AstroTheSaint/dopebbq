import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

// This would typically be fetched from the Instagram API
// For now, we'll use placeholder data
const instagramPosts = [
  {
    id: '1',
    imageUrl: '/images/instagram/post1.jpg',
    caption: 'Summer vibes at our latest BBQ! 🌞 #DopeBBQ #NYC',
    likes: 245,
    comments: 18,
    link: 'https://www.instagram.com/p/example1/',
  },
  {
    id: '2',
    imageUrl: '/images/instagram/post2.jpg',
    caption: 'The food was 🔥 at our Brooklyn gathering! #DopeBBQ #Foodie',
    likes: 312,
    comments: 24,
    link: 'https://www.instagram.com/p/example2/',
  },
  {
    id: '3',
    imageUrl: '/images/instagram/post3.jpg',
    caption: 'Amazing community vibes! #DopeBBQ #Community',
    likes: 189,
    comments: 15,
    link: 'https://www.instagram.com/p/example3/',
  },
  {
    id: '4',
    imageUrl: '/images/instagram/post4.jpg',
    caption: 'Live music was incredible! #DopeBBQ #Music',
    likes: 276,
    comments: 22,
    link: 'https://www.instagram.com/p/example4/',
  },
  {
    id: '5',
    imageUrl: '/images/instagram/post5.jpg',
    caption: 'Join us at our next event! #DopeBBQ #NYC',
    likes: 198,
    comments: 16,
    link: 'https://www.instagram.com/p/example5/',
  },
  {
    id: '6',
    imageUrl: '/images/instagram/post6.jpg',
    caption: 'The best BBQ in NYC! #DopeBBQ #Food',
    likes: 234,
    comments: 19,
    link: 'https://www.instagram.com/p/example6/',
  },
]

const InstagramFeed = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display text-bbq-grey-dark mb-4">
            Follow Our Journey
          </h2>
          <p className="text-xl text-bbq-grey max-w-2xl mx-auto">
            Check out the latest moments from our community on Instagram
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.caption}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <p className="text-sm line-clamp-3">{post.caption}</p>
                    <div className="flex items-center justify-center mt-2 space-x-4">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {post.likes}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            href="https://www.instagram.com/dopebbq_/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Follow Us on Instagram
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InstagramFeed 