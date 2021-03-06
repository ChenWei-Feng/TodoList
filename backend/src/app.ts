import configs from './configs';
import Koa,{Context} from 'koa';
import {bootstrapControllers} from 'koa-ts-controllers'
import path from 'path';
import KoaBodyParser from 'koa-bodyparser';
import Boom from '@hapi/Boom';
import {Sequelize} from "sequelize-typescript"; 
const KoaRouter = require('koa-router');



(async () => {
    const app = new Koa();
    const router = new KoaRouter();
    //连接数据库
    const db = new Sequelize({...configs.database,models: [__dirname + '/models/**/*']});
    //注册路由
    await bootstrapControllers(app,{
        router:router,
        basePath:'/api',
        versions:[1],
        controllers:[
            path.resolve(__dirname + '/controllers/**/*')
        ],
        errorHandler: async (err: any, ctx: Context) => {
            // console.log(err);
            let status = 500;
            let body: any = {
                statusCode: status,
                error: "Internal Server error",
                message: "An internal server error occurred"
            };
            if(err.output){
                status = err.output.statusCode;
                body = {...err.output.payload};
                if(err.data){
                    body.errorDetails = err.data;
                }
            }
    
            ctx.status = status;
            ctx.body = body;
        }
    });
    
    app.use(KoaBodyParser());
    app.use(router.routes()); 
    app.listen(configs.server.port,configs.server.host,()=>{
        console.log(`服务启动成功：http://${configs.server.host}:${configs.server.port}`);
    })
})();




