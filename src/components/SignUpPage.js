import React, { Component } from 'react'
import styled from "styled-components";
import image from "../img/main.jpeg"
import dogs from "../img/dogs.png"


export default class SignUpPage extends Component {
  render() {
    return (
      <SignUpWrapper className="container my-5">
        {/* <div class="flex-container"> */}
        <div id="showcase" >
          <p>.</p>
        </div>
        <div id="signupform" className="container my-5">
          <center ><h3 className="text-white my-2">SIGN UP</h3></center>
          <div className="form-group  my-4">
            <label className="text-white">First Name</label>
            <input type="text" placeholder="First Name" className="form-control" name="firstName" />
          </div>

          <div className="form-group">
            <label className="text-white">Email Id: </label>
            <input type="email" placeholder="First Name" className="form-control" name="firstName" />
          </div>

          <div className="form-group">
            <label className="text-white">Password</label>
            <input type="password" placeholder="First Name" className="form-control" name="firstName" />
          </div>

          <div className="form-group">
            <label className="text-white">Mobile Number:</label>
            <input type="text" placeholder="First Name" className="form-control" name="firstName" />
          </div>
          <form >

            <button className="btn text-white btn-primary">Sign-Up</button>

          </form>
        </div>
        {/* </div> */}


      </SignUpWrapper>
    )
  }
}


const SignUpWrapper = styled.nav`
#showcase {
  background: url(${image})  bottom center/cover no-repeat;
  min-height: 650px;
  width: 65%;
  position: relative; 
  display:inline-block;
  z-index:-1;
  top:-30rem;

}

#signupform{
  top:0rem;
  left:-12rem;
  min-height: 550px;
  width: 35%;
  // margin-left:-100px;
  background: url(${dogs})  bottom center/cover no-repeat;
  display:inline-block;
  z-index:1;
  position:relative;

}


`
