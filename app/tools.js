var tools = {};
/**
 * use require-directory to mount routes
 * @author github.com/lgh06
 * @date   2016-04-16T17:17:09+0800
 * @param  Express app
 * @param  require-directory returned routes,see https://www.npmjs.com/package/require-directory#specifying-another-directory
 * @param  pre
 */
tools.mount_routes = function(app,r,pre){
  pre = pre || '';
  for (var k in r) {
    var file = '/' + pre + '' + k + '.js';
    // console.log('mount route ' + file + " ");
    var path = '';
    if(typeof r[k] == 'object') {
      // console.log('this is a obj');
      tools.mount_routes(app, r[k], pre + k + '/');
    }else if(k === 'index') {
      path = '/'+ pre;
      app.use(path, r[k]);
    }else {
      path = '/' + pre + '' + k;
      app.use(path, r[k]);
    }
  }
};
module.exports = tools;
