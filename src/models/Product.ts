import Sequalize from 'sequelize';
import sequelize from '../util/database/orm/sequelize/database';

// Define model

const Product = sequelize.define('product', {
	id: {
		type: Sequalize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},

	title: Sequalize.STRING,

	price: {
		type: Sequalize.DOUBLE,
		allowNull: false
	},

	description: {
		type: Sequalize.STRING,
		allowNull: false
	}
});

export default Product;
