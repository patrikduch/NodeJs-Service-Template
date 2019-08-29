import cors from '@koa/cors';
import { responseHandler } from '../../../util/server/koa/handlers/promise/responseHandler';
import router from '../../../routes';

import Koa from 'koa';

const setup = (app: Koa<any, {}>) => {
	app
		.use(cors())
		.use(responseHandler)
		.use(router.routes())
		.use(router.allowedMethods());
};

export default {
	setup
};
