import ProjectDetail from '../../models/ProjectDetail';
import Theme from '../../models/Theme';

export default class ProjectDetailQuery {
	async getProjectDetail() {
		const data = await Theme.findAll({
			limit: 1,
			include: [
				{
					model: ProjectDetail,
					where: {
						id: 1
					}
				}
			]
		});

		return data;
	}
}
