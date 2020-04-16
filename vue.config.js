module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  configureWebpack:{
    devServer:{
      before(app){
        app.get('/api/login',function(req,res) {
          const {username,password} = req.query
          if(username=='liting' && password == '123'){
            res.json({code: 1,token:'jilei'})
          }else{
            res.status(401).json({code:0,message:'用户名或者密码错误'})
          }
        })
        function auth(req,res,next){
          if(req.headers.authorizaton){
            next()
          }else{
            res.sendStatus(401)
          }
        }

        app.get('/api/userinfo',auth,function(req,res){
          res.json({code:1,data:{name:'liting',age:22}})
        })
      }
    }
  }
}
