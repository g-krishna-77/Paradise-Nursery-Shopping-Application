# 🌿 Paradise Nursery Shopping Application

A modern, responsive e-commerce shopping cart application for an online plant nursery built with React, Redux Toolkit, and Vite.

![Paradise Nursery](https://images.unsplash.com/photo-1466781783364-36c955e42a7f?q=80&w=600&auto=format&fit=crop)

## 🚀 Live Demo

[View Live Application](https://g-krishna-77.github.io/Paradise-Nursery-Shopping-Application/)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Redux State Management](#redux-state-management)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Landing Page
- Beautiful hero section with background image
- "Get Started" button to enter the shopping experience
- Responsive design for all devices

### Product Listing
- **5 Plant Categories:**
  - Air Purifying Plants
  - Aromatic Fragrant Plants
  - Insect Repellent Plants
  - Medicinal Plants
  - Low Maintenance Plants
- Product cards displaying:
  - High-quality plant images
  - Plant name and description
  - Price information
  - "Add to Cart" button
- Dynamic button state (changes to "Added to Cart" after adding)
- Real-time cart quantity badge in navigation

### Shopping Cart
- View all added items with thumbnails
- **Quantity Management:**
  - Increment (+) button to increase quantity
  - Decrement (-) button to decrease quantity
  - Automatic removal when quantity reaches 0
- **Price Calculations:**
  - Individual item subtotals
  - Total cart amount (auto-updates)
- Delete button to remove items instantly
- Continue Shopping button
- Checkout button (placeholder for future implementation)

### Navigation
- Sticky navigation bar with green theme
- Links to:
  - Paradise Nursery (Home)
  - Plants (Product Listing)
  - Cart (Shopping Cart)
- Cart icon with quantity badge

## 🛠️ Technologies Used

- **Frontend Framework:** React 18.3.1
- **State Management:** Redux Toolkit 2.0.1
- **Build Tool:** Vite 5.4.10
- **Styling:** CSS3
- **Deployment:** GitHub Pages
- **Version Control:** Git & GitHub

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Steps

1. **Clone the repository**

```
git clone https://github.com/g-krishna-77/Paradise-Nursery-Shopping-Application.git
cd Paradise-Nursery-Shopping-Application
```

2. **Install dependencies**

```
npm install
```

3. **Start development server**

```
npm run dev
```

4. **Open in browser**

Navigate to `http://localhost:5173`

## 🎮 Usage

### Running Locally

```
# Development mode with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Building for Production

```
npm run build
```

The optimized files will be in the `dist` folder.

## 📁 Project Structure

```
Paradise-Nursery-Shopping-Application/
├── src/
│   ├── App.jsx                 # Main app component with landing page
│   ├── App.css                 # Landing page styles
│   ├── main.jsx                # Entry point with Redux Provider
│   ├── index.css               # Global styles
│   ├── store.js                # Redux store configuration
│   ├── CartSlice.jsx           # Redux slice for cart management
│   ├── ProductList.jsx         # Product listing component
│   ├── ProductList.css         # Product listing styles
│   ├── CartItem.jsx            # Shopping cart component
│   └── CartItem.css            # Shopping cart styles
├── public/
│   └── vite.svg                # Favicon
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## 🔄 Redux State Management

### Store Structure

```
{
  cart: {
    items: [
      {
        name: "Plant Name",
        image: "image-url",
        cost: "$15",
        quantity: 2
      }
    ]
  }
}
```

### Actions

- **addItem:** Add a new plant to cart or increment quantity if exists
- **removeItem:** Remove a plant from cart completely
- **updateQuantity:** Update quantity of a specific plant

### Usage Example

```
// Add item to cart
dispatch(addItem({ name, image, cost }));

// Remove item from cart
dispatch(removeItem(itemName));

// Update quantity
dispatch(updateQuantity({ name, quantity }));
```

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Install gh-pages**

```
npm install gh-pages --save-dev
```

2. **Update vite.config.js**

```
export default defineConfig({
  base: "/Paradise-Nursery-Shopping-Application",
  plugins: [react()],
})
```

3. **Add deployment scripts to package.json**

```
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. **Deploy**

```
npm run deploy
```

5. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save and wait 1-2 minutes

Your site will be live at: `https://g-krishna-77.github.io/Paradise-Nursery-Shopping-Application/`

## 📸 Screenshots

### Landing Page
Beautiful hero section with "Get Started" button

### Product Listing
Grid layout showcasing plants in different categories

### Shopping Cart
Complete cart management with quantity controls

## 🌟 Key Features Implemented

✅ **Component-Based Architecture** - Modular React components  
✅ **State Management** - Redux Toolkit for global state  
✅ **Responsive Design** - Works on mobile, tablet, and desktop  
✅ **Dynamic Rendering** - Maps over arrays to generate components  
✅ **Event Handling** - User interactions (add to cart, increment, decrement)  
✅ **Conditional Rendering** - Shows/hides components based on state  
✅ **Real-time Updates** - Cart quantity and totals update instantly  
✅ **Button States** - Disabled state after adding to cart  
✅ **Price Calculations** - Automatic subtotal and total calculations  

## 🔮 Future Enhancements

- [ ] User authentication
- [ ] Product search and filtering
- [ ] Wishlist functionality
- [ ] Checkout and payment integration
- [ ] Order history
- [ ] Product reviews and ratings
- [ ] Admin panel for product management
- [ ] Backend API integration
- [ ] Database integration
- [ ] Email notifications

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.