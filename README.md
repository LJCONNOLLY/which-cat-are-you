# Which Cat Are You? - Personality Quiz

A fun, interactive personality quiz that matches you with one of 100 cat breeds based on your personality traits!

## Features

- **100 Cat Breeds**: Comprehensive database with detailed personality traits for each breed
- **15 Personality Questions**: Carefully crafted questions to assess your personality across 8 dimensions
- **Smart Matching Algorithm**: Uses sophisticated scoring to find your perfect cat match
- **Local Storage**: Saves your quiz history locally in your browser
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Share Results**: Easily share your cat match with friends
- **GitHub Pages Optimized**: Fully static site, no backend required

## Personality Traits Measured

The quiz evaluates users across 8 key personality dimensions:

1. **Energy Level** - How active and energetic you are
2. **Sociability** - How much you enjoy social interaction
3. **Independence** - How self-reliant and autonomous you prefer to be
4. **Playfulness** - Your tendency toward fun and games
5. **Affection** - How much you value physical closeness and warmth
6. **Intelligence** - Your approach to problem-solving and learning
7. **Vocalization** - How expressive and communicative you are
8. **Adaptability** - How well you handle change and new situations

## How It Works

1. **Take the Quiz**: Answer 15 multiple-choice questions about your personality
2. **Get Matched**: Our algorithm calculates your personality profile and matches it with the most compatible cat breed
3. **View Results**: See your cat match with a compatibility percentage and detailed trait breakdown
4. **Save History**: Your results are automatically saved locally, so you can review past results anytime

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox, grid, animations, and responsive design
- **Vanilla JavaScript** - No frameworks, pure ES6+ JavaScript
- **Local Storage API** - For saving quiz history
- **JSON** - Cat breeds database

## File Structure

```
which-cat-are-you/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── quiz.js             # Quiz logic and matching algorithm
├── cat-breeds.json     # Database of 100 cat breeds
└── README.md           # This file
```

## Deployment on GitHub Pages

This project is optimized for GitHub Pages deployment:

1. Push all files to your repository
2. Go to your repository Settings
3. Navigate to Pages section
4. Select your branch (usually `main` or `gh-pages`)
5. Your quiz will be live at `https://yourusername.github.io/which-cat-are-you/`

## Local Development

To run locally, simply open `index.html` in your web browser. No build process or server required!

Alternatively, you can use a simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features in Detail

### Quiz Questions
Each question presents 4 different answer choices, each contributing to different personality traits. The scoring system allows for both positive and negative trait contributions, creating a nuanced personality profile.

### Matching Algorithm
The algorithm:
1. Normalizes user scores to a 1-10 scale
2. Calculates the difference between user traits and each cat breed's traits
3. Weights certain traits (affection, sociability) more heavily
4. Finds the cat breed with the smallest overall difference
5. Calculates a compatibility percentage

### Local Storage
Quiz results are stored in the browser's local storage, allowing users to:
- View their quiz history
- See past matches and scores
- Track how their results might change over time
- Keep up to 10 most recent results

### Responsive Design
The application features:
- Mobile-first design approach
- Flexible layouts using CSS Grid and Flexbox
- Touch-friendly buttons and interface elements
- Optimized typography for all screen sizes
- Smooth animations and transitions

### Cat Breed Images
Each breed result displays an image on the results page. Currently using colorful placeholder images with breed names via placeholder.com. These are:
- Lightweight and fast loading
- Consistent and reliable
- Color-coded for visual variety
- Display the breed name for clarity

**To use real cat breed photos:**
1. Add cat breed images to an `images/` folder (400x400px recommended)
2. Name them using the breed name in lowercase with hyphens (e.g., `maine-coon.jpg`)
3. Update `cat-breeds.json` to reference local paths: `"image": "images/breed-name.jpg"`
4. Alternatively, use URLs from free image services like:
   - [The Cat API](https://thecatapi.com/)
   - [Unsplash](https://unsplash.com/s/photos/cat-breed)
   - [Pexels](https://www.pexels.com/search/cat/)
   - [Wikimedia Commons](https://commons.wikimedia.org/)

## Future Enhancements

Potential features for future versions:
- Multiple language support
- More detailed breed information and care tips
- Social media sharing with custom images
- Comparison between multiple quiz results
- Printable result certificates

## License

This project is open source and available for personal and educational use.

## Contributing

Feel free to fork this project and customize it! Some ideas:
- Add more cat breeds
- Create alternative question sets
- Implement different matching algorithms
- Add new personality dimensions
- Improve the visual design

---

Made with 🐾 for cat lovers everywhere!