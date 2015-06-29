require.config({
    baseUrl:'../js/lib',
    paths:{
    	 src:'../src',
    	 jquery:'jquery/jquery',
    	 underscore:'underscore/underscore'
    }
});

require(['jquery','src/todo/todo'],function  ($,Node) {
	 $(function  (argument) {
	     var nd=new Node();
	     nd.set({list:[1,3,41]});
	     console.log(nd);
	 });
});