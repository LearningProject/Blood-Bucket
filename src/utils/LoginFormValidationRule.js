export default function validate(values) {
  let errors = {};
  if (Object.keys(values).length > 0 && values.constructor === Object) {
    for(let[key, value] of Object.entries(values)){
      console.log('value',value);
      if(!value.length){
        delete values[key];
      }
    }
  }
  if (Object.keys(values).length === 0 && values.constructor === Object) {
    errors.name = '*Name is reuired';
    errors.password = '*Password  is required';
    errors.captchaResponse = "*Captcha is required"
  }else if( Object.keys(values).length === 1 && values.constructor === Object) {
    values.name && values.name !== '' ? errors = {password: '*Password  is required', captchaResponse : "*Captcha is required"} : 
    values.password && values.password !== '' ? errors = {name: '*Name  is required', captchaResponse : "*Captcha is required"} :
    values.captchaResponse  && values.captchaResponse !== '' ? errors = {name: '*Name  is required',password : "*Password is required"} : errors = {}
  }else if( Object.keys(values).length === 2 && values.constructor === Object) {
    console.log(values.name && values.captchaResponse )
    values.name && values.name !== '' && values.password && values.password !== '' ? errors = {captchaResponse : "*Captcha is required"} : 
    values.password && values.password !== '' && values.captchaResponse &&values.captchaResponse !== '' ? errors =  {name: '*Name  is required'}:
    values.name && values.name !== '' && values.captchaResponse && values.captchaResponse !== '' ? errors =  {password: '*Password  is required'}: errors = {}
  }else if( Object.keys(values).length === 3 && values.constructor === Object) {
   const validate = ValidCaptcha()
   if(!validate){
     errors =  {captchaResponse : "*captcha is not matched"};
  }
}
console.log('errors',errors);
  return errors;
};
function removeSpaces(string) {
  return string.split(' ').join('');
}

/* Validating Captcha Function */
function ValidCaptcha() {
  var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
  var str2 = removeSpaces(document.getElementById('txtCompare').value);
  if (str1 === str2) return true;
  return false;
}  