## 课程
   * 公众号
   * 小程序

## 设计技术
   * 前后端通信 安全加密 Web协议 （HTTP/HTTPS） 
   * 数据库 Web开发框架 云服务器 备案

## 小程序
   * 小程序项目目录结构？
      * pages
      * Utils
      * app.json
          * pages : 配置页面
          * tabBar : 底部菜单栏
             * pagePath
             * text
             * iconPath
      * app.js
         * 首页逻辑代码
   * 小程序生命周期
      * 百度

## 注册小程序以及如何对接开发者服务器域名

## 注意
   * 服务器开启HTTPS需要备案域名
   * 流程(身为root，我更专业)
      * 条件($ money $ )
      * 购买云服务器(￥30 / 3个月？)
      * 购买域名(几块/一年？)
      * 填写个人信息
      * 申请域名备案(7天后再申请，不然不给过)
      * 将域名和服务器绑定
      * 在服务器控制台分配域名
      * 在服务器系统中配置nginx，分配端口
      * 完成

## 小程序发起请求
   * wx.request(Object)
      * ```
            wx.request({
                  url: 'test.php', //仅为示例，并非真实的接口地址
                  data: {x: '',y: ''},
                  header: {'content-type': 'application/json'},
                  success (res) {
                        console.log(res.data)
                  }
            });
        ```

## 了解小程序的能力
   * 概括其能力，能解决基础的问题。
      * 通过小程序码(业内称之为'太阳码'，好...)宣传
      * 开发成本很低
      * 可以提高商家的曝光度
      * 商城、点餐、订购酒店
      * 定位类型的应用大部分功能可以实现

## 小程序API调用方式
   * 先获取access_token
      * 是小程序全局唯一后台接口调用凭据
      * https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
   * 然后使用access_token 去调用其他API
   * ### 如何获取access_token
      * 把网址路由参数appid 和 secret 换成自己的(在微信公众平台设置中查看)
      * AppId && AppSecret
      * 网址会返回一个对象，其中一个属性就是access_token
## 公众号
   * 客户端-微信服务器-开发者服务器-之间的通信
   * 调用公众号API
## 消息通信
   * ### 要进行消息通信,需要开启开发者配置
   * URL : 微信服务器要把消息转发到这里
   * token : 用于验证
   * 密钥 : 
   * 加密模式 : 
## 开启服务器配置的验证流程
   * 开发者设置URL 并在开发者服务器启动Web服务
   * 填写Token和开发者服务器的Token一致
   * 点击确认，腾讯服务器向开发者服务器URL发起请求
   * 开发者服务器接收请求并验证数据是否合法
   * 合法则返回指定值
## 验证过程请求数据的处理
   * 微信服务器向开发者服务器URL请求并携带以下参数
   * signature、timestamp、nonce、echostr
   * 验证签名，时间戳，随机数，随机字符串
   * 开发者服务器按照以下方式验证signature是否合法
      * ### 把token、timestamp、nonce 字典排序
      * ### 排序后数据拼接成字符串
      * ### 对拼接后的字符串进行sha1加密
      * ### 加密后的数据和signature对比是否相同
      * ### 相同则返回echostr，标识此请求来自于微信服务器
   * 验证过程使用的是GET方法请求
   * 而验证成功使用POST请求返回消息
   * 转发用户消息以及开发者回复用户消息的格式是**XML**
   * 如果开发者服务器不需要返回消息
      * ### 返回  ''
      * ### 返回success
## 公众号接口的调用
   * 和小程序调用过程一致，都要先获取access_token
## 区分公众号和小程序的AppId和AppSecret
   * 两个不是相同的，没有任何关系
## 测试号
   * 测试号的特点和限制
      * 可以调用大部分高级API用于开发测试
      * 无法设置头像和名称
      * 关注用户有上限，100
## Nginx 以及 反向代理 (是面试重点，但是考试不怎么考)
   * 了解Nginx的反向代理模式和应用场景
      * 内部服务器不能被外部访问，只能使用代理服务器作为中转站进行访问
      * 应用场景
         * Web服务器
         * 反向代理
         * 解决浏览器跨域访问
         * 负载均衡
         * 统一访问入口
         * 行为分析

## Linux
   * 文件命令 
      * mkdir --建目录
      * ls    --打印list
      * cd    --进入/退出目录
      * touch --建文件
      * vim   --编辑
      * vi    --编辑
      * fg    --进入后台运行的vim
      * cp    --copy
      * mv    --移动/重命名 
      * rm    --可删非空
   * 进程管理 
      * ps -aux --打印所有进程
      * kill    --杀掉进程
   