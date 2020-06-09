import React, { Component } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";



export default class Platform extends Component {
  render() {
    return (
      <PlatformWrapper >

        {/* <div id="heading">Welcome to Edunomics</div>
        <div id="navbar">df</div>
        <div className="" id="main">sdf</div> */}

        <Link to="/" id="book" className="btn btn-sm px-3 my-2 mx-2"> <h5>Welcome to Edunomics</h5> </Link>



        <div className="row">

          <div className="side">
            <Link to="/platform" id="book" className="btn btn-sm px-3 my-2 mx-2"> <h5>Home</h5>
            </Link>
            <br />
            <Link to="/sessions" id="book" className="btn btn-sm px-3 my-2 mx-2">
              <h5>Sessions</h5>
            </Link>
            <br />
            <Link to="/downloads" id="book" className="btn btn-sm  px-3 my-2 mx-2">
              <h5>Downloads</h5>
            </Link>
            <br />
            <Link to="/settings" id="book" className="btn btn-sm  px-3 my-2 mx-2">
              <h5>Settings</h5>
            </Link>
            <br />
            <Link to="/about" id="book" className="btn btn-sm  px-3 my-2 mx-2">
              <h5>About</h5>
            </Link>
            <br />
          </div>


          <div className="main">

            <div id="main-1" className="container">

              <div class="row border p-5" >
                <div class="col bg-white p-5 border rounded shadow">
                  FIRST
                </div>

                <div class="col bg-white p-5 border rounded shadow">
                  SECOND
                </div>

              </div>

              <div class="row border p-5" >
                <div class="col bg-white p-5 border rounded shadow">
                  FIRST
                </div>
                <div class="col bg-white p-5 border rounded shadow ">
                  SECOND
                </div>
              </div>

            </div>

            <div id="main-2" className="container justify-content-center">

              <div id="first" className="container">sdfgdfgfdg Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellendus. f</div>
              <div id="second" className="container">sdfgdfgfdg Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellendus. f</div>
              <br />

            </div>
            <div id="third" className="container">sdfgdfgfdg Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellendus. f</div>

          </div>
        </div>
        <br />

        <section id="newsletter" class="bg-dark">
          <div class="container text-white text-center py-2">
            <div class="row justify-content-center">
              <h4>EDUNOMICS</h4>
            </div>
            <p>abc@gmail.com</p>
          </div>

        </section>

      </PlatformWrapper>
    )
  }
}


const PlatformWrapper = styled.nav`
#first{
  display:inline-block;
  width:30%;
  margin:1rem;
  border: 2px solid grey;
  border-radius: 5px;

}

#second{
  display:inline-block;
  border: 2px solid grey;
  width:30%;
  margin:1rem;
  border-radius: 5px;
}

#third{
  border: 2px solid grey;
  width:90%;
  height: 20%;
  margin-bottom:4rem;
  border-radius: 5px;
}

#heading{
  background-color: white;
  height:2rem;
  font-size:1.2rem;

}

#navbar{
  background-color: black;
}

.side {
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

/* Main column */
.main {
  flex: 70%;
  padding: 20px;
  // display: flex;
  // justify-content: space-between;
}

#main-1{
  background-color: #23B79A;

}
#main-2{
  background-color: white;
  display: flex;
  justify-content: space-between;
}

body{
  // background-color: coral;


}



`