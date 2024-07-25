const foodsData = [
  {
    brandName: "Whole Foods",
    productName: "Organic Blueberries",
    category: "Fruits",
    location: "Cooler Section",
    price: 3.99,
    manufactureDate: new Date(2024, 6, 1), // July 1, 2024
    expirationDate: new Date(2024, 6, 15), // July 15, 2024
    ingredients: ["Blueberries"],
    nutritionalValue: {
      calories: 85,
      fat: 0.5,
      protein: 1.1,
      carbohydrates: 21,
    },
    comments: "Rich in antioxidants and vitamins",
  },
  {
    brandName: "Trader Joe's",
    productName: "Almond Butter",
    category: "Nut butters",
    location: "Aisle 3",
    price: 7.99,
    manufactureDate: new Date(2024, 5, 20), // June 20, 2024
    expirationDate: new Date(2025, 5, 20), // June 20, 2025
    ingredients: ["Almonds", "Salt"],
    nutritionalValue: {
      calories: 190,
      fat: 16,
      protein: 7,
      carbohydrates: 7,
    },
    comments: "No added sugars or palm oil",
  },
  {
    brandName: "Kirkland",
    productName: "Organic Quinoa",
    category: "Grains",
    location: "Aisle 6",
    price: 9.49,
    manufactureDate: new Date(2024, 4, 15), // May 15, 2024
    expirationDate: new Date(2027, 4, 15), // May 15, 2027
    ingredients: ["Quinoa"],
    nutritionalValue: {
      calories: 222,
      fat: 3.6,
      protein: 8,
      carbohydrates: 39,
    },
    comments: "High in protein and fiber",
  },
  {
    brandName: "Organic Valley",
    productName: "Free Range Eggs",
    category: "Eggs",
    location: "Cooler Section",
    price: 4.99,
    manufactureDate: new Date(2024, 6, 10), // July 10, 2024
    expirationDate: new Date(2024, 6, 30), // July 30, 2024
    ingredients: ["Eggs"],
    nutritionalValue: {
      calories: 70,
      fat: 5,
      protein: 6,
      carbohydrates: 1,
    },
    comments: "Organic and free-range",
  },
  {
    brandName: "Green Giant",
    productName: "Frozen Mixed Vegetables",
    category: "Frozen Foods",
    location: "Freezer Section",
    price: 2.99,
    manufactureDate: new Date(2024, 2, 15), // March 15, 2024
    expirationDate: new Date(2025, 2, 15), // March 15, 2025
    ingredients: ["Carrots", "Peas", "Corn", "Green Beans"],
    nutritionalValue: {
      calories: 60,
      fat: 0.2,
      protein: 2,
      carbohydrates: 14,
    },
    comments: "Perfect for quick meals",
  },
];

module.exports = foodsData;
