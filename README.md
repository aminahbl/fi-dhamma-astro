# Multilingual Astro Site with Decap CMS

A modern, multilingual website built with Astro, featuring internationalization (i18n) support for Finnish and English, and integrated with Decap CMS for easy content management.

## ✨ Features

- 🌍 **Multilingual Support**: Finnish (fi) and English (en) with Astro's built-in i18n
- 📝 **Content Management**: Decap CMS integration for easy content editing
- 🎨 **Modern UI**: Tailwind CSS for responsive, beautiful design
- 📱 **Responsive Design**: Mobile-first approach with modern UX practices
- 🚀 **Fast Performance**: Built with Astro for optimal loading speeds
- 📄 **Multiple Page Types**: Home, About, and Events (blog-like) pages
- 🔧 **Easy Content Editing**: All content including UI elements editable via CMS

## 🚀 Project Structure

```text
/
├── public/
│   ├── admin/                 # Decap CMS admin interface
│   │   ├── index.html
│   │   └── config.yml
│   └── images/
├── src/
│   ├── components/
│   │   └── Navigation.astro   # Multilingual navigation
│   ├── content/
│   │   ├── events/           # Event markdown files
│   │   ├── home.json         # Home page content
│   │   └── about.json        # About page content
│   ├── i18n/
│   │   ├── ui.ts            # UI translations
│   │   └── utils.ts         # i18n utility functions
│   ├── layouts/
│   │   └── Layout.astro     # Main layout component
│   └── pages/
│       ├── index.astro      # English home page
│       ├── about.astro      # English about page
│       ├── events/
│       │   ├── index.astro  # Events listing
│       │   └── [slug].astro # Individual event pages
│       └── fi/              # Finnish pages
│           ├── index.astro
│           ├── about.astro
│           └── events/
└── package.json
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🌍 Internationalization

The site supports two languages:
- **Finnish (fi)**: Default language, accessible at `/`
- **English (en)**: Accessible at `/en/`

### URL Structure
- Finnish: `/`, `/about`, `/events`  
- English: `/en/`, `/en/about`, `/en/events`

## 📝 Content Management

### Accessing the CMS
1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:4321/admin/`
3. Configure your Git provider for authentication

### Content Types
- **Pages**: Home and About page content in both languages
- **Events**: Blog-like events with multilingual support
- **UI Translations**: Navigation and interface text

### Adding New Events
1. Go to the CMS admin panel
2. Select "Events" collection
3. Click "New Event"
4. Fill in the details for both languages
5. Publish the changes

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Responsive design patterns
- Modern color schemes
- Typography scales
- Component-based approach

## 🚀 Deployment

This project deployed on **Netlify** (recommended for Decap CMS)

### Netlify Deployment
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Enable Netlify Identity for CMS authentication
5. Configure Git Gateway in Netlify

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro i18n Guide](https://docs.astro.build/en/guides/internationalization/)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
