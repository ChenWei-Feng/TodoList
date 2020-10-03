import {Body, Controller, Get,Header,Params, Post, Query} from 'koa-ts-controllers';
import {IsNumberString} from 'class-validator';
import Boom from '@hapi/Boom';
class GetUsersQuery {
    @IsNumberString()
    page: number;
}
@Controller('/test')
class TestController{
    // @Get('/hello')
    // async hello(a:any){
    //     console.log(a.b);
    //     return 'Hello Test'
    // }
    // @Get('/user/:id(\\d+)')
    // async getUser(
    //     @Params() p:{id:number}
    // ){
    //     return '当前param中的用户id是：' + p.id;
    // }
    // @Get('/user')
    // async getUser2(
    //     @Query() q:{id:number}
    // ){
    //     return '当前param中的用户id是：' + q.id;
    // }
    // @Post('/user')
    // async postUser(
    //     @Body() body:{
    //         name:string;
    //         password:string
    //     },
    //     @Header() h:any
    // ){
    //     console.log('header',h);
    //     console.log(body);
    //     return `当前提交的数据是：${JSON.stringify(body)}`;
    // }
    @Get('/users')
    async getUsers(
        @Query() q:GetUsersQuery
    ){
        // //业务逻辑出现错误，eg.用户名不存在，用户名已经被注册了
        // if(true){  //用户名已经被注册
        //     throw Boom.notFound('注册失败','用户名已经被注册');
        // }
        // return '传过来的query：'+JSON.stringify(q);
        return{
            id:1,
            name,
            createAt:new Date()
        }
    }
}