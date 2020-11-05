/* on page 1 */
const DOMStrings = {
  form_email: '.form__input',
  form_message: '.textarea',
  submit: '.btn-submit'
};

let state = {};
//window.state = state;

// OK
function get_email () {
  let email = document.querySelector(DOMStrings.form_email).value;
  return email;
};

// OK
function get_message () {
  let message = document.querySelector(DOMStrings.form_message).value;
  return message;
};

function submit() {
  document.querySelector(DOMStrings.submit).addEventListener('click', function() {
    let message, email;
    messages = get_message;
    email = get_email;
    // state.add

    var obj = {message: get_message, email: get_email}
    _.merge(state, obj);
});


var obj = {key1: "value1", key2: "value2"};
var obj2 = {key2:"value4", key3: "value3", key4: undefined};
_.merge(obj, obj2);
console.log(obj);


/* on page 2 */
// alert(window.name);