# 智能面试题题库（Java + Vue + AI）

## 项目简介
智能面试题题库项目基于 **Java + Vue + AI** 技术栈开发，旨在提供：
- 高效的面试题管理
- AI 自动推荐及答题解析
- 支持桌面与网页端访问
- 微信登录与消息服务

---

## 主流框架 & 技术特性

### 后端框架
- **Spring Boot 2.7.x** — 微服务快速构建
- **Spring MVC** — Web 层开发
- **MyBatis + MyBatis Plus** — 数据访问，支持分页
- **Spring AOP** — 切面编程
- **Spring Scheduler** — 定时任务
- **Spring 事务注解** — 数据库事务管理
- Spring Boot 调试工具 & 项目处理器

### 数据存储
- **MySQL** — 关系型数据库
- **Redis** — 内存数据库，用于分布式 session 和缓存
- **Elasticsearch** — 高性能搜索引擎
- **腾讯云 COS** — 对象存储

### 工具类
- **Easy Excel** — Excel 导入导出
- **Hutool** — Java 工具库
- **Apache Commons Lang3** — 工具类库
- **Lombok** — 注解简化 Java 代码

---

## 核心业务特性

### 业务代码生成器
- 自动生成 Service、Controller、数据模型代码
- 配合 MyBatisX 插件，加速 CRUD 开发

### 用户管理
- 登录 / 注册 / 注销 / 更新 / 查询
- 权限管理 + 自定义注解验证

### 帖子管理
- 创建 / 删除 / 编辑 / 更新
- 数据库检索 + Elasticsearch 灵活搜索
- 点赞 / 收藏功能
- 全量 / 增量同步 ES（定时任务）

### 文件与消息服务
- 分业务文件上传
- 微信开放平台登录
- 微信公众号订阅、消息收发、菜单设置

### 系统通用功能
- 全局请求日志拦截器
- 全局异常处理器 + 自定义错误码
- 封装统一响应类
- 全局跨域支持
- 长整数丢失精度处理
- 多环境配置

---

## 单元测试
- **JUnit 5** — 单元测试框架
- 提供示例测试类，快速验证业务逻辑

---

## 架构设计
- 合理分层设计：Controller → Service → Mapper → Entity
- 支持快速扩展和维护

---

## 前端技术栈
- **Vue 3 + Vite** — 高性能前端框架
- **Element Plus** — UI 组件库
- **Axios** — 前端请求库
- **Vuex / Pinia** — 状态管理
- **Vue Router** — 前端路由

---

## 快速上手指南

### 1. 克隆项目
```bash
git clone https://github.com/ZSPSTRIVE/AIInterviewBank.git
cd AIInterviewBank
执行 SQL 建表：

mysql -u root -p mianshiya < sql/create_table.sql


启动后访问接口文档：http://localhost:8101/api/doc.html

## 3. Redis 分布式登录

配置 Redis：

spring:
  redis:
    host: localhost
    port: 6379
    database: 1
    timeout: 5000
    password: 123456

spring:
  session:
    store-type: redis


修改 MainApplication 注解：

// 修改前
@SpringBootApplication(exclude = {RedisAutoConfiguration.class})

// 修改后
@SpringBootApplication

4. Elasticsearch 配置
spring:
  elasticsearch:
    uris: http://localhost:9200
    username: root
    password: 123456


创建索引：

PUT post_v1
{
  // 参数见 sql/post_es_mapping.json
}


启用同步任务：

// @Component

5. 前端启动
cd frontend
npm install
npm run dev

6. 后端启动
cd backend
mvn spring-boot:run

7. 业务代码生成器

修改 generate.CodeGenerator 生成参数：

String packageName = "com.bigbird.mianshiya";
String dataName = "用户评论";
String dataKey = "userComment";
String upperDataKey = "UserComment";


运行生成代码，并根据 // todo 注释修改适配业务需求。

8. Swagger / Knife4j 接口文档

自动生成接口文档

在线调试 API，无需前端

Docker 部署（可选）
# 构建后端 Docker 镜像
docker build -t ai-interview-backend backend/
# 启动后端容器
docker run -d -p 8101:8101 ai-interview-backend
