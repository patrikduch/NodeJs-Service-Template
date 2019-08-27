import Sequalize from 'sequelize';
import sequelize from '../util/database/orm/sequelize/database';

import { Model, DataTypes } from 'sequelize';

  class ProjectDetail extends Model {
	public id!: number;
	public ownerId!: number;
	public name!: string;
  
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
  }
  
  ProjectDetail.init({
	id: {
	  type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
	  autoIncrement: true,
	  primaryKey: true,
	},

	name: {
		type: DataTypes.STRING,
		allowNull: false
	}
  }, {
	sequelize,
	tableName: 'projectdetail',
  });

  ProjectDetail.create({
	  name: 'Bakalářská práce'
  });
  
 


  export { ProjectDetail }

