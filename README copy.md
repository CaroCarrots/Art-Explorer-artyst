# Art Explorer

An interactive web application for art students to explore artistic styles and connections between artworks. Inspired by the scrollytelling style of [Pudding.cool](https://pudding.cool).

## Features

- **Upload Artwork**: Upload an image file for analysis
- **Style Analysis**: View style tags and confidence scores for your uploaded artwork
- **Similar Images**: Explore similar artworks with adjustable similarity threshold
- **Visual Tree Diagram**: Visualize connections between artworks in a tree diagram
- **Export**: Save your exploration as a PNG image

## Tech Stack

- **Frontend Framework**: React (Next.js)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Scroll Interactions**: IntersectionObserver API
- **Tree Visualization**: D3.js
- **API Integration**: Axios

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/art-explorer.git
   cd art-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## API Endpoints

The application uses the following API endpoints:

- `POST /api/analyze`: Analyzes an uploaded image and returns style tags and similar images
- `GET /api/similar-images`: Returns similar images based on a similarity threshold

## Project Structure

```
art-explorer/
├── app/
│   ├── components/
│   │   ├── LandingSection.tsx
│   │   ├── UploadSection.tsx
│   │   ├── StyleCardSection.tsx
│   │   ├── SimilarImagesSection.tsx
│   │   ├── TreeDiagramSection.tsx
│   │   └── ExportSection.tsx
│   ├── api/
│   │   ├── analyze/
│   │   │   └── route.ts
│   │   └── similar-images/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
└── README.md
```

## Future Enhancements

- User authentication and saved explorations
- More detailed artwork metadata
- Integration with art museum APIs
- Advanced filtering options for similar artworks
- Collaborative features for art students and educators

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Pudding.cool](https://pudding.cool) for inspiration on interactive storytelling
- [Lorem Picsum](https://picsum.photos/) for placeholder images
