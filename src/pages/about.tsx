const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">
        About Us – Local Face
      </h1>

      <p className="text-lg mb-6">
        Chào mừng bạn đến với <strong>Local Face</strong> – nơi mà mùi hương không chỉ đơn thuần là nước hoa, mà là cách chúng tôi kể chuyện, thể hiện cảm xúc và khẳng định cá tính riêng của bạn.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🌿 Sứ mệnh của chúng tôi</h2>
        <p>
          Tại Local Face, chúng tôi tin rằng mỗi người có một mùi hương đặc trưng – như một dấu ấn riêng không thể trộn lẫn. 
          Sứ mệnh của chúng tôi là giúp bạn tìm thấy hương thơm phản chiếu đúng cá tính, tâm trạng và phong cách sống của bạn.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🌸 Điều gì làm chúng tôi khác biệt?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Chọn lọc kỹ lưỡng các dòng nước hoa chính hãng, chất lượng cao</li>
          <li>Đa dạng mùi hương phù hợp cho cả nam, nữ và unisex</li>
          <li>Tư vấn tận tâm để bạn chọn được mùi hương đúng với cảm xúc và hoàn cảnh sử dụng</li>
          <li>Cam kết về giá cả minh bạch và dịch vụ hậu mãi tốt</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">📍 Liên hệ với chúng tôi</h2>
        <p>
          Địa chỉ: Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm,Hà nội <br />
          Email: <a href="banlnph51162@gmail.com" className="text-blue-400 underline">banlnph51162@gmail.com</a> <br />
          Hotline: <a href="tel:0909123456" className="text-blue-400 underline">0855831662</a>
        </p>
      </section>

      <p className="text-center italic mt-10 text-gray-300">
        “Mùi hương là câu chuyện của bạn – hãy để Local Face giúp bạn kể câu chuyện đó..”
      </p>
    </div>
  );
};

export default AboutUs;
