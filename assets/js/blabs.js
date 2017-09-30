$(document).ready(function () {

  $('#create-blab').submit(function (e) {
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

  $('.delete-blab').click(function (e) {
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

  $('.upvote-blab').click(function (e) {
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
