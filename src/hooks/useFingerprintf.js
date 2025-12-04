import { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

const useFingerprint = () => {
  const [fingerprint, setFingerprint] = useState(null);

  useEffect(() => {
    const loadFingerprint = async () => {
      try {
        // Load FingerprintJS Pro với API key
        const fpPromise = FingerprintJS.load({
          apiKey: process.env.REACT_APP_FINGERPRINT_API_KEY || 'your-api-key-here'
        });

        // Chờ lấy fingerprint nhưng không ảnh hưởng render
        fpPromise.then(async (fp) => {
          const result = await fp.get();
          setFingerprint(result.visitorId);
          sessionStorage.setItem("fp", result.visitorId);
        });
      } catch (error) {
        console.error("Lỗi khi lấy Fingerprint Pro:", error);
        // Fallback: sử dụng FP miễn phí
        try {
          const { default: FingerprintJSFree } = await import("@fingerprintjs/fingerprintjs");
          const fp = await FingerprintJSFree.load();
          const result = await fp.get();
          setFingerprint(result.visitorId);
          sessionStorage.setItem("fp", result.visitorId);
        } catch (fallbackError) {
          console.error("Lỗi fallback FP:", fallbackError);
        }
      }
    };

    loadFingerprint();
  }, []);

  return fingerprint;
};

export default useFingerprint;
