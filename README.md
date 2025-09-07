# 🎨 Art Explorer - artyst

A comprehensive web application for exploring art styles and discovering similar artworks using AI-powered image similarity search.

## ✨ Features

### 🔍 **Free Exploration (Similarity Search)**
- Upload any artwork image to find visually similar pieces
- AI-powered similarity matching using CLIP model
- Interactive exploration with recursive search capabilities
- Detailed artwork information including title, artist, year, and style

### 🎭 **Style Exploration**
- Explore 4 major art movements: High Renaissance, Impressionism, Cubism, and Contemporary Art
- Interactive timeline spanning 1000+ years of art history
- Detailed style descriptions, techniques, and historical significance
- Representative artworks with real images from curated collections

### 📚 **Art Timeline**
- Comprehensive timeline from Romanesque (1000 AD) to Contemporary Art (2025)
- 19+ art movements with detailed historical context
- Interactive timeline with visual nodes and descriptions
- Professional art history terminology and international standards

### 🎨 **Modern UI/UX**
- Responsive design with smooth animations
- Beautiful gradient backgrounds and modern styling
- Interactive components with Framer Motion animations
- Mobile-friendly interface

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Python 3.8+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CaroCarrots/artyst-hackthon.git
   cd artyst-hackthon
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Set up Python backend**
   ```bash
   cd app/image_finder
   pip install -r requirements.txt
   ```

### Running the Application

1. **Start the Python backend server**
   ```bash
   cd app/image_finder
   python -m uvicorn app:app --host 0.0.0.0 --port 8000 --reload
   ```

2. **Start the Next.js frontend** (in a new terminal)
   ```bash
   npm run dev
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000

## 🏗️ Architecture

### Frontend (Next.js + TypeScript)
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Type Safety**: TypeScript

### Backend (Python + FastAPI)
- **Framework**: FastAPI
- **AI Model**: OpenAI CLIP (ViT-B/32)
- **Vector Search**: FAISS
- **Image Processing**: Pillow, OpenCV
- **API Documentation**: Auto-generated OpenAPI/Swagger

### Key Components

#### Frontend Components
- `LandingSection.tsx` - Main landing page with navigation
- `ImageSimilarityFinder.tsx` - Image upload and similarity search
- `StyleExplorer.tsx` - Art style exploration interface
- `ArtTimeline.tsx` - Interactive art history timeline
- `ComingSoonSection.tsx` - Modern coming soon page

#### Backend API Endpoints
- `POST /similarity` - Find similar artworks
- `GET /style/{style_name}/artworks` - Get artworks by style
- `GET /image/{image_path}` - Serve artwork images
- `GET /health` - Health check

## 🎯 Usage

### Similarity Search
1. Click "Free Exploration" on the homepage
2. Upload an artwork image (JPG, PNG, etc.)
3. View similar artworks with similarity scores
4. Click on any similar artwork to explore further
5. Use recursive search to discover new connections

### Style Exploration
1. Click "Style Exploration" on the homepage
2. Select from 4 available art styles:
   - **High Renaissance** (1500-1520)
   - **Impressionism** (1870s)
   - **Cubism** (1907+)
   - **Contemporary Art** (1980s+)
3. View representative artworks and detailed information
4. Explore the interactive timeline for historical context

### Art Timeline
1. Click "📅 Timeline" in the style exploration
2. Navigate through 1000+ years of art history
3. Click on timeline nodes to view detailed information
4. Learn about art movements, techniques, and historical significance

## 🛠️ Development

### Project Structure
```
artyst-hackthon/
├── app/                          # Next.js app directory
│   ├── components/              # React components
│   │   ├── explore/            # Exploration components
│   │   ├── style/              # Style-specific components
│   │   └── ...
│   ├── image_finder/           # Python backend
│   │   ├── app.py              # FastAPI application
│   │   ├── subset_images/      # Artwork images
│   │   └── subset_index/       # FAISS index and metadata
│   ├── lib/                    # Utility functions
│   ├── types/                  # TypeScript type definitions
│   └── ...
├── public/                     # Static assets
└── package.json               # Frontend dependencies
```

### Available Scripts
```bash
# Frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Backend
cd app/image_finder
python -m uvicorn app:app --reload  # Start with auto-reload
```

### Environment Setup
The application uses default configurations. For production deployment, consider setting:
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `PYTHONPATH` - Python module path

## 🎨 Art Collections

The application includes curated collections of artworks:

- **High Renaissance**: Leonardo da Vinci, Michelangelo, Raphael
- **Impressionism**: Monet, Renoir, Degas
- **Cubism**: Picasso, Braque
- **Contemporary Art**: Ai Weiwei, Damien Hirst

Each collection contains high-quality images with detailed metadata including:
- Artist name and artwork title
- Creation year and style information
- Historical significance and techniques
- Visual similarity embeddings

## 🔧 API Documentation

### Similarity Search
```http
POST /similarity
Content-Type: multipart/form-data

{
  "image": <file>,
  "count": 10
}
```

### Style Artworks
```http
GET /style/{style_name}/artworks?count=3
```

### Health Check
```http
GET /health
```

## 🌟 Key Features

### AI-Powered Similarity
- Uses OpenAI's CLIP model for visual understanding
- FAISS vector database for fast similarity search
- Handles various image formats and sizes
- Real-time similarity scoring

### Interactive Timeline
- 19+ art movements from 1000 AD to present
- Professional art history content
- Interactive nodes with detailed information
- Beautiful visual design with animations

### Modern UI/UX
- Responsive design for all devices
- Smooth animations and transitions
- Intuitive navigation and user flow
- Professional typography and color schemes

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI CLIP** for visual similarity capabilities
- **FAISS** for efficient vector search
- **FastAPI** for the robust backend framework
- **Next.js** for the modern frontend framework
- **Framer Motion** for beautiful animations
- **Tailwind CSS** for utility-first styling

## 📞 Support

For support, email [carolinezhangyunhan@gmail.com] or create an issue in the repository.

---

**Art Explorer** - Discover the hidden connections between artworks through AI-powered exploration. 🎨✨
