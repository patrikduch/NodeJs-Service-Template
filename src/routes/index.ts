// Server routing
import KoaRouter from 'koa-router';

const router = new KoaRouter();

import ProjectDetail from '../models/ProjectDetail';

router.get('/', async (ctx: any) => {
	const data = await ProjectDetail.findAll({
		limit: 1,
		where: {
			//your where conditions, or without them if you need ANY entry
		},
		order: [['createdAt', 'DESC']]
	});

	ctx.compress = true;

	ctx.state.response = {
		name: data[0].name,
		theme: 'default-theme'
	};
});
   

export default router;
