import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import image from "../img/main.jpeg"


export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>

        <section id="showcase" className="d-flex">
          {/* <img src={image} alt="store" /> */}

          <div id="overlay"></div>
          <h6 className="container text-white welcome">Welcome to Edunomics</h6>
          <div id="header" className="container text-white">
            <Link to="/platform" id="book" className="btn btn-sm btn-primary px-3 my-2 mx-2">
              Log-In
            </Link>
            <Link to="/signuppage" id="book" className="btn btn-sm btn-primary px-3 my-2 mx-2">
              Sign-Up
            </Link>

            <h3 className="display-6 mb-0">WHERE DO YOU WANT TO GO TODAY?</h3>
            <h6 className="display-6">SHARE YOUR ULTIMATE BUCKET LIST WITH US</h6>
            {/* <p className="lead d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, hic?</p> */}
          </div>
        </section>

        <section id="mid" className="container my-3">
          <h4 className="container my-3">Whatever your style, travel your way.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus fuga eaque magni, velit consectetur commodi, corrupti quo nobis, aperiam repellat quisquam? Id quis cum nemo itaque esse, natus, culpa aperiam quidem aliquam, molestias tenetur quisquam optio ut possimus nobis quia vero perferendis quo vitae saepe repellat! Fuga, minima odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus fuga eaque magni, velit consectetur commodi, corrupti quo nobis, aperiam repellat quisquam? Id quis cum nemo itaque esse, natus, culpa aperiam quidem aliquam, molestias tenetur quisquam optio ut possimus nobis quia vero perferendis quo vitae saepe repellat! Fuga, minima odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus fuga eaque magni, velit consectetur commodi, corrupti quo nobis, aperiam repellat quisquam? Id quis cum nemo itaque esse, natus, culpa aperiam quidem aliquam, molestias tenetur quisquam optio ut possimus nobis quia vero perferendis quo vitae saepe repellat! Fuga, minima odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus fuga eaque magni, velit consectetur commodi, corrupti quo nobis, aperiam repellat quisquam? Id quis cum nemo itaque esse, natus, culpa aperiam quidem aliquam, molestias tenetur quisquam optio ut possimus nobis quia vero perferendis quo vitae saepe repellat! Fuga, minima odit.</p>
          <div id="mid-image" className="my-3"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus fuga eaque magni, velit consectetur commodi, corrupti quo nobis, aperiam repellat quisquam? Id quis cum nemo itaque esse, natus, culpa aperiam quidem aliquam, molestias tenetur quisquam optio ut possimus nobis quia vero perferendis quo vitae saepe repellat! Fuga, minima odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus fuga eaque magni, velit consectetur commodi, corrupti quo nobis, aperiam repellat quisquam? Id quis cum nemo itaque esse, natus, culpa aperiam quidem aliquam, molestias tenetur quisquam optio ut possimus nobis quia vero perferendis quo vitae saepe repellat! Fuga, minima odit.</p>
        </section>

        <section id="newsletter" class="bg-dark">
          <div class="container text-white text-center py-5">
            <p class="lead">JOIN OUR NEWSLETTER FOR DEALS AND UPDATES AND OFFERS</p>

            <div class="row justify-content-center">
              <h4>EDUNOMICS</h4>
            </div>
            <p>abc@gmail.com</p>
            <p>ICONS</p>
            JOIN US | COOKIE POLICY | TERMS OF USE | TECH | PRIVACY POLICY

          </div>

        </section>

      </HomeWrapper>

    )
  }
}

const HomeWrapper = styled.nav`
 
  #showcase {
    background: url(${image})  bottom center/cover no-repeat;
    min-height: 550px;
    width: 100%;
    position: relative; 
  }
  #showcase #header {
    top:0;
    z-index: 2; }

  #showcase #overlay {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1; }
  #showcase h1 {
    font-family: "Questrial", sans-serif;
    line-height: 1; }

  #showcase #book {
    font-size: 0.9rem;
    border-radius: 2rem; }

    @media (max-width: 768px) {
    
      #showcase {
        min-height: 500px; }
        #showcase h1 {
          font-size: 4rem; } 
      }

    .welcome{
      top:5%;
      z-index: 2; 

    }

    #mid-image{
      background: url(${image})  bottom center/cover no-repeat;
      min-height: 350px;

      width: 100%;
      position: relative; 

    }


`;
