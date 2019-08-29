
import ProjectDetail from '../../models/ProjectDetail';

export default class ProjectDetailQuery {

  async getProjectDetail() {

	const data = await ProjectDetail.findAll({
		limit: 1,
		where: {
			//your where conditions, or without them if you need ANY entry
		},
		order: [['createdAt', 'DESC']]
	});

	return data;

  }
}