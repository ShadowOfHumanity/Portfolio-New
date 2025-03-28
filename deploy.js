import { publish } from 'gh-pages';
import fs from 'fs';

// Create .nojekyll file to bypass Jekyll processing
fs.writeFileSync('./dist/.nojekyll', '');

// Use custom configuration to handle long filenames
publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/ShadowOfHumanity/Portfolio-New.git',
  message: 'Auto-deploy with custom script',
  dotfiles: true,
  // Use shorter path for git commands
  add: true,
}, (err) => {
  if (err) {
    console.error('Error deploying to GitHub Pages:', err);
    return;
  }
  console.log('Successfully deployed to GitHub Pages!');
});
