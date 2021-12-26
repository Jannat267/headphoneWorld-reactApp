import React from 'react';
import 'animate.css';

const HomeSection = () => {
	return (
		<div>
			<div className="container product-container">
			<h1 className="text-center fw-bold text-uppercase animate__animated animate__pulse animate__delay-2s">Introducing</h1>
			<p className="text-center text-muted text-uppercase">Gaming Headphones</p>


			<div className="row my-5  d-flex justify-content-center">
				<img className="img-fluid gif-style" src="https://i.pinimg.com/originals/e1/d2/9e/e1d29e77742678750cf7a1d143696f14.gif" alt="" />
			</div>

			<div className="row">


			<p className="text-center text-muted">Experience</p>
      <h1 className="text-center fw-bold text-info text-uppercase">Best in Quality</h1>

			<div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100 border border-0">
     <div className="text-center">
	 <img src="https://www.gigaled.gr/img/cms/RGB-icon.png" width="100" className="mt-5" alt="..."/>
	 </div>
      <div className="card-body text-center">
        <p className="card-title fw-bold">Eye Catching RGB</p>
        <p className="card-text text-muted"> Partially rgb with control viewed from 10 feet with 24-bit true color (16 colors)</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border border-0">
	<div className="text-center">
	 <img src="https://www.freeiconspng.com/uploads/usb-icon-33.png" width="100" className="mt-5" alt="..."/>
	 </div>
      <div className="card-body text-center">
        <p className="card-title fw-bold">USB & 3.5mm</p>
        <p className="card-text text-muted">Includes optional full immersion face mask. Supports usb industry standard 3D content</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border border-0">
	<div className="text-center">
	 <img src="https://iconape.com/wp-content/files/nb/296788/png/296788.png" width="100" className="mt-5" alt="..."/>
	 </div>
      <div className="card-body text-center">
        <p className="card-title fw-bold">Low Decibel</p>
        <p className="card-text text-muted">Built-in noise cancellation allow the user to participate in the sport for hours of racing.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border border-0">
	<div className="text-center">
	 <img src="https://www.digiseller.ru/preview/2255/p1_2695501_7bc2e721.png" width="100" className="mt-5" alt="..."/>
	 </div>
      <div className="card-body text-center">
        <p className="card-title fw-bold">Best Quality</p>
        <p className="card-text text-muted">We sell 100% best quality product all over the world. Our product is 100% Genuine. </p>
      </div>
    </div>
  </div>
</div>
			</div>
			</div>
		</div>
	);
};

export default HomeSection;