; !function () {

  $('.btn').on('click', function () {
    $.ajax({
      type: 'post',
      url: 'http://localhost/PHP/project_360/php/login.php',
      data: {
        name: $('.name').val(),
        pass: hex_sha1($('.pass').val()), //数据库有加密，所以密码比较要加密进去比较
      }
    }).done(function (w) {
      if (w) {
        location.href = "../html/index_360.html";
        $.cookie('username', $('.name').val(), { expires: 10, path: '/' })
      } else {
        $('.pass').val('')
        alert('用户名或者密码错误');
      }
    });
  })

  // //登陆成功后显示用户名称
  if ($.cookie('username')) {
    $('.username').html($.cookie('username'));
    $('.quit').show();
  }

  $('.quit').on('click', function () {
    $.cookie('username', '', { expires: -1, path: '/' })
    $('.quit').hide();
    $('.username').html('登陆');
  })

}();