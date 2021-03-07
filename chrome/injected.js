
  var selector = ".claimable-bonus__icon";

  var endTime = new Date(new Date().getTime());
  endTime.setMinutes(endTime.getMinutes() + 15);

  var handler = function() {
    // 當前時間
    var time = new Date();
    var nowTime = time.getTime(); // 獲取當前毫秒數

    // 倒數計時: 差值
    var offsetTime = (endTime - nowTime) / 1000; // 以秒為單位
    var sec = parseInt(offsetTime % 60); // 秒
    var min = parseInt((offsetTime / 60) % 60); // 分 ex: 90秒
    var hr = parseInt(offsetTime / 60 / 60); // 時

    var el = document.querySelector(selector);
    if (el) {
      el.click();
      console.log(`%c${new Date().toTimeString().slice(0, 8)} 恭喜你獲得獎勵`, "color:Orange");
      endTime = new Date(new Date().getTime());
      endTime.setMinutes(endTime.getMinutes() + 15);
  
    } else {
      console.log(`%c嘗試領獎，距離下一次領獎時間大約還有：${hr}時${min}分${sec}秒`, "color:Green");
    }
  };

  setInterval(handler, 5000);