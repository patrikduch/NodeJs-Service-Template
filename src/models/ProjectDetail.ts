import Database from '../util/database/orm/sequelize/Database';
import { Model, DataTypes } from 'sequelize';

import Theme from './Theme';

class ProjectDetail extends Model {
	public id!: number;
	public name!: string;

	//public readonly createdAt!: Date;
	//public readonly updatedAt!: Date;
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
		}
	},
	{
		sequelize: Database,
		tableName: 'projectdetail'
	}
);

Theme.belongsTo(ProjectDetail, { foreignKey: 'projectId' });

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
