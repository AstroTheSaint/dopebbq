# 🔥 Dope BBQ

Welcome to Dope BBQ - Where NYC's Food, Music, and Community Unite! 

[![Website](https://img.shields.io/badge/Website-DOPEBBQ.com-red.svg)](https://dopebbq.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 🌟 About

Dope BBQ is more than just food - it's a movement that brings together NYC's diverse communities through the universal languages of food, music, and culture. Our platform serves as the digital home for this vibrant community.

## 🚀 Features

- **Homepage**: Bold, visual-first landing with powerful call-to-action
- **Event Pages**: Playful and modern event details with lineup and ticket integration
- **Gallery**: User-submitted and official photos/videos from past BBQs
- **Merch Store**: Integrated e-commerce for Dope BBQ apparel and collectibles
- **RSVP System**: Frictionless data capture for community engagement
- **FAQ Section**: Modern, user-friendly information hub
- **Testimonials**: Social proof showcasing real community experiences
- **About/Mission**: Soulful storytelling of the Dope BBQ journey
- **Press Highlights**: Showcasing media coverage and partnerships
- **Contact Form**: Easy way for vendors and sponsors to get in touch

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context + Hooks
- **Animation**: Framer Motion
- **Forms**: React Hook Form
- **E-commerce**: Shopify/Stripe Integration
- **Media**: Cloudinary for image/video management
- **Analytics**: Google Analytics 4

## 🏗 Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable React components
│   ├── layout/         # Layout components
│   ├── ui/             # UI components
│   └── features/       # Feature-specific components
├── lib/                # Third-party library configurations
├── styles/             # Global styles and Tailwind config
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
└── assets/             # Static assets
    ├── images/         # Image assets
    ├── videos/         # Video assets
    └── icons/          # Icon assets
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/AstroTheSaint/dopebbq.git
   cd dopebbq
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_GA_ID=your-ga-id
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🎨 Design System

- **Colors**: Earth tones with vibrant pops
  - Primary: `#FF4D4D` (BBQ Red)
  - Secondary: `#2C2C2C` (Smoke Grey)
  - Accent: `#FFB800` (Warm Yellow)
  - Success: `#34D399` (Fresh Green)

- **Typography**:
  - Headlines: "Bebas Neue" - Bold, warm, organic
  - Body: "Inter" - Clean, modern sans-serif

- **Imagery**: Real moments, authentic captures
  - Motion elements
  - Slow pans
  - Short looping videos

## �� Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop screens (1024px+)
- Large displays (1440px+)

## 🔒 Security

- HTTPS enforced
- Secure form handling
- Protected API routes
- Regular security audits
- Data encryption at rest

## 📈 Performance

- Image optimization via Cloudinary
- Code splitting and lazy loading
- Server-side rendering
- Performance monitoring via Vercel Analytics
- Lighthouse score > 90

## 🤝 Contributing

We love your input! We want to make contributing to Dope BBQ as easy and transparent as possible. Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Johnny Rapp** - Founder & Lead Developer
- **Design Team** - UI/UX Excellence
- **Content Team** - Storytelling & Engagement

## 📞 Contact

- **General Inquiries**: [hello@dopebbq.com](mailto:hello@dopebbq.com)
- **Partnership Opportunities**: [partners@dopebbq.com](mailto:partners@dopebbq.com)
- **Technical Support**: [support@dopebbq.com](mailto:support@dopebbq.com)

---

Made with ❤️ in NYC by the Dope BBQ team 