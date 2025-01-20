import React from "react";
import img from "../../assets/img/vision.jpg";

const Vision = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:items-start gap-8 px-6 md:px-16 py-16 bg-gradient-to-b from-black via-purple-900 to-black min-h-screen">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Ilustrasi Visi"
          className="rounded-lg shadow-lg border border-gray-200 w-full max-w-md"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-gray-800">Visi Kami</h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-600 leading-relaxed">
          AutoNation adalah dealer mobil terbesar di dunia, yang berpusat di
          Amerika Serikat dengan lebih dari 300 dealer di seluruh negeri. AutoNation
          menawarkan berbagai macam kendaraan baru dan bekas dari hampir semua produsen
          mobil terkemuka. ♡ ( ◡‿◡ )
        </h2>
        <p className="text-gray-500 leading-relaxed text-justify">
          Kami bertujuan untuk memberikan solusi mobilitas yang ramah lingkungan dan
          berkelanjutan. Kami percaya bahwa setiap individu dapat berkontribusi untuk
          menciptakan perubahan yang positif bagi dunia melalui tindakan kecil sehari-hari.
          Temukan bagaimana solusi kami dapat meningkatkan kualitas hidup Anda.
        </p>
        <p className="text-gray-500 leading-relaxed text-justify">
          Bergabunglah dengan kami untuk mewujudkan masa depan yang lebih hijau dan
          berkelanjutan. Kami percaya bahwa dengan bekerja sama, kita dapat menciptakan
          dunia yang lebih baik untuk generasi mendatang.
        </p>
      </div>
    </div>
  );
};

export default Vision;
