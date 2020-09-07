import React , { useState, useEffect }from 'react';
import './LoginForm.css';
import refresh from '../../assests/refresh.png';
import useForm from "../../utils/useForm";
import validate from '../../utils/LoginFormValidationRule';
function LoginForm() {    
  const [captcha,setCapch] = useState(generateCaptchaValue())
  function login() {
    console.log('No errors, submit callback called!');
  }
  function generateCaptchaValue(e) {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    var i;
    for (i = 0; i < 4; i++) {
      var a = alpha[Math.floor(Math.random() * alpha.length)];
      var b = alpha[Math.floor(Math.random() * alpha.length)];
      var c = alpha[Math.floor(Math.random() * alpha.length)];
      var d = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + '' + b + '' + '' + c + '' + d;
    return code;
    //document.getElementById("mainCaptcha").value = code
  }
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);
  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className='row'>
          <div className="col-sm-12 col-sm-offset-12 form-box">
            <div className="form-top">
              <div className="form-top-left" style={{ color:"white" }}>
                <h3>Blood Bucket Login : Portal/Application</h3>
                <p>Enter your username and password to login on:</p>
              </div>
              <div className="form-top-right">
                <i className="fa fa-lock"></i>
              </div>
            </div>

          </div>
        </div>
        <div className="form-group">
          {errors.name && (  <span className="is-danger">{errors.name}</span>)}
          <input type="text" name="name" placeholder="Enter User Name" onChange={handleChange}  
          value={values.name || ''}  className={`form-username form-control ${errors.name ? 'inputborder':''}`} id="form-username" autoComplete="off" max-length="20" />
          </div>

        <div className="form-group">
        {errors.password && (  <span className="is-danger">{errors.password}</span>)}
          <input type="password" name="password" onChange={handleChange} id="emailImput" 
          placeholder="Enter Password"   value={values.password || ''}  className={`form-username form-control ${errors.password  ? 'inputborder':''}`} id="form-username form-password" autoComplete="off" />
         
          </div>
        <div className='form-inline'>
        {errors.captchaResponse && (  <span className="is-danger">{errors.captchaResponse}</span>)}
        <div className="form-group">
       
          <input readOnly name="captcha" value={captcha} id="txtCaptcha" style={{fontWeight:'900'}}/>
          <a  onClick={event => setCapch(generateCaptchaValue)}><img className='refresh' src={refresh} /></a>
          <input type="text" tabIndex="3" className={`captcha-Text  ${errors.captchaResponse ? 'inputborder':''}`} style={{ width: '48%' }} onChange={handleChange} name="captchaResponse" value={values.captchaResponse|| ''}
          placeholder="Enter Captcha" autoComplete="off" id="txtCompare"/>
         
        </div>
        </div>
        <input type="submit" tabIndex="4" className="form-control btn btn-primary" value="Sign in!"  />
        <div className="row">
        <div className="col-md-4" style={{color:'red',fontSize:'smaller'}}><span>Forgot Password ?</span> </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;