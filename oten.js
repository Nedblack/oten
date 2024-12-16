function addCustomStyles() {
  $("style").last().append(`
      #users .uzr.raft img.co {
          width: 0px !important;
          height: 0px !important;
          margin-right: 1px;
      }

      #users .uzr.raft span.uhash {
          -webkit-text-fill-color: transparent;
          width: 0px !important;
          height: 0px !important;
          margin-right: 1px;
      }

      #users .uzr.raft img.u-ico {
          margin-left: 5px;
          width: 0px !important;
          height: 0px !important;
          margin-right: 1px;
      }

      #users .uzr.raft .fitimg.u-pic {
          border: 1px solid #ececec;
          height: 52px !important;
          border-radius: 0px 8px 0px 8px;
          box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 3px #000;
          margin-bottom: 2px !important;
      }

      #users .uzr.raft .u-msg {
          margin-left: 8px;
          margin-top: 2px !important;
          background-size: 100% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: #0000;
          background-image: linear-gradient(-225deg,#696969 0%,#434343 29%,#f00 67%,#696969 100%);
          padding: 0px !important;
          font-size: 89% !important;
      }

      #users .uzr.raft {
          box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 3px #000;
          margin-bottom: 3px !important;
          margin-top: 2px !important;
          border-radius: 0px 10px 0px 10px;
          border: 1px solid #fff;
          background-image: url();
          background-size: 100%;
      }

      #users .uzr.raft .d-flex.fl {
          padding-right: 0px !important;
      }

      #users .uzr.raft .u-topic {
          margin-left: 5px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: #0000;
          background-image: url();
          background-size: cover;
      }

      #users .uzr.raft .itarr_raft {
          width: 25px;
          margin-top: 28px;
          cursor: pointer;
          margin-left: -3px;
      }
  `);
}

const _ma56znz22 = [{
  name: 'raft',
  deco: "GKK",
  cls: "raft",
  icon: "https://www2.0zz0.com/2024/12/13/18/278696375.gif"
}];

setInterval(() => {
  if (myid != null) {
      _ma56znz22.forEach(item => {
          const userElement = $(users).find(".uzr:contains('" + item.deco + "')");
          if (userElement && !userElement.hasClass(item.cls)) {
              $(users).find(".uzr:contains('" + item.deco + "')").addClass(item.cls);
              $(users).find(".uzr." + item.cls + " .fitimg.u-pic").append("<img class=\"itarr_" + item.name + "\" title=\"?????\" src=\"" + item.icon + "\">");
          }
      });
  }
}, 6000);
