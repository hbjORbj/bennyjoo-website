var submitForm = function submitForm(form) {
  window.open("mailto:sldisek783@gmail.com?subject=".concat(form.subject.value, "&body=").concat(form.message.value), "_self");
  return false;
};

