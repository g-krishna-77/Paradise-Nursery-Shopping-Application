import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
  items: [], // Array to hold cart items
};

// Create a slice for the shopping cart
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        // If item exists, increment its quantity
        existingItem.quantity++;
      } else {
        // If item doesn't exist, add it to the cart with quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    
    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      // Filter out the item with the matching name
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    // Reducer to update the quantity of an item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item to update
      const itemToUpdate = state.items.find(item => item.name === name);
      
      if (itemToUpdate) {
        // Update the quantity if item is found
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export action creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer as default
export default cartSlice.reducer;
