// Server routing
import KoaRouter from 'koa-router';

const router = new KoaRouter();

import ProjectDetail from '../models/ProjectDetail';


router.get('/', async ctx => {
	ctx.state.response = await Promise.resolve({
	  message: "hello world!"
	})
  })


   

export default router;
