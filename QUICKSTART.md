# Quick Start Guide

## Prerequisites

- Node.js 18.x or higher (20.x LTS recommended)
- npm 8.x or higher

## First Time Setup

```bash
# Install dependencies
npm install

# Build the presentation
npm run build
```

## Development

```bash
# Start the development server
npm start
# or
npm run dev

# Open http://localhost:8000 in your browser
```

The development server will watch for changes and reload automatically.

## Building for Production

```bash
# Build optimized files
npm run build

# Create a distributable package
npm run package
```

Built files will be in the `dist/` directory.

## Deployment

### GitHub Pages (Automatic)

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your presentation will be available at your GitHub Pages URL

### Manual Deployment

1. Run `npm run build`
2. Deploy the entire directory to your web server
3. Ensure `index.html` is served as the entry point

## Common Tasks

### Editing Content

Edit `index.html` to modify slides:

```html
<section>
    <h2>Your Slide Title</h2>
    <p>Your content here</p>
</section>
```

### Adding Images

1. Place images in the `img/` folder
2. Reference them in your slides:

```html
<img src="img/your-image.png" alt="Description">
```

### Changing Theme

Edit `index.html` line 19:

```html
<link rel="stylesheet" href="dist/theme/serif.css" id="theme">
```

Available themes in `dist/theme/`:
- beige, black, blood, league, moon, night, serif, simple, sky, solarized, white

### Keyboard Shortcuts (During Presentation)

- `→` / `Space`: Next slide
- `←`: Previous slide
- `f`: Fullscreen
- `s`: Speaker notes
- `o`: Overview mode
- `b` / `.`: Pause/blackout
- `Esc`: Exit fullscreen/overview

## Troubleshooting

### Port 8000 is already in use

```bash
# Start on a different port
npm start -- --port=8001
```

### Build fails

```bash
# Clean and rebuild
npm run clean
npm install
npm run build
```

### Node version issues

```bash
# If using nvm (Node Version Manager)
nvm use 20
npm install
```

## Project Structure

```
├── index.html              # Main presentation file
├── img/                    # Images and media
├── dist/                   # Built files (generated)
│   ├── reveal.js          # Main reveal.js bundle
│   ├── reveal.css         # Core styles
│   └── theme/             # Theme stylesheets
├── plugin/                 # Reveal.js plugins
├── css/                    # Source stylesheets
└── js/                     # Source JavaScript
```

## Tips

1. **Speaker Notes**: Add notes to any slide:
   ```html
   <section>
       <h2>Slide Content</h2>
       <aside class="notes">
           Your speaker notes here
       </aside>
   </section>
   ```

2. **Fragments** (step-by-step reveals):
   ```html
   <ul>
       <li class="fragment">First item</li>
       <li class="fragment">Second item</li>
   </ul>
   ```

3. **Vertical Slides**:
   ```html
   <section>
       <section>Main slide</section>
       <section>Sub-slide (press down arrow)</section>
   </section>
   ```

4. **Code Highlighting**:
   ```html
   <pre><code data-line-numbers="1-2|3-4">
   def hello():
       print("Hello")
       
   hello()
   </code></pre>
   ```

## Documentation

- [RevealJS Documentation](https://revealjs.com/)
- [Markdown Support](https://revealjs.com/markdown/)
- [Configuration Options](https://revealjs.com/config/)

## Support

For issues specific to this presentation, open an issue on GitHub.
For RevealJS questions, see the [RevealJS documentation](https://revealjs.com/).

---
Updated: November 7, 2025
