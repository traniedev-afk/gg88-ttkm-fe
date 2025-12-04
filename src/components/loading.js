import React from 'react';

const Loading = () => {
  const PRIMARY = '#25c4af';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative">
        {/* Vòng tròn chính với hiệu ứng xoay mượt mà */}
        <div
          className="w-20 h-20 border-4 rounded-full animate-spin"
          style={{
            borderColor: '#b9f3ec',
            borderTopColor: PRIMARY
          }}
        ></div>

        {/* Điểm trung tâm với hiệu ứng pulse nhẹ nhàng */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full animate-pulse"
          style={{ backgroundColor: PRIMARY }}
        ></div>

        {/* Text loading đơn giản */}
        <div className="mt-6 text-center">
          <div
            className="font-semibold text-lg"
            style={{ color: PRIMARY }}
          >
            Đang tải...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
