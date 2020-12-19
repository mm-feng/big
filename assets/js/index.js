$.ajax({
  url: "http://ajax.frontend.itheima.net/my/userinfo",
  headers: {
    Authorization: localStorage.getItem("token"),
  },
  success: function (res) {
    //console.log(res);
    let name = res.data.nickname || res.data.username;
    $(".welcome").text(name);
    if (res.data.user_pic) {
      $(".layui-nav-img").attr("src", res.data.user_pic).show();
      $(".via").hide();
    } else {
      //头像隐藏
        $(".layui-nav-img").hide();
        //显示文字头像的第一个字母
      $(".via").show().text(name[0].toUpperCase());
    }
  },
});
