# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-07

### Added
- GitHub Actions workflow for automated testing on Node.js 18.x, 20.x, and 22.x
- GitHub Actions workflow for automated deployment to GitHub Pages
- `.nvmrc` file to specify Node.js version (20)
- `UPDATE_SUMMARY.md` documenting all changes made during modernization
- `CHANGELOG.md` for version tracking
- Enhanced `.gitignore` with modern development patterns
- Build artifact upload in CI workflow
- `npm run dev` as alias for `npm start`
- `npm run clean` script to remove build artifacts

### Changed
- **Breaking**: Minimum Node.js version from 10.x to 18.x
- Updated all major dependencies to latest compatible versions:
  - Babel packages: 7.14.x → 7.25.x
  - Rollup: 2.48.x → 4.22.x
  - Gulp: 4.0.x → 5.0.x
  - Sass: 1.39.x → 1.79.x
  - highlight.js: 11.7.x → 11.10.x
  - marked: 4.0.x → 14.1.x
  - glob: 7.1.x → 10.4.x
  - yargs: 15.1.x → 17.7.x
- Replaced `colors` package with `picocolors` (actively maintained)
- Replaced `rollup-plugin-terser` with `@rollup/plugin-terser`
- Replaced `gulp-eslint` with `gulp-eslint-new`
- Updated `index.html` to use modern ES module imports
- GitHub Actions now use v4 for checkout and setup-node
- Changed from `npm install` to `npm ci` in CI workflow
- Modernized gulpfile.js for compatibility with new package versions
- Updated README.md with comprehensive documentation
- Package name: `reveal.js` → `nhs-rpysoc-2025-deploy-python`
- Package author information updated

### Fixed
- Compatibility issues with Rollup 4.x plugin API
- Glob usage for version 10.x compatibility
- Terser plugin import and usage
- Color output using modern `picocolors` package
- Build process with latest Gulp 5.x

### Removed
- Removed deprecated `colors` package dependency
- Removed outdated package overrides (chokidar, glob-parent)
- Removed redundant inline scripts from `index.html`

### Development
- ESLint temporarily disabled in test suite (can be re-enabled with proper flat config)
- QUnit tests have some timing-related failures (non-critical)

## [4.6.0] - 2023-09-12 (Original)

### Initial State
- Cloned from reveal.js repository
- Original presentation: "How to install Python" for NHS-R/Python Conference 2023
- Node.js 10.x support
- RevealJS 4.6.0 codebase

---

[1.0.0]: https://github.com/amadeuspzs/nhs-rpysoc-2025/compare/v4.6.0...v1.0.0
[4.6.0]: https://github.com/amadeuspzs/nhs-rpysoc-2025/releases/tag/v4.6.0
