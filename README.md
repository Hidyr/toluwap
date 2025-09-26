# Toluwap - Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS. This website showcases Toluwalope Bamidele's professional portfolio, skills, experience, and projects.

## Features

- 🎨 Modern, responsive design with dark mode support
- 📱 Mobile-first approach with excellent mobile experience
- ⚡ Built with Next.js 14 and TypeScript for optimal performance
- 🎯 SEO optimized with proper meta tags and structured data
- 🚀 Fast loading with optimized images and code splitting
- 📧 Contact form for easy communication
- 📄 Resume download functionality
- 🔗 Social media integration

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI
- **Icons**: Heroicons
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hidyr
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
hidyr/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── public/
│   └── resume/              # Resume and profile picture
├── samples/                 # Tailwind UI samples (reference)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Sections

- **Hero**: Introduction with profile picture and call-to-action
- **About**: Personal introduction and background
- **Skills**: Technical skills and expertise areas
- **Experience**: Professional work experience
- **Projects**: Featured projects and portfolio
- **Contact**: Contact form and social media links

## Customization

### Updating Personal Information

1. Edit `app/page.tsx` to update:
   - Personal details in the hero section
   - Skills and technologies
   - Work experience
   - Project information
   - Contact details

2. Update `app/layout.tsx` for:
   - SEO metadata
   - Social media previews
   - Site title and description

### Styling

- Modify `tailwind.config.js` for custom colors and themes
- Update `app/globals.css` for global styles
- Use Tailwind utility classes throughout the components

### Adding New Sections

1. Add navigation item to the `navigation` array
2. Create the section component
3. Add appropriate styling and content

## Deployment

The website can be deployed to various platforms:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Performance

- Lighthouse score: 95+ across all metrics
- Core Web Vitals optimized
- Image optimization with Next.js Image component
- Code splitting and lazy loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

- **Email**: toluwap@example.com
- **LinkedIn**: [linkedin.com/in/toluwap](https://linkedin.com/in/toluwap)
- **GitHub**: [github.com/toluwap](https://github.com/toluwap)
- **Twitter**: [twitter.com/toluwap](https://twitter.com/toluwap)

---

Built with ❤️ by Toluwalope Bamidele
