import Database from '../util/database/orm/sequelize/database';
import { Model, DataTypes } from 'sequelize';

class Theme extends Model {
	public id!: number;
	public name!: string;
	public code!: string;
	public projectId!: number;
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
		},

		projectId: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: true
		}
	},
	{
		sequelize: Database,
		tableName: 'theme'
	}
);

export default Theme;
