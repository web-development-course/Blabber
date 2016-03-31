$(document).ready(function () {

  if (document.location.href.indexOf('email') < 0 && document.location.pathname != '/') {
    document.location.href = '/';
  }

  $('#createBlab').submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: '/blabs/create',
      type: 'post',
      data: $(this).serialize(),
      success: function () {
        document.location.reload();
      }
    });
  });

  $('.deleteBlab').click(function (e) {
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      type: 'delete',
      data: $(this).serialize(),
      success: function () {
        document.location.reload();
      }
    });
  });

  $('.upvoteBlab').click(function (e) {
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
});

function md5(text) {

}