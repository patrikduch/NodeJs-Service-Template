import express, { response } from 'express';
import compression from 'compression';
import { Request, Response } from 'express';
import sequelize from './util/database/orm/sequelize/database';

import koa from 'koa';

import cors from '@koa/cors';

import { addHook } from 'sequelize-typescript';
import { async, resolve } from 'q';

import ProjectDetail from './models/ProjectDetail';
import Theme from './models/Theme';

sequelize.modelManager.addModel(ProjectDetail);
sequelize.modelManager.addModel(Theme);

/*



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

import Koa from 'koa';
import  Router  from 'koa-router';

const app = new Koa()
const router = new Router()

async function responseHandler (ctx: any, next: any) {  
  try {
    await next()
  } catch (err) {
    ctx.throw(err.code, err.message)
  }

  // Ignore post-processing if body was already set
  if (!ctx.state.response || ctx.body) return

  ctx.status = 200
  ctx.body = {
	...ctx.state.response,
    ok: true
  }
}

router.get('/', async (ctx: any) => {


	const data = await ProjectDetail.findAll({
		limit: 1,
		where: {
			//your where conditions, or without them if you need ANY entry
		},
		order: [['createdAt', 'DESC']]
	});

  	ctx.state.response = {
		  name: data[0].name,
		  theme: 'default-theme'
	}
})
app.use(cors());
app
  .use(responseHandler)
  .use(router.routes())
  .use(router.allowedMethods())


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
