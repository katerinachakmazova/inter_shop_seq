const http = require('http');
// ========================
require('dotenv').config();
// ========================
const app = require('./src/app');
const db = require('./src/db/models');

// create server with HTTP and Express
const PORT = process.env.PORT || 5000;
const HOST_NAME = process.env.DB_HOST || '127.0.0.1';
const server = http.createServer(app);
server.listen(PORT, HOST_NAME, () => {
  console.log(`Server running at http://${HOST_NAME}:${PORT}`);
});

const syncModels = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log('sync is succesfull');
  } catch (error) {
    console.log(`can not sync table:`, error.message);
  }
};
// syncModels()
