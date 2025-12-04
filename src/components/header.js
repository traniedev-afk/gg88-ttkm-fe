import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center pl-2">
        </div>
        <div className="flex items-center gap-4 pr-2">
          <button
            className="bg-[#00AEEF] shadow-lg border border-white/60 text-white font-bold uppercase py-3 px-8 rounded-full text-base md:text-lg transition-all outline-none focus:ring-2 focus:ring-sky-300"
            style={{ boxShadow: '0 4px 16px 0 rgba(0,174,239,0.3), 0 1.5px 0 0 #fff inset' }}
          >
            ĐĂNG NHẬP
          </button>
          <button
            className="bg-[#01D037] shadow-lg border border-white/60 text-white font-bold uppercase py-3 px-8 rounded-full text-base md:text-lg transition-all outline-none focus:ring-2 focus:ring-green-300"
            style={{ boxShadow: '0 4px 16px 0 rgba(1,208,55,0.3), 0 1.5px 0 0 #fff inset' }}
          >
            ĐĂNG KÝ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
