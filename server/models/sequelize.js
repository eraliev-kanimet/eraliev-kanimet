import {Sequelize} from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
});

(async () => {
    try {
        await sequelize.authenticate();

        console.log('Соединение с базой данных успешно установлено.');
    } catch (error) {
        console.error('Ошибка при подключении к базе данных:', error);
    }
})();

export default sequelize;