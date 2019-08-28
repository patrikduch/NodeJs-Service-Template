import sequelize from '../util/database/orm/sequelize/database';

import { Model, DataTypes } from 'sequelize';

import Theme from './Theme';

class ProjectDetail extends Model {
	public id!: number;
	public name!: string;
	public themeId!: number;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

ProjectDetail.init(
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

		themeId: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: 'projectdetail'
	}
);



ProjectDetail.belongsTo(Theme, { foreignKey: 'themeId' })


/*

Theme.create({
	name: 'Default (initial) theme',
	code: 'default-theme'

});


ProjectDetail.create({
	name: 'Bakalářská práce',
	themeId: 1
});
*/




export default ProjectDetail;
