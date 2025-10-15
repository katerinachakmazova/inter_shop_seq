const db = require('./src/db/models');

const dbCheckConnection = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection is successfull');
  } catch (error) {
    console.log('Something went wrong: ', error.message)
  }
};
dbCheckConnection();

const dropSomeTable = async(model) => {
  try {
    model.drop();
    console.log(`Table ${model.name} successfully dropped`);
  } catch (error) {
    console.log('Can not drop the table: ', error.message)
  }
}
// dropSomeTable()
const syncSomeTable = async(model) => {
  try {
    await model.sync({alter:true});
    console.log(`sync ${model.name} has been done`)
  } catch (error) {
    console.log('Can not sync the table: ', error.message)
  }
}
// syncSomeTable(db.Order)
const syncModels = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log('sync is succesfull')
  } catch (error) {
    console.log(`can not sync table:`, error.message);
  }
};
// syncModels()