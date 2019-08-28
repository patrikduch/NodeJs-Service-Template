import sequelize from '../util/database/orm/sequelize/database';

import { Model, DataTypes } from 'sequelize';

class Theme extends Model {
	public id!: number;
	public name!: string;
	public code!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Theme.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
			autoIncrement: true,
			primaryKey: true
		},

		name: {
			type: DataTypes.STRING,
			allowNull: false
		},

		code: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		tableName: 'theme'
	}
);

export default Theme;
