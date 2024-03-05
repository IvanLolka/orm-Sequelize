const express = require('express');
const sequelize = require('./db');
const postRouter = require('./routes/postRouter');
const cors = require('cors');
const PORT = process.env.PORT || 1777;
const app = express();
app.use(cors());
app.use(express.json());

// Передаем экземпляр Sequelize в роутеры
app.use('/api', postRouter);

// Синхронизация с базой данных и запуск сервера
sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log(`Сервер стартовал на порте ${PORT}`));
  })
  .catch(error => console.error('Ошибка синхронизации с базой данных:', error));
