_import('UIView,UILabel,UIImage,UIColor,TTView,ViewController,UITableViewCell,UITableView,NSIndexPath,UIFont,UIScreen,UIImageView,TaoBaoHome');defineClass('ViewController:UIViewController<UITableViewDelegate,UITableViewDataSource>', {data: property(),loadJSCode: function () {let dataSource = ['加载纯JS模块','JS-OC block调用示例','淘宝大事故修复方案','动态添加数据'];self._c('setData_', dataSource);let data = self._c('data');let tableview = self._c('getTableview');tableview._c('setTableHeaderView_', self._c('createPageHeader'));self._c('setTableview_', tableview);self._c('view')._c('addSubview_', tableview);self._c('setTitle_', 'Demo.js');},tableView_numberOfRowsInSection_: function (tableview, section) {let data = self._c('data');return data.length;},tableView_cellForRowAtIndexPath_: function (tableview, indexPath) {let cell = UITableViewCell._c('alloc')._c('initWithStyle_reuseIdentifier_', 1, 'cell');let data = self._c('data')[indexPath._c('row')];cell._c('textLabel')._c('setText_', '<' + data + '>');return cell;},tableView_didSelectRowAtIndexPath_: function (tableview, indexPath) {if (indexPath._c('row') === 0) {let vc = JSRootViewController._c('new');self._c('navigationController')._c('pushViewController_animated_', vc, true);vc = null;} else if (indexPath._c('row') === 1) {let vc = BlockViewController._c('new');self._c('navigationController')._c('pushViewController_animated_', vc, true);vc = null;} else if (indexPath._c('row') === 2) {let vc = TaoBaoHome._c('new');self._c('navigationController')._c('pushViewController_animated_', vc, true);vc = null;} else {let dataSource = self._c('data');dataSource._c('push', '点击加载更多Cell');self._c('setData_', dataSource);self._c('tableview')._c('reloadData');}},getTableview: function () {_tableview = UITableView._c('alloc')._c('initWithFrame_style_', self._c('view')._c('bounds'), 0);_tableview._c('setDelegate_', self);_tableview._c('setDataSource_', self);return _tableview;},params1_params2_params3_params4_params5_params6_params7_: function (params1, params2, params3, params4, params5, params6, params7) {Util._c('nLog', 0, '--------多参数测试---------');Util._c('log', params1, params2, params3, params4, params5, params6, params7);},createPageHeader: function () {var label = UILabel._c('new');label._c('setFont_', UIFont._c('systemFontOfSize_', 18));label._c('setTextColor_', UIColor._c('whiteColor'));label._c('setBackgroundColor_', UIColor._c('systemGreenColor'));label._c('setFrame_', new TTReact(10, self._c('view')._c('frame').size.width * 0.75, self._c('view')._c('bounds').size.width - 20, self._c('view')._c('frame').size.height * 0.15));label._c('setText_', '具体功能实例 \n\n动态加载纯JS页面, JS与OC之间的Block传递,调用');label._c('setNumberOfLines_', 0);return label;}}, {});defineClass('JSRootViewController:UIViewController', {dealloc: function () {Utils.log('TestViewController->已释放');},viewDidLoad: function () {Super()._c('viewDidLoad');self._c('setTitle_', '动态下发模块');self._c('view')._c('setBackgroundColor_', UIColor._c('whiteColor'));let screenWidth = UIScreen._c('mainScreen')._c('bounds').size.width;let screenHeight = UIScreen._c('mainScreen')._c('bounds').size.height;let logo = UIImageView._c('new');logo._c('setImage_', UIImage._c('imageNamed_', 'applelogo'));logo._c('setFrame_', new TTReact(50, 50, 100, 100));logo._c('setCenter_', new TTPoint(screenWidth / 2, 150));let title = UILabel._c('new');title._c('setText_', 'Apple');title._c('setFont_', UIFont._c('fontWithName_size_', 'GillSans-UltraBold', 25));title._c('setTextAlignment_', 1);title._c('setFrame_', new TTReact(50, 150, 100, 100));title._c('setCenter_', new TTPoint(screenWidth / 2, 270));self._c('view')._c('addSubview_', logo);self._c('view')._c('addSubview_', title);{let title = UILabel._c('new');title._c('setText_', '------------------------\n本页面由纯JS编写,具体使用场景可结合自身业务使用\n------------------------');title._c('setNumberOfLines_', 0);title._c('setTextAlignment_', 1);title._c('setFrame_', new TTReact(50, 150, 200, 300));title._c('setCenter_', new TTPoint(screenWidth / 2, 370));self._c('view')._c('addSubview_', title);}}}, {});defineClass('BlockViewController:UITableViewController', {dealloc: function () {Utils.log('BlockViewController->已释放');},viewDidLoad: function () {Super()._c('viewDidLoad');self._c('setTitle_', '动态下发模块');self._c('view')._c('setBackgroundColor_', UIColor._c('whiteColor'));let screenWidth = UIScreen._c('mainScreen')._c('bounds').size.width;let screenHeight = UIScreen._c('mainScreen')._c('bounds').size.height;let logo = UIImageView._c('new');logo._c('setImage_', UIImage._c('imageNamed_', 'applelogo'));logo._c('setFrame_', new TTReact(50, 50, 100, 100));logo._c('setCenter_', new TTPoint(screenWidth / 2, screenHeight - 250));let title = UILabel._c('new');title._c('setText_', 'Apple');title._c('setFont_', UIFont._c('fontWithName_size_', 'GillSans-UltraBold', 25));title._c('setTextAlignment_', 1);title._c('setFrame_', new TTReact(50, 150, 150, 100));title._c('setCenter_', new TTPoint(screenWidth / 2, screenHeight - 150));self._c('view')._c('addSubview_', logo);self._c('view')._c('addSubview_', title);},btnAction_: function (index) {switch (index) {case 0: {self._c('testCall0_', block(''), function () {Utils.log('--------JS传入OC方法,接受到回调--------- 无参数,无返回值');Utils.log_info('--------JS传入OC方法,接受到回调--------- 无参数,无返回值');});}break;case 1: {self._c('testCall1_', block('void,NSString*,int'), function (arg1, arg2) {Utils.log('--------JS传入OC方法,接受到回调--------- 有参数,无返回值' + arg1 + arg2);Utils.log_info('--------JS传入OC方法,接受到回调--------- 有参数,无返回值' + arg1 + arg2);});}break;case 2: {self._c('testCall2_', block('NSString*,NSString*'), function (arg) {Utils.log('--------JS传入OC方法,接受到回调--------- 有参数,有返回值:string' + arg);Utils.log_info('--------JS传入OC方法,接受到回调--------- 有参数,有返回值:string' + arg);return '这是有返回值的哦';});}break;case 3: {self._c('testCall3_', block('NSString*,void'), function () {Utils.log('--------JS传入OC方法,接受到回调--------- 无参数,有返回值:string');Utils.log_info('--------JS传入OC方法,接受到回调--------- 无参数,有返回值:string');return '这是有返回值的哦';});}break;case 4: {self._c('runBlock');}break;default: {self._c('testCallVID_', block(',NSString *, NSString *, int, bool, float , NSNumber* '), function (arg1, arg2, arg3, arg4, arg5, arg6) {Utils.log('--------JS传入OC方法,接受到回调---------' + arg1 + '\n' + arg2 + '\n' + arg3 + '\n' + arg4 + '\n' + arg5 + '\n' + arg6);Utils.log_info('--------JS传入OC方法,接受到回调---------' + arg1 + '\n' + arg2 + '\n' + arg3 + '\n' + arg4 + '\n' + arg5 + '\n' + arg6);});self._c('OCcallBlock_', block(',NSString *'), function (arg1) {Utils.log('js与js block回调' + arg1);Utils.log_info('js与js block回调' + arg1);});}break;}},callBlock_: function (callback) {if (callback) {callback(10);}}}, {});