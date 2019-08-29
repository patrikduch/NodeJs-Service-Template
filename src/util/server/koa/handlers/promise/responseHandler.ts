import { Context } from 'koa';

export default async function responseHandler(ctx: Context, next: Function) {
	try {
		await next();
	} catch (err) {
		ctx.throw(err.code, err.message);
	}

	// Ignore post-processing if body was already set
	if (!ctx.state.response || ctx.body) return;

	ctx.state = 200;
	ctx.body = {
		...ctx.state.response,
		ok: true
	};
}
