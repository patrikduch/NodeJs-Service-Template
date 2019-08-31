import Router from 'koa-router';

// Query objects imports
import ProjectDetailQuery from '../data/projectdetail/ProjectDetailQuery';

// Creation of new instance of Koa router
const router = new Router();

router.get('/', async (ctx: any) => {
	const query = new ProjectDetailQuery();
	const data = await query.getProjectDetail();

	ctx.state.response = {
		name: data[0].ProjectDetail.name,
		theme: data[0].code
	};
});

export default router;
