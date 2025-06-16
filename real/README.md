# Mini Real Estate Floor Selector

A modern, interactive React application that allows users to explore residential towers, browse floors, and view detailed apartment layouts. Built as a frontend prototype for real estate visualization platforms.

## 🏢 Project Overview

This application simulates a real estate browsing experience with a three-level navigation structure:
1. **Tower Selection** - Choose from three distinctive residential towers
2. **Floor Navigation** - Browse available floors within the selected tower
3. **Apartment Exploration** - View detailed layouts and specifications

## ✨ Features

### Core Functionality
- **Tower Overview**: Interactive cards displaying three towers (A, B, C) with unique characteristics
- **Floor Selection**: Dynamic floor listing (10-18 floors per tower)
- **Apartment Layouts**: 4 units per floor with thumbnail previews and metadata
- **Detailed View**: Expanded apartment information with larger layout images

### Interactive Elements
- **Smooth Animations**: Hover effects with scale transformations and background overlays
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Intuitive Navigation**: Clear breadcrumb system with back button functionality
- **Visual Feedback**: Hover states and loading animations throughout

### Bonus Features
- **Hover Interactions**: Thumbnails scale up with subtle background darkening
- **Dynamic Data Generation**: Realistic apartment data with varying specifications
- **Professional Styling**: Modern UI with gradient backgrounds and card-based layouts

## 🛠 Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Image Handling**: Next.js Image component
- **State Management**: React useState hooks

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd real-estate-floor-selector
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📱 Usage

### Navigation Flow

1. **Start at Tower Overview**
   - View three available towers with descriptions
   - Click any tower card to explore its floors

2. **Browse Floors**
   - See all available floors in the selected tower
   - Each floor shows the number of available units
   - Click any floor to view apartment layouts

3. **Explore Apartments**
   - View 4 apartment thumbnails per floor
   - Hover over thumbnails for interactive effects
   - Click any apartment for detailed specifications

4. **View Details**
   - See larger layout images
   - Review complete apartment metadata
   - Access pricing and room information

### Interactive Features

- **Hover Effects**: Move your cursor over apartment thumbnails to see scaling and background effects
- **Back Navigation**: Use the back button or breadcrumbs to navigate between levels
- **Responsive Layout**: The interface adapts to different screen sizes automatically

## 📁 Project Structure

\`\`\`
real-estate-floor-selector/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main application component
├── components/
│   └── ui/                  # shadcn/ui components
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── README.md               # Project documentation
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
\`\`\`

## 🎯 Key Components

### Data Models
- **Tower**: Represents building information with floors and styling
- **Floor**: Contains apartment collections with floor-specific data
- **Apartment**: Detailed unit information including area, rooms, and pricing

### State Management
- **selectedTower**: Currently active tower
- **selectedFloor**: Currently active floor
- **selectedApartment**: Currently viewed apartment detail
- **floors**: Dynamic floor data based on selected tower

## 🔧 Known Limitations & Tradeoffs

### Current Limitations
1. **Mock Data**: All apartment data is generated programmatically
2. **Static Images**: Uses placeholder images instead of real apartment photos
3. **No Persistence**: Application state resets on page refresh
4. **Limited Filtering**: No search or filter functionality implemented

### Design Tradeoffs
1. **Performance vs Features**: Chose client-side rendering for interactivity over SSR optimization
2. **Simplicity vs Complexity**: Implemented single-component architecture for rapid development
3. **Mock Data vs API**: Used generated data to avoid external dependencies

### Technical Decisions
- **Single Page Component**: Consolidated all views in one component for simplicity
- **Inline Styling**: Used Tailwind classes directly for faster development
- **State Management**: Chose React hooks over external state management for lightweight solution

## 🚀 Future Improvements

### Planned Enhancements
- **Real Data Integration**: Connect to property management APIs
- **Advanced Filtering**: Add search, price range, and amenity filters
- **Favorites System**: Allow users to save preferred apartments
- **Virtual Tours**: Integrate 360° apartment views
- **Booking System**: Add appointment scheduling functionality

### Technical Improvements
- **Performance Optimization**: Implement lazy loading and image optimization
- **Testing Suite**: Add comprehensive unit and integration tests
- **Accessibility**: Enhance ARIA labels and keyboard navigation
- **SEO Optimization**: Add meta tags and structured data

## 📊 Performance Considerations

- **Image Optimization**: Next.js Image component with automatic optimization
- **Responsive Images**: Placeholder system with proper aspect ratios
- **Smooth Animations**: CSS transitions with hardware acceleration
- **Efficient Rendering**: Conditional rendering to minimize DOM updates

## 🎨 Design System

### Color Palette
- **Tower A**: Blue theme (`bg-blue-500`)
- **Tower B**: Green theme (`bg-green-500`)
- **Tower C**: Purple theme (`bg-purple-500`)
- **Background**: Gradient from slate-50 to slate-100

### Typography
- **Headings**: Bold, hierarchical sizing
- **Body Text**: Clean, readable font weights
- **Metadata**: Subtle gray tones for secondary information

## 📄 License

This project is created as a technical assessment and is not intended for commercial use.

## 🤝 Contributing

This is a test project, but feedback and suggestions are welcome for learning purposes.

---

**Development Time**: ~3-4 hours
**Last Updated**: June 2024
**Status**: Complete prototype ready for review
