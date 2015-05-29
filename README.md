# nuanxin

## 项目当前进度

5.27   

        1.了解熟悉下微信文档
       
        2.修改微信号头像
        
        3.正在逐一实现基本功能单页
        
        4.病例图片上传功能暂时有问题，可能是服务器端没有开放写权限

5.28

	已完成：

    1.实现了服药卡的表单

	2.改用了meteorhunt的架构重新构建了框架

	3.实现了注册登录功能，注册成功后可以自动跳转

	4.部署到了阿里云服务器测试通过，访问速度明显比meteor服务器快

	5.android ， ios ，pc端初步测试通过

	6.把这几天的代码上传，nuanxin是基于ionicdemo的框架，nuanxin2是基于meteorhunt的框架，目前开发使用nuanxin2，nuanxin目录下的代码不再开发


	待完成：

	1.病例拍照上传，之前有个bug暂时没调

	2.服药卡表单和用户关联

	3.数据表模型设计

	4.数据安全性验证

	5.微信关注功能和跳转
	
	6.利用微信身份完成自动登录

## 测试链接


暖心项目部署到meteor服务器（美国）: http://nuanxin.meteor.com/


暖心项目部署到阿里云服务器（北京）：http://itcastcpp.cn/

## 微信开发

1. 需要在服务器端80端口，开启一个接收微信服务器发送过来的信息，做一次验证，微信服务器在开通绑定网站时，token需要。

2. web服务器端可否获得客户微信帐号信息。

## web服务器

1. 采用meteor技术

2. ui界面采用 ionic

    packages: https://atmospherejs.com/meteoric/ionic

    github: https://github.com/meteoric/meteor-ionic/

## 数据库设计

1.用户管理表

2.服药卡表

3.医生表

4.常见问题表



## web服务器后台管

1.毛豆提供统一解决方案,应该有现成模板套用

## 方怡提供资源

1. 见source目录

## 项目部署

阿里服务器部署：

https://github.com/maodouio/meteor-master-classes/wiki/how-to-deploy-meteor-to-aliyun-vitual-host

mogon本地和云服务器数据备份：

https://github.com/maodouio/meteor-master-classes/wiki/how-to-dump-and-restore-mongo-db-from-localhost-to-aliyun-server


## 学习记录

设置accounts字段：

https://github.com/meteor-useraccounts/core/blob/master/Guide.md#configuring-texts

修改主题色调

_app-variables.scss 
