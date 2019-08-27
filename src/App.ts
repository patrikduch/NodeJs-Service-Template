import express, { response } from 'express';
import compression from 'compression';
import { Request, Response } from 'express';
import sequelize from './util/database/orm/sequelize/database';

import koa from 'koa';
import { addHook } from 'sequelize-typescript';
import { async } from 'q';

/*

import { ProjectDetail } from './models/ProjectDetail';
import Theme from './models/Theme';

const app = express();

sequelize.modelManager.addModel(ProjectDetail);
sequelize.modelManager.addModel(Theme);

console.log(sequelize.models);

// Add headers
app.use(function(req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');

	// Request methods you wish to allow
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);

	// Request headers you wish to allow
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type'
	);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', 'true');

	// Pass to next layer of middleware
	next();
});

app.use(compression());

app.get('/', function(req: Request, res: Response) {
	ProjectDetail.findAll({
		limit: 1,
		where: {
			//your where conditions, or without them if you need ANY entry
		},
		order: [['createdAt', 'DESC']]
	}).then(function(entries: any) {
		//only difference is that you get users list limited to 1
		//entries[0]

		console.log(entries[0].name);

		res.send({
			name: entries[0].name
		});
	});
});

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


	*/

const app = new koa();
const PORT = 4000;

// Logging middleware
app.use(async (ctx, next) => {
	console.log(`${ctx.method} ${ctx.url} ${new Date()}`);
	next(); // To pass request to another process
});

app.listen(PORT);

app.use(async ctx => {
	ctx.body = {
		name: 'Bakalářská práce'
	};
});

console.log(`Listening on port ${PORT}`);
