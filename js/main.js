require.config({
    baseUrl:'../js/lib',
    paths:{
    	 src:'../src',
    	 jquery:'jquery/jquery',
    	 underscore:'underscore/underscore'
    }
});

require(['jquery','src/todo/appView'],function  ($,AppView) {
	 $(function  (argument) {
	     new AppView();
	 });
});