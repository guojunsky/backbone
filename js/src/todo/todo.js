/***
* Todo model
*/
define(function(require){
   var Backbone=require('backbone/backbone');
  // var TodoList=require('./todolist');
   //a class
   var Tode=Backbone.Model.extend({
      defaults:function  () {
         return {
           title:'还没有任务哦',
           order:Backbone.noop,
           done:false
         };
       },
       toggle:function(){
       	  this.save({done:!this.get('done')});
       }
   });

   return Tode;
});