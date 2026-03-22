# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- HSL conversion functions: `hexToHsl`, `hslToHex`, `rgbToHsl`, `hslToRgb`
- RGBA support: `hexToRgba`, `rgbaToHex` (8-digit hex)
- Color mixing module: `mix.hex`, `mix.rgb`
- TypeScript type declarations (`index.d.ts`)
- Jest test suite (68 tests across all modules)
- GitHub Actions CI pipeline (Node.js 18, 20, 22)
- GitHub Actions release workflow (auto-publish to npm on version tags)
- ESLint and Prettier configuration
- `engines` field (Node.js >=18)
- `files` field for lean npm publishes

### Fixed
- Null guard crashes in `Invert` and `Lightness` modules on invalid input
- `Clearer` and `Darker` rgb() functions now validate the `percentage` argument
- README examples corrected from ES module `import` to CommonJS `require`

### Changed
- Reorganized source files into `src/` with `src/utils/` for shared utilities
- Pre-compiled regex patterns in `convert` for better performance
- Removed self-referencing `"colorpedia": "file:"` dependency from package.json

## [1.0.5] - 2024-10-12

### Added
- Initial release with `convert`, `clearer`, `darker`, `invert`, and `lightness` modules
