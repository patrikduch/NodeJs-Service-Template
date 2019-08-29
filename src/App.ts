import Koa from 'koa';
import sequelize from './util/database/orm/sequelize/Database';
import registerModels from './util/database/orm/sequelize/registerModels';
import Middleware from './util/server/koa/Middleware';

const app = new Koa();
// Register all models for synchronisation
registerModels(sequelize);

// Middleware configuration setup (Cors processing, routes setup, custom handlers for promises etc. )
Middleware.setup(app);

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
