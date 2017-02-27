var loginModal = $("#loginModal").modal('hide');
var registerModal = $("#registerModal").modal('hide');

$('[data-target="loginModal"]').on('click', function () {
  registerModal.modal('hide');
  loginModal.modal('show');
});

$('[data-target="registerModal"]').on('click', function () {
  loginModal.modal('hide');
  registerModal.modal('show');
});

var loginModalRegisterButton = $('[data-click=loginModalRegisterButton]');
loginModalRegisterButton.on('click', function () {
  loginModal.modal('hide');
  registerModal.modal('show');
});
