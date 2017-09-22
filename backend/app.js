const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const low = require('lowdb');
const storage = require('lowdb/file-async');

// 创建一个Express服务器
const server = jsonServer.create();

// 使用json-server 默认选择的中间件（logger,static,cors,no-cache）
server.use(jsonServer.default());
// 使用body-parser 中间件
server.use(bodyParser.json());

// 数据文件
const dbfile = process.env.prod === '1' ? 'db.json' : '_db.json';
// 创建一个 lowdb 实例
const db = low(dbfile, {storage});

// 路由配置
const router = jsonServer.router(dbfile);
server.use('/api', router);

// 启动服务，并监听5000端口
server.listen(5000, () => {
    console.log('server is running at',5000, dbfile);
    console.log('hello server');
});