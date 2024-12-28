import React from "react";
import Vision from "./Vision";
import Approch from "./Approch";

const AboutUs = () => {
  return (
    <div className="container pt-24">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Auto <span className="text-primary">Nation</span>
        </h1>
      </div>

      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Dealer car</h2>
        <Vision />
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          tentang Kami
        </h2>
        <Approch />
      </section>
    </div>
  );
};

export default AboutUs;
