import someObject from './connection.json';
import { Sequelize } from 'sequelize-typescript';

export default someObject.dev == 0
	? new Sequelize(
			someObject.prod.databaseName,
			someObject.prod.username,
			someObject.prod.password,
			{
				dialect: 'mysql',
				dialectModule: require('mysql2'),
				host: someObject.prod.hostname
			}
	  )
	: new Sequelize('bachelorproject', 'admin', '007kokot', {
			dialect: 'mysql',
			dialectModule: require('mysql2'),
			host: '193.105.159.179'
	  });
