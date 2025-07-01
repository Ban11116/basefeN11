const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">
        Góc chia sẻ – Blog Local Face
      </h1>

      <p className="text-lg mb-6">
        Nơi chúng tôi chia sẻ những câu chuyện, kinh nghiệm, mẹo hay và kiến thức về thế giới nước hoa – từ chọn mùi hương phù hợp đến cách sử dụng và bảo quản.
      </p>

      <ul className="space-y-4 list-disc pl-6">
        <li><strong>Cách chọn nước hoa theo mùa:</strong> Mùi hương cho mùa hè, thu đông,...</li>
        <li><strong>Phân biệt nước hoa thật – giả:</strong> Mẹo nhận biết đơn giản & hiệu quả.</li>
        <li><strong>Top 5 mùi hương unisex được yêu thích 2025</strong></li>
        <li><strong>Hướng dẫn bảo quản nước hoa giúp lưu hương lâu hơn</strong></li>
      </ul>

      <p className="mt-8 italic text-gray-300 text-center">
        “Hương thơm là ký ức – hãy để Local Face giúp bạn viết nên câu chuyện đó.”
      </p>
    </div>
  );
};

export default Blog;
