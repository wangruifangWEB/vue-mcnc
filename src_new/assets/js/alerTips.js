import $ from 'jquery';//引入zepto会报错，原因不明
import Vue from 'vue';
export default {
  install(){
    let timer=null;
    Vue.prototype.$alerTips=function(msg,options){
        let option=options||'';
        $('#tip').remove();

        let $div=$("<div class='tip' id='tip'></div>");
        let $button=$('<button style="position:absolute,bottom:0,left:185">关闭</button>')
        if(option){
          $div.css(option);
        }
        $div.text(msg);
        $div.append($button);
        $('body').append($div);
        $('body').css({
          'background-color':'lightgray'
        });
        $('#tip').addClass('showAlert');
        $('#tip button').click(function(){
          $('body').css({
            'background-color':'white'
          })
          $('#tip').remove();
        })
    }
  }
}
