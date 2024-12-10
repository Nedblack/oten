

const xxxxx = [{
  name: "AD",
  icon: "https://up6.cc/2024/12/173377512606391.png"
}];

function setPower() {
  const userElement = $(users).find(".uzr.uid" + myid);
  if (!userElement || !userElement.length) {
      window.mypower = 0x0;
      return;
  }
  const userPower = parseInt(userElement.attr('v'));
  if (isNaN(userPower)) {
      window.mypower = 0x0;
      return;
  }
  window.mypower = userPower;
}

xxxxx.forEach(item => {
  item.ignoreWhenFirstLogin = true;
});

function displayRoyalLogin(userElement, item) {
  if (item.toggled) {
      return;
  }
  item.toggled = true;
  const userPic = userElement.find(".u-pic").css("background-image").replace("url(\"", '').replace("\")", '');
  const imgContainer = $(body).append("<div><img class='ro_te3b_img' style='position: absolute; top: 3rem; left: -300px; border-radius: 50%' width='78' height='78' src='" + userPic + "' /><img class='ro_te3b_img' style='position: absolute; top: 1rem; left: -300px; border-radius: 0%' width='329' height='173' src='" + item.icon + "' /></div>");
  
  imgContainer.find("img:nth-child(1)").animate({
      'left': "40px"
  }, 400, function () {
      const img = $(this);
      setTimeout(function () {
          if (img.hasClass("ro_te3b_img")) {
              img.animate({
                  'left': "-100px"
              }, 400, function () {
                  img.remove();
              });
          }
      }, 3000);
  });

  imgContainer.find("img:nth-child(2)").animate({
      'left': "0px"
  }, 400, function () {
      const img = $(this);
      setTimeout(function () {
          if (img.hasClass("ro_te3b_img")) {
              img.animate({
                  'left': "-150px"
              }, 400, function () {
                  img.remove();
              });
          }
      }, 3000);
  });
}

setInterval(() => {
  if (!$(users).find(".uzr.uhtml").length) {
      return;
  }

  xxxxx.forEach(item => {
      const userElement = $(users).find(".uzr:contains('" + item.name + "')");
      console.log(userElement);
      if (userElement.css("display") == "none" && window.mypower < parseInt(userElement.attr('v'))) {
          return;
      }

      const isCurrentUser = userElement && userElement.length && userElement.hasClass("uid" + myid);
      const userExists = !!userElement.length;

      if (item.room) {
          if (!userExists && !isCurrentUser) {
              return item.toggled = false;
          }
          if (item.room == myroom) {
              return displayRoyalLogin(userElement, item);
          }
          return item.toggled = false;
      }

      if (isCurrentUser) {
          return displayRoyalLogin(userElement, item);
      }

      if (!userExists) {
          if (item.toggled !== undefined) {
              item.ignoreWhenFirstLogin = false;
          }
          return item.toggled = false;
      }

      if (item.ignoreWhenFirstLogin) {
          return;
      }

      displayRoyalLogin(userElement, item);
  });
}, 3000);
