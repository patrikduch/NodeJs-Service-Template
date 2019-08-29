import { Sequelize } from "sequelize/types";

import ProjectDetailModel from '../../../../models/ProjectDetail';
import ThemeModel from '../../../../models/Theme';

// Add models into sequalize container
export default (sequalize: Sequelize) => {

	sequalize.modelManager.addModel(ProjectDetailModel);
	sequalize.modelManager.addModel(ThemeModel);
}