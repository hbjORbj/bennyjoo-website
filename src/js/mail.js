const submitForm = (form) => {
  window.open(
    `mailto:sldisek783@gmail.com?subject=${form.subject.value}&body=${form.message.value}`,
    "_self"
  );
  return false;
};
