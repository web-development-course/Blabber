$(document).ready(function () {

  if (document.cookie.indexOf('blabber') < 0 && document.location.pathname != '/') {
    document.location.href = '/';
  }

  $('#enterToBlabs').click(function() {
    var email = $('#blabber-email').val();
    localStorage['blabber'] = email;
    document.cookie="blabber=" + escape(email);
    document.location = '/blabs';
  });

  $('#createBlab').submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: '/blabs/create',
      type: 'post',
      data: $(this).serialize(),
      success: function () {
        document.location.href = '/blabs';
      }
    });
  });

  $('#updateBlab').submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      type: 'put',
      data: $(this).serialize(),
      success: function () {
        document.location.reload();
      }
    });
  });

  $('#deleteBlab').click(function (e) {
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      type: 'delete',
      data: $(this).serialize(),
      success: function () {
        document.location.href = '/blabs';
      }
    });
  });
});

function md5(text) {

}