module.exports = {
  devServer : {
   proxy : {
     '/x' :{
       target : 'https://api.bilibili.com',
       onProxyReq(ProxyReq) {
        ProxyReq.setHeader('origin' , 'https://www.bilibili.com'),
        ProxyReq.setHeader('referer' , 'https://www.bilibili.com/')
       }
     }

   }
  }
}