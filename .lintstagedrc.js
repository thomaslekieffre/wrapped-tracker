module.exports = {
  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    `pnpm eslint --fix ${filenames.join(' ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) => `pnpm prettier --write ${filenames.join(' ')}`,
}; 