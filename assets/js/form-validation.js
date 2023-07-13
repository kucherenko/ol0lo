/* JavaScript code for validating form inputs using jQuery Validation */

// Initialize form validation
$('#myForm').validate({
  rules: {
    name: 'required',
    email: {
      required: true,
      email: true
    },
    message: 'required'
  },
  submitHandler: function(form) {
    form.submit();
  }
});