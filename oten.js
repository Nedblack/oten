
$("style").last().append(`#users .uzr.qaqer img.co {
  width: 0px !important;
    height: 0px !important;
  margin-right: 1px;

}
 

#users .uzr.qaqer span.uhash {
    -webkit-text-fill-color: transparent;
width: 0px !important;
    height: 0px !important;
  margin-right: 1px;
}
   

#users .uzr.qaqer img.u-ico {
margin-left: 5px;
                 
}
  

#users .uzr.qaqer img.ustat {
      width: 11px !important;
    height: 11px !important;
    min-height: 0%!important;
    margin-right: 0;
    z-index: 999999;
    border-radius: 0px 3px 0px 3px;
    margin-left: 1px;
    margin-top: 1px;
    border: 1px solid #fff;
    box-shadow: inset 0 0 0 rgb(0 0 0 / 8%), 0 0 2px #f0c01f;
    box-shadow: 0 0 2px rgb(0, 0, 0), inset 0 0 0px rgb(0, 0, 0), 0 0 0 0px #000;
}


#users .uzr.qaqer .fitimg.u-pic {
  border: 1px solid #fff;
    border-radius: 8px 0px  8px 8px;
    box-shadow: 0 0 3px rgb(255, 171, 0), inset 0 0 0px rgb(0, 0, 0), 0 0 0 0px #000;
    margin-top: 7px;
    margin-right: 2px;
    border-radius: 100px;
    margin-left: -5px;
    height: 52px !important;
    margin-bottom: 10px !important;
    padding: 26px !important;

}
 

#users .uzr.qaqer .u-msg {
  webkit-background-clip: text;B
-webkit-text-fill-color: #000;
padding: 0px !important;
margin-bottom: 0px !important;
margin-right: 0px !important;
margin-left: 3px;

background-size: cover;
margin-top: 4px !important;
 
}
       

#users .uzr.qaqer {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #ffab00;
    margin-bottom: 3px !important;
    margin-top: 2px !important;
    border-radius: 0px;
    border: 1px solid #fff;
    background-image: url(https://up6.cc/2024/03/170924436222861.gif);
    background-size: cover;
      
}
   

#users .uzr.qaqer .d-flex.fl {
  padding-right: 0px !important;

}
 

#users .uzr.qaqer .u-topic {
  margin-left: 5px;
   -webkit-background-clip: text;
      -webkit-text-fill-color: #0000;
 background-image: url(https://up6.cc/2023/01/167459183804791.gif);
 background-size: cover;

}
  

#users .uzr.qaqer .itarr_qaqer {
   width: 70px;
 margin-top: -34px;
cursor: pointer;
margin-left: -40px;

}`);
const xxzxx = [ {
  'name': "qaqer",
  'deco': "⁦⁦𝓦𝓪𝓽𝓮𝓮𝓷 ᘓɹ̇ɹ̤ɹ̈ᦇ",
  'cls': "qaqer",
  'icon': "https://up6.cc/2024/02/170915036461011.png"
}];
setInterval(() => {
  if (myid != null) {
    xxzxx.forEach(dataItem => {
      const userElement = $(users).find(".uzr:contains('" + dataItem.deco + "')"); 

      if (userElement && !userElement.hasClass(dataItem.cls)) {
        userElement.addClass(dataItem.cls); 
        userElement.find(".fitimg.u-pic").append(`
          <img class="itarr_${dataItem.name}" title="اطاري" src="${dataItem.icon}">
        `); 
      }
    });
  }
}, 6000);

setInterval(() => {
  $('img').on("contextmenu", function () {
    return false;
  });
}, 2000);
