module.exports = {
  items_categories: [
    { id: 1, title: "Electronics", description: "Gadgets and digital devices", created_at: new Date(), updated_at: new Date() },
    { id: 2, title: "Home Appliances", description: "Household electrical devices", created_at: new Date(), updated_at: new Date() },
    { id: 3, title: "Computers & Components", description: "PCs, laptops, and parts", created_at: new Date(), updated_at: new Date() },
    { id: 4, title: "Sports Equipment", description: "Products for sports and fitness", created_at: new Date(), updated_at: new Date() },
    { id: 5, title: "Plumbing", description: "Bathroom and kitchen fixtures", created_at: new Date(), updated_at: new Date() },
  ],

  items_types: [
    { id: 1, title: "Smartphones", description: "Mobile phones", category_id: 1, created_at: new Date(), updated_at: new Date() },
    { id: 2, title: "Washing Machines", description: "Home laundry equipment", category_id: 2, created_at: new Date(), updated_at: new Date() },
    { id: 3, title: "Laptops", description: "Portable computers", category_id: 3, created_at: new Date(), updated_at: new Date() },
    { id: 4, title: "Fitness Machines", description: "Home training equipment", category_id: 4, created_at: new Date(), updated_at: new Date() },
    { id: 5, title: "Mixers & Faucets", description: "Water mixers and fittings", category_id: 5, created_at: new Date(), updated_at: new Date() },
  ],

  brands: [
    { id: 1, title: "Samsung", description: "Electronics and home appliances", created_at: new Date(), updated_at: new Date() },
    { id: 2, title: "LG", description: "Home appliances and displays", created_at: new Date(), updated_at: new Date() },
    { id: 3, title: "Asus", description: "Computers and hardware", created_at: new Date(), updated_at: new Date() },
    { id: 4, title: "Xiaomi", description: "Smartphones and accessories", created_at: new Date(), updated_at: new Date() },
    { id: 5, title: "Bosch", description: "Appliances and tools", created_at: new Date(), updated_at: new Date() },
  ],

  models: [
    { id: 1, title: "Galaxy S24", description: "Flagship smartphone", brand_id: 1, created_at: new Date(), updated_at: new Date() },
    { id: 2, title: "LG WashPro 500", description: "Smart washing machine", brand_id: 2, created_at: new Date(), updated_at: new Date() },
    { id: 3, title: "Asus ZenBook 15", description: "Premium ultrabook", brand_id: 3, created_at: new Date(), updated_at: new Date() },
    { id: 4, title: "Xiaomi Mi Band 8", description: "Fitness tracker", brand_id: 4, created_at: new Date(), updated_at: new Date() },
    { id: 5, title: "Bosch EcoMix 300", description: "Home blender", brand_id: 5, created_at: new Date(), updated_at: new Date() },
    { id: 6, title: "Galaxy Tab S9", description: "Android tablet", brand_id: 1, created_at: new Date(), updated_at: new Date() },
    { id: 7, title: "LG SmartCool AC", description: "Smart air conditioner", brand_id: 2, created_at: new Date(), updated_at: new Date() },
    { id: 8, title: "Asus ROG Strix", description: "Gaming laptop", brand_id: 3, created_at: new Date(), updated_at: new Date() },
    { id: 9, title: "Xiaomi Redmi Note 13", description: "Mid-range smartphone", brand_id: 4, created_at: new Date(), updated_at: new Date() },
    { id: 10, title: "Bosch DrillMax", description: "Electric drill", brand_id: 5, created_at: new Date(), updated_at: new Date() },
    { id: 11, title: "Galaxy Watch 7", description: "Smartwatch", brand_id: 1, created_at: new Date(), updated_at: new Date() },
    { id: 12, title: "LG FridgeMax", description: "Refrigerator", brand_id: 2, created_at: new Date(), updated_at: new Date() },
    { id: 13, title: "Asus ProArt Monitor", description: "Professional display", brand_id: 3, created_at: new Date(), updated_at: new Date() },
    { id: 14, title: "Xiaomi Scooter 4", description: "Electric scooter", brand_id: 4, created_at: new Date(), updated_at: new Date() },
    { id: 15, title: "Bosch WaterFix", description: "Smart faucet system", brand_id: 5, created_at: new Date(), updated_at: new Date() },
  ],

  stores: [
    { id: 1, title: "TechMarket Kyiv", description: "Central warehouse in Kyiv", created_at: new Date(), updated_at: new Date() },
    { id: 2, title: "TechMarket Lviv", description: "Regional store in Lviv", created_at: new Date(), updated_at: new Date() },
    { id: 3, title: "TechMarket Odesa", description: "Regional store in Odesa", created_at: new Date(), updated_at: new Date() },
    { id: 4, title: "TechMarket Dnipro", description: "Regional store in Dnipro", created_at: new Date(), updated_at: new Date() },
    { id: 5, title: "TechMarket Kharkiv", description: "Regional store in Kharkiv", created_at: new Date(), updated_at: new Date() },
  ],

  customers: [
    { id: 1, full_name: "John Smith", email: "john.smith@example.com", created_at: new Date(), updated_at: new Date() },
    { id: 2, full_name: "Emily Johnson", email: "emily.johnson@example.com", created_at: new Date(), updated_at: new Date() },
    { id: 3, full_name: "Michael Brown", email: "michael.brown@example.com", created_at: new Date(), updated_at: new Date() },
    { id: 4, full_name: "Sophia Davis", email: "sophia.davis@example.com", created_at: new Date(), updated_at: new Date() },
    { id: 5, full_name: "Daniel Miller", email: "daniel.miller@example.com", created_at: new Date(), updated_at: new Date() },
    { id: 6, full_name: "Olivia Wilson", email: "olivia.wilson@example.com", created_at: new Date(), updated_at: new Date() },
    { id: 7, full_name: "William Taylor", email: "william.taylor@example.com", created_at: new Date(), updated_at: new Date() },
  ],
  items: [
    { id: 1, type_id: 1, model_id: 1, price: 899, store_id: 1, amount: 25, created_at: new Date(), updated_at: new Date() },
    { id: 2, type_id: 1, model_id: 9, price: 499, store_id: 2, amount: 30, created_at: new Date(), updated_at: new Date() },
    { id: 3, type_id: 3, model_id: 3, price: 1299, store_id: 1, amount: 10, created_at: new Date(), updated_at: new Date() },
    { id: 4, type_id: 3, model_id: 8, price: 1599, store_id: 3, amount: 8, created_at: new Date(), updated_at: new Date() },
    { id: 5, type_id: 2, model_id: 2, price: 699, store_id: 4, amount: 15, created_at: new Date(), updated_at: new Date() },
    { id: 6, type_id: 2, model_id: 12, price: 899, store_id: 2, amount: 9, created_at: new Date(), updated_at: new Date() },
    { id: 7, type_id: 5, model_id: 15, price: 249, store_id: 5, amount: 20, created_at: new Date(), updated_at: new Date() },
    { id: 8, type_id: 5, model_id: 10, price: 179, store_id: 1, amount: 25, created_at: new Date(), updated_at: new Date() },
    { id: 9, type_id: 4, model_id: 14, price: 699, store_id: 3, amount: 7, created_at: new Date(), updated_at: new Date() },
    { id: 10, type_id: 1, model_id: 11, price: 349, store_id: 4, amount: 40, created_at: new Date(), updated_at: new Date() },
    { id: 11, type_id: 3, model_id: 13, price: 799, store_id: 2, amount: 11, created_at: new Date(), updated_at: new Date() },
    { id: 12, type_id: 2, model_id: 7, price: 999, store_id: 5, amount: 13, created_at: new Date(), updated_at: new Date() },
    { id: 13, type_id: 5, model_id: 5, price: 129, store_id: 3, amount: 17, created_at: new Date(), updated_at: new Date() },
    { id: 14, type_id: 4, model_id: 4, price: 99, store_id: 1, amount: 60, created_at: new Date(), updated_at: new Date() },
    { id: 15, type_id: 1, model_id: 6, price: 799, store_id: 2, amount: 22, created_at: new Date(), updated_at: new Date() },
  ],

  orders: [
    { id: 1, code: 1001, customer_id: 1, date: new Date(2025, 9, 1), amount: 1798, paid: true, created_at: new Date(), updated_at: new Date() },
    { id: 2, code: 1002, customer_id: 2, date: new Date(2025, 9, 3), amount: 2499, paid: false, created_at: new Date(), updated_at: new Date() },
    { id: 3, code: 1003, customer_id: 3, date: new Date(2025, 9, 5), amount: 999, paid: true, created_at: new Date(), updated_at: new Date() },
    { id: 4, code: 1004, customer_id: 4, date: new Date(2025, 9, 7), amount: 699, paid: true, created_at: new Date(), updated_at: new Date() },
    { id: 5, code: 1005, customer_id: 5, date: new Date(2025, 9, 8), amount: 1799, paid: false, created_at: new Date(), updated_at: new Date() },
    { id: 6, code: 1006, customer_id: 6, date: new Date(2025, 9, 10), amount: 499, paid: true, created_at: new Date(), updated_at: new Date() },
    { id: 7, code: 1007, customer_id: 7, date: new Date(2025, 9, 12), amount: 1299, paid: false, created_at: new Date(), updated_at: new Date() },
    { id: 8, code: 1008, customer_id: 3, date: new Date(2025, 9, 13), amount: 899, paid: true, created_at: new Date(), updated_at: new Date() },
    { id: 9, code: 1009, customer_id: 2, date: new Date(2025, 9, 15), amount: 249, paid: true, created_at: new Date(), updated_at: new Date() },
    { id: 10, code: 1010, customer_id: 1, date: new Date(2025, 9, 16), amount: 2598, paid: false, created_at: new Date(), updated_at: new Date() },
    { id: 11, code: 1011, customer_id: 5, date: new Date(2025, 9, 18), amount: 999, paid: true, created_at: new Date(), updated_at: new Date() },
    { id: 12, code: 1012, customer_id: 6, date: new Date(2025, 9, 20), amount: 699, paid: false, created_at: new Date(), updated_at: new Date() },
    { id: 13, code: 1013, customer_id: 4, date: new Date(2025, 9, 21), amount: 1599, paid: true, created_at: new Date(), updated_at: new Date() },
    { id: 14, code: 1014, customer_id: 7, date: new Date(2025, 9, 23), amount: 499, paid: false, created_at: new Date(), updated_at: new Date() },
    { id: 15, code: 1015, customer_id: 2, date: new Date(2025, 9, 25), amount: 349, paid: true, created_at: new Date(), updated_at: new Date() },
  ],

  items_orders: [
    { item_id: 1, order_id: 1, created_at: new Date(), updated_at: new Date() },
    { item_id: 15, order_id: 1, created_at: new Date(), updated_at: new Date() },

    { item_id: 3, order_id: 2, created_at: new Date(), updated_at: new Date() },
    { item_id: 4, order_id: 2, created_at: new Date(), updated_at: new Date() },

    { item_id: 12, order_id: 3, created_at: new Date(), updated_at: new Date() },

    { item_id: 5, order_id: 4, created_at: new Date(), updated_at: new Date() },

    { item_id: 2, order_id: 5, created_at: new Date(), updated_at: new Date() },
    { item_id: 11, order_id: 5, created_at: new Date(), updated_at: new Date() },

    { item_id: 10, order_id: 6, created_at: new Date(), updated_at: new Date() },

    { item_id: 8, order_id: 7, created_at: new Date(), updated_at: new Date() },
    { item_id: 7, order_id: 7, created_at: new Date(), updated_at: new Date() },

    { item_id: 1, order_id: 8, created_at: new Date(), updated_at: new Date() },

    { item_id: 13, order_id: 9, created_at: new Date(), updated_at: new Date() },

    { item_id: 3, order_id: 10, created_at: new Date(), updated_at: new Date() },
    { item_id: 4, order_id: 10, created_at: new Date(), updated_at: new Date() },

    { item_id: 6, order_id: 11, created_at: new Date(), updated_at: new Date() },

    { item_id: 5, order_id: 12, created_at: new Date(), updated_at: new Date() },

    { item_id: 9, order_id: 13, created_at: new Date(), updated_at: new Date() },

    { item_id: 2, order_id: 14, created_at: new Date(), updated_at: new Date() },

    { item_id: 10, order_id: 15, created_at: new Date(), updated_at: new Date() },
  ],
};

