import { Sequelize } from 'sequelize-typescript';

const db = new Sequelize('bachelorproject', 'admin', '007kokot', {
	dialect: 'mysql',
	dialectModule: require('mysql2'),
	host: '193.105.159.179'
});

export default db;
