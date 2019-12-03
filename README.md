# 技术栈
> - react
  - react-router-dom
  - prop-types
  - redux
  - react-redux
  - redux-thunk
  - styled-components
  - whatwg-fetch
  - react-loadable
  - 高阶组件
  - redux-actions
  - qs 
  - antd-mobile
  - js-cookie


`yarn add react-router-dom prop-types redux react-redux redux-thunk styled-components whatwg-fetch react-loadable redux-actions qs antd-mobile js-cookie`


# 环境搭建所需要的配置
> 环境搭建  `create-react-app`

**所需要的配置**
- http-proxy-middleware
- react-app-rewired 
- customize-cra
- babel-plugin-import
- @babel/plugin-proposal-decorators 
- react-scripts 
- @babel/plugin-syntax-jsx


`yarn add http-proxy-middleware react-app-rewired customize-cra babel-plugin-import @babel/plugin-proposal-decorators react-scripts @babel/plugin-syntax-jsx --dev`

# 调试工具

> redux-devtools-extension


`yarn add redux-devtools-extension`



# 芒果购物：
> 主页接口
   * 搜索：
      http://www.mangguozhe.com/index.php?r=index/kwarr& kw=12ab &token=false
     - 搜索跳列表
      http://www.mangguozhe.com/index.php?r=index/classifyajax&token=false&page=2&kw=%E5%8F%A3%E7%BA%A2&px=renqi
          decodeURI('%E5%8F%A3%E7%BA%A2')//"口红"
          encodeURI('口红')//"%E5%8F%A3%E7%BA%A2"

     
  * 最上面精选：
       http://cmsjapi.ffquan.cn/api/category/get-category-list 
  
  * 大轮播：
      （get）http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=-1&proModelId=1&source=3&version=v1&tuserId=797808&isWechat=0
  
  * 大轮播下面三张图：
      （get）http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=13011&proModelId=19&source=3&version=v1&tuserId=797808&isWechat=0
  
  * 五个按钮：
      （get）http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=13012&proModelId=2&source=3&version=v1&tuserId=797808&isWechat=0
  
  * 优惠头条：
       http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=13013&proModelId=13&source=3&version=v1&tuserId=797808&isWechat=0 
  
  * 叮咚抢(左轮播，右图)：
       http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=13014&proModelId=20&source=3&version=v1&tuserId=797808&isWechat=0 
  
  * 品牌特卖：
       http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=13016&proModelId=21&source=3&version=v1&tuserId=797808&isWechat=0 
  
  * 大家都在领：
       http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=13017&proModelId=16&source=3&version=v1&tuserId=797808&isWechat=0 
  
  * 发现好货：
       http://cmsjapi.ffquan.cn/api/category/index/lingquan-live-new?pageId=1&pageSize=10&entityId=4&type=1&version=v1&tuserId=797808&isWechat=0 

  





# UI框架

> Ant Design Mobile 
  - Carousel 走马灯
  - Tabs 标签页
