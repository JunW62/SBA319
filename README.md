# Inventory Management using MongoDB Database

## Overview

This server application is designed for the management of diverse inventories, including cosmetics, foods, and household essentials. It utilizes MongoDB for database operations, providing robust data management capabilities and the flexibility of NoSQL. This project is structured to demonstrate CRUD operations, data modeling, and MongoDB indexing and validation.

## Features

- **CRUD Operations**: Manage cosmetics, foods, and household essentials.
- **Data Validation**: Implements MongoDB validation to ensure data consistency.
- **MongoDB Indexing**: Optimizes queries and improves database performance.
- **API Documentation**: Detailed documentation of all routes and operations.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/JunW62/SBA319.git
   cd your-repo
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Environment Setup**:
   ```bash
   PORT=3000
   MONGO_URI=your_mongodb_uri_here
   ```
4. **Start Server**:
   ```bash
   npm start
   ```

## API Endpoints

### Data Initialization Routes

- **Cosmetics**: `GET /api/cosmetics/seed` - Initializes cosmetics with sample data.
- **Foods**: `GET /api/foods/seed` - Initializes foods with sample data.
- **Household Essentials**: `GET /api/household/seed` - Initializes household items with sample data.

### CRUD Operations for Each Category

General Format for CRUD operations:

- `GET /api/{category}` - Retrieves all items in the category.
- `GET /api/{category}/:id` - Retrieves a single item by ID.
- `POST /api/{category}` - Creates a new item.
- `PUT /api/{category}/:id` - Updates an item by ID.
- `DELETE /api/{category}/:id` - Deletes an item by ID.

Replace `{category}` with `cosmetics`, `foods`, or `household` for specific operations.

## Bonus Objectives

- **Mongoose Usage**: The application uses Mongoose for modeling and validating data, enhancing the structure and reliability of database operations.
