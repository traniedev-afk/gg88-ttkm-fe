import React from 'react';

const LoadingApply = () => {
  const PRIMARY = '#25c4af';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="relative">
        {/* Container chính đơn giản */}
        <div className="relative w-24 h-24">
          {/* Vòng tròn ngoài với hiệu ứng xoay mượt mà */}
          <div
            className="absolute inset-0 w-full h-full border-4 rounded-full animate-spin"
            style={{
              borderColor: '#b9f3ec',
              borderTopColor: PRIMARY
            }}
          ></div>

          {/* Vòng tròn trong với hiệu ứng xoay ngược chậm */}
          <div
            className="absolute inset-3 w-18 h-18 border-4 rounded-full animate-spin-reverse"
            style={{
              borderColor: '#8be8db',
              borderTopColor: PRIMARY
            }}
          ></div>

          {/* Điểm trung tâm với hiệu ứng pulse nhẹ nhàng */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full animate-pulse"
            style={{ backgroundColor: PRIMARY }}
          ></div>
        </div>

        {/* Text loading đơn giản */}
        <div className="mt-8 text-center">
          <div
            className="font-semibold text-xl mb-3"
            style={{ color: PRIMARY }}
          >
            Đang xử lý...
          </div>
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full animate-bounce"
                style={{
                  backgroundColor: PRIMARY,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS đơn giản cho hiệu ứng */}
      <style jsx>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-reverse {
          animation: spin-reverse 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingApply;
