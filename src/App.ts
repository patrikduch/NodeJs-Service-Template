import sequelize from './util/database/orm/sequelize/database';
import cors from '@koa/cors';
import compress from 'koa-compress';
import ProjectDetail from './models/ProjectDetail';
import Theme from './models/Theme';

import Koa from 'koa';
import router from './routes';

// Middleware handlers
import responseHandler from './util/server/koa/handlers/promise/responseHandler';

const app = new Koa();

sequelize.modelManager.addModel(ProjectDetail);
sequelize.modelManager.addModel(Theme);

app.use(cors());

app.use(
	compress({
		filter: function(content_type) {
			return /text/i.test(content_type);
		},
		threshold: 2048,
		flush: require('zlib').Z_SYNC_FLUSH
	})
);

app
	.use(responseHandler)
	.use(router.routes())
	.use(router.allowedMethods());

sequelize
	.sync()
	.then((result: any) => {
		app.listen(8080, () => {
			console.log('Listening on port 8080');
		});
	})
	.catch((error: any) => {
		console.log(error);
	});
