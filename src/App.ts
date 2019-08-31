import Database from './util/database/orm/sequelize/database';
import Koa from 'koa';
import Middleware from './util/server/koa/Middleware';

const app = new Koa();

// Middleware configuration setup (Cors processing, routes setup, custom handlers for promises etc. )
Middleware.setup(app);

Database.sync()
	.then((result: any) => {
		app.listen(8080, () => {
			console.log('Listening on port 8080');
		});
	})
	.catch((error: any) => {
		console.log(error);
	});
