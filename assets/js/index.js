$(function () {
  //去注册
  $(".loginLink").click(function () {
    $(".login").hide();
    $(".register").show();
  });
  //去登录
  $(".regLink").click(function () {
    $(".register").hide();
    $(".login").show();
  });
  //表单校验
  let form = layui.form;
  form.verify({
    //我们既支持上述函数式的方式，也支持下述数组的形式
    //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    pass: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
    repass: function (value, item) {
      // 通过value 和 密码框的值做比较，如果不一致，弹框提示
      // value：表单的值、item：表单的DOM对象
      if (value !== $(".passwd").val()) {
        return "两次输入的密码不一致";
      }
    },
  });
  //发送ajax请求
  $(".regform").on("submit", function (e) {
    // 2.
    e.preventDefault();

    // 3.
    let data = $(this).serialize();
    // console.log(data);

    // 4.
    $.ajax({
      type: "POST",
      url: "http://ajax.frontend.itheima.net/api/reguser",
      data,
      success: function (res) {
        console.log(res);

        //   if (res.status !== 0) {
        //     // 注册失败
        //     // return console.log(res.message);
        //     return layer.msg(res.message);
        //   }

        //   // 注册成功
        //   // console.log("注册成功");
        //   layer.msg("注册成功");

        //   // 清空注册的form表单
        //   $("#regiForm")[0].reset();

        //   // 去登录 ==> 触发其点击功能
        //   $("#goToLogin").click();
      },
    });
  });
});
