# BookMyHotel - React Page

A clean, responsive landing page for BookMyHotel built with React and pure CSS (no Tailwind or other CSS frameworks).

## Features

- Pure React implementation using JSX (no TypeScript)
- Standard CSS styling without external CSS frameworks
- Responsive design that works on all devices
- Component-based architecture for better organization and reusability
- Easy to customize and extend

## Project Structure

```
bookmyhotel-react/
├── public/
│   ├── images/          # Store all images here
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── Destinations/
│   │   ├── Hotels/
│   │   └── Footer/
│   ├── data/            # Mock data for components
│   ├── pages/           # Page components
│   ├── App.js           # Main App component
│   ├── index.css        # Global styles
│   └── index.js         # Entry point
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bookmyhotel-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Adding Images

For the project to work properly, you'll need to add the following images to the `public/images/` directory:

- logo.png - The BookMyHotel logo
- bg_2.jpg - Hero background image
- hotel-1.jpg to hotel-6.jpg - Hotel images
- destination-1.jpg to destination-6.jpg - Destination images

## Customization

- To modify the color scheme, edit the CSS variables in `src/index.css`
- To add or modify components, navigate to the respective component folder
- Data for hotels, destinations, and features can be modified in the `src/data/` directory

## Deployment

To build the project for production:

```bash
npm run build
```

This will create a `build` folder with all the optimized production files.

## License

This project is open source and available under the [MIT License](LICENSE).
