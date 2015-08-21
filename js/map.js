window.onload = function () {
    var R = Raphael("map", 640, 530);
  //调用绘制地图方法
    paintMap(R);
  
  var textAttr = {
        "fill": "#fff",
        "font-size": "12px",
        "cursor": "pointer"
    };
      
           
    for (var state in china) {
    china[state]['path'].color = Raphael.getColor(0.9);
        
        (function (st, state) {
      
      //获取当前图形的中心坐标
            var xx = st.getBBox().x + (st.getBBox().width / 2);
            var yy = st.getBBox().y + (st.getBBox().height / 2);
      
            //***修改部分地图文字偏移坐标
            switch (china[state]['name']) {
                case "江苏":
                    xx += 5;
                    yy -= 10;
                    break;
                case "河北":
                    xx -= 10;
                    yy += 20;
                    break;
                case "天津":
                    xx += 10;
                    yy += 10;
                    break;
                case "上海":
                    xx += 10;
                    break;
                case "广东":
                    yy -= 10;
                    break;
                case "澳门":
                    yy += 10;
                    break;
                case "香港":
                    xx += 20;
                    yy += 5;
                    break;
                case "甘肃":
                    xx -= 40;
                    yy -= 30;
                    break;
                case "陕西":
                    xx += 5;
                    yy += 10;
                    break;
                case "内蒙古":
                    xx -= 15;
                    yy += 65;
                    break;
                default:
            }
      //写入文字
      china[state]['text'] = R.text(xx, yy, china[state]['name']).attr(textAttr);
      
      st[0].onmouseover = function () {
          st.animate({fill: st.color, stroke: "#eee"}, 500);
          china[state]['text'].toFront();
          R.safari();
      };
      st[0].onmouseout = function () {
          st.animate({fill: "#295DC7", stroke: "#eee"}, 500);
          china[state]['text'].toFront();
          R.safari();
      };
      st[0].onclick = function () {
         //alert(china[state]['name'])
         $('#curr-province').text(china[state]['name']);
         getCity(china[state]['name']);
         // showDialog('dlg-school');
      };
      china[state]['text'][0].onclick=function(){
          // alert(china[state]['name'])
          // showDialog('dlg-school');
      }
          
         })(china[state]['path'], state);
    }
}

//省份显示城市
function getCity(province){
  var cityArr=['杭州','湖州','丽水','宁波','温州','台州'];//这需要写ajax向后台请求
  $('#curr-city').text(cityArr[0]);//默认显示第一个城市的学校
  getSchool(cityArr[0]);
  $.each($('#curr-city-list').find('.city-item'),function(i,val){
      $(this).text(cityArr[i])
  });

}
//城市显示学校
function getSchool(city){
  city=typeof city=='object'?$(city).text():city;
  var schoolArr=['杭州学校','湖州学校','丽水学校','宁波学校','温州学校','台州学校'];//这需要写ajax向后台请求
  $('.ui-school-list').find('.ui-school-item a').each(function(i){
    $(this).text(schoolArr[i])
  });
}

function showSchInfo(obj){
  $('.ui-school-tit').text($(obj).text());
  showDialog('dlg-school');
}