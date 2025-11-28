const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Spacer để đẩy footer xuống cuối */}
      <div className="flex-grow"></div>
      
      <footer className="mt-auto w-full bg-lime-500">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8 lg:py-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
            
            {/* Thông tin trường */}
            <div className="text-center sm:text-left text-lime-100 text-sm sm:text-base leading-relaxed max-w-md">
              <h3 className="uppercase font-bold text-white text-lg mb-3 tracking-wide">
                Trường Đại Học Cần Thơ
              </h3>
              <div className="space-y-1">
                <p className="flex items-center justify-center sm:justify-start">
                  <svg className="w-4 h-4 mr-2 text-lime-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Khu 2, Đ. 3/2, P. Ninh Kiều, TP. Cần Thơ
                </p>
                <p className="flex items-center justify-center sm:justify-start">
                  <svg className="w-4 h-4 mr-2 text-lime-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  ĐT: +84292 3831 530; 3838 237; 3832 663
                </p>
                <p className="flex items-center justify-center sm:justify-start">
                  <svg className="w-4 h-4 mr-2 text-lime-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email: dhct@ctu.edu.vn
                </p>
              </div>
            </div>

            {/* Logo và thông tin bổ sung */}
            <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
              <div className="mb-4">
                <img
                  src="https://www.ctu.edu.vn/images/branding/logo/CTU_logo.png"
                  alt="Logo Trường Đại học Cần Thơ"
                  className="w-20 sm:w-24 h-auto opacity-90 hover:opacity-100 transition-opacity duration-300 mx-auto"
                />
              </div>
              <div className="text-lime-100 text-xs sm:text-sm">
                <p className="mb-1">© 2024 Can Tho University</p>
                <p>All rights reserved</p>
              </div>
            </div>
          </div>
          
          {/* Đường kẻ phân cách */}
          <div className="border-t border-lime-500 mt-6 pt-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-lime-200 text-xs sm:text-sm">
              <p className="mb-2 sm:mb-0">
                Ngân hàng thông tin giống cây trồng Việt Nam.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Chính sách bảo mật
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Điều khoản sử dụng
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Nút quay lại đầu trang */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 inline-flex items-center justify-center rounded-full bg-lime-500 text-green-800 p-3 shadow-lg hover:bg-lime-400 hover:text-green-900 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 transform hover:scale-105 z-50"
          aria-label="Quay lại đầu trang"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </footer>
    </>
  );
};

export default Footer;