# Deploying Python in production: containers, kubernetes and embracing yaml

A presentation for NHS RPySoc Conference 2025, covering the deployment of Python applications in production using containers and Kubernetes.

> 📖 **Quick Links:**  
> - [Quick Start Guide](QUICKSTART.md) - Get up and running fast  
> - [Update Summary](UPDATE_SUMMARY.md) - See what changed in this version  
> - [Changelog](CHANGELOG.md) - Version history  
> - [Security](SECURITY.md) - Security considerations  

## 🎯 Topics Covered

- Creating web-based services with Python
- Building containers for reproducible deployments
- Deploying to Kubernetes clusters
- Best practices for production Python deployments

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the local development server:

```bash
npm start
```

The presentation will be available at `http://localhost:8000`

### Build

Build the presentation for production:

```bash
npm run build
```

### Testing

Run tests:

```bash
npm test
```

## 📦 Project Structure

- `index.html` - Main presentation file
- `img/` - Images and graphics
- `dist/` - Built reveal.js files (generated)
- `plugin/` - Reveal.js plugins
- `css/` - Stylesheets and themes

## 🔧 Built With

- [Reveal.js](https://revealjs.com/) - The HTML Presentation Framework
- Node.js & npm
- Gulp for build automation

## 🚢 Deployment

This presentation is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to main branch - the presentation will be automatically built and deployed

## 📝 License

MIT

## 👤 Author

**Amadeus Stevenson**

- Principal Engineer, Newton's Tree

## 🎤 Presentation History

- **NHS RPySoc Conference 2025** - November 2025
- Updated from NHS-R/Python Conference 2023 presentation

## 🛠️ Development Notes

This presentation was updated in November 2025 from the original reveal.js codebase (cloned 2023-09-12) with:

- ✅ Updated to latest dependencies (Node 18+, modern build tools)
- ✅ Modern ES modules syntax
- ✅ GitHub Actions CI/CD workflows
- ✅ Automated GitHub Pages deployment
- ✅ Updated gulp build process

---

Built with ❤️ for the NHS Python Community
 