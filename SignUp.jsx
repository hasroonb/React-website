import React from "react";
const SignUp=()=>{
    return(

        

<>
   <div className="container">
      <div className="col-md-6 mx-auto text-center">
         <div className="header-title">
            <h1 className="wv-heading--title">
            A Luxury Stay
            </h1>
            <h2 className="wv-heading--subtitle">
               Lorem ipsum dolor sit amet! Neque porro quisquam est qui do dolor amet, adipisci velit...
            </h2>
         </div>
      </div>
      <div className="row">
         <div className="col-md-4 mx-auto">
            <div className="myform form ">
               <form action="signup_insert.php" method="post" >
                  <div className="form-group">
                     <input type="text" name="name"  className="form-control my-input"  placeholder="Name" required/>
                  </div>
                  <div className="form-group">
                     <input type="email" name="email"  className="form-control my-input" placeholder="Email"required/>
                  </div>
                  <div className="form-group">
                     <input type="password" min="0" name="password"   className="form-control my-input" placeholder="password"required/>
                  </div>
                  <div className="form-group">
                     <input type="text" min="0" name="phone"   className="form-control my-input" placeholder="Phone"required/>
                  </div>
                  <div className="text-center ">
                     <button type="submit" className=" btn btn-block send-button tx-tfm">SignUp</button>
                  </div>
                  <div className="col-md-12 ">
                     <div className="login-or">
                        <hr className="hr-or"/>
                        <span className="span-or">or</span>
                     </div>
                  </div>
                  <div className="form-group">
                     <a className="btn btn-block g-button" href="/">
                     <i className="fa fa-google"></i> Sign up with Google
                     </a>
                  </div>
                  <p className="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="/" className="ps-hero__content__link">Terms of Use</a> and <a href="/">Privacy Policy</a>.
                  </p>
               </form>
            </div>
         </div>
      </div>
   </div>
   </>
    );
}
export default SignUp;