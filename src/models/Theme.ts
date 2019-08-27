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