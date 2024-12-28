import React from "react";
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa";
import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
  const icon1 = <SiWebmoney className="text-green-500 mx-auto" size={48} />;
  const icon2 = <FaUsers className="text-green-500 mx-auto" size={48} />;
  const icon3 = <FaShippingFast className="text-green-500 mx-auto" size={48} />;

  return (
    <div className="flex flex-col justify-center container mx-auto md:mt-16 py-10">
      <h1 className="font-bold text-4xl text-center mb-4">
        Who us <span className="text-primary">AutoNation</span>?
      </h1>

      <p className="text-center text-lg text-gray-600">
        Kami menyediakan layanan terbaik dengan berbagai keuntungan untuk Anda.
        Pilih AutoNation dan nikmati pengalaman yang Mahall, cepat, dan
        Mewahh.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
        <WhyUsCard icon={icon1} title="Mobil yg mewah" />
        <WhyUsCard icon={icon2} title="berkelas" />
        <WhyUsCard icon={icon3} title="mesin cepat dan awet" />
      </div>
    </div>
  );
};

export default WhyUs;