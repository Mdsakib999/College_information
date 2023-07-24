import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
  <div>
    
    <p className='text-2xl pt-7'>College Information .<br/>Providing reliable information since 2000</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Info</a> 
    <a className="link link-hover">Details</a> 
    <a className="link link-hover">Course</a> 
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Careerer</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;