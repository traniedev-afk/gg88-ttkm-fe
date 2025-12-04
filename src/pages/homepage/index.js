import React from "react";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import axios from "axios";
import Footer from "../../components/footer";
import title from "../../assets/titleBrand.png";
import titleDetail from "../../assets/titleDetail.png";
import titleMB from "../../assets/titleTTKMGG88MB.png";
import rule from "../../assets/imgRuleGG88.png";
import ruleMobile from "../../assets/imgRuleGG88mb.png";
import PromotionModal1 from "../../components/promotionModal1";
import ListPromotionModal from "../../components/listPromotionModal";
import styles from "./style.module.css";
import Loader from "../../components/loading";
import LoadingApply from "../../components/loadingApply";
import CryptoJS from "crypto-js";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import buttonBackHome from "../../assets/buttonBackHome.png";
import Header from "../../components/header";
import KMGG88 from "../../assets/KMGG88.png";
import KMGG882 from "../../assets/KMGG882.png";
import btnIndex from "../../assets/button-trangchu.png";
import btnCSKH from "../../assets/button-cskh.png";

const HomePage = () => {
    const [activeButton, setActiveButton] = useState("promotions");
    const [username, setUsername] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [captchaId, setCaptchaId] = useState("");
    const [captchaSvg, setCaptchaSvg] = useState("");
    const [promotions, setPromotions] = useState(null);
    const [listPromotions, setListPromotions] = useState(null);
    const [promotionsMB, setPromotionsMB] = useState(null);
    const [promotion, setPromotion] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [openListPromotionModal, setOpenListPromotionModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingApply, setLoadingApply] = useState(false);
    const [visibleCount, setVisibleCount] = useState(4);
    const [loadedImages, setLoadedImages] = useState({});
    const [showForbiddenModal, setShowForbiddenModal] = useState(false);

    const secretKey = "RR882024RR88";

    useEffect(() => {
        fetchCaptcha();
        fetchPromotionMB();
        fetchPromotion();
        setLoading(true);
    }, []);

    const fetchCaptcha = async () => {
        try {
            const fp = await FingerprintJS.load();
            const result = await fp.get();

            const fingerprint = result.visitorId;
            // lưu fingerprint để dùng lại lúc checkUsername
            sessionStorage.setItem("fp", fingerprint);

            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/captcha`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Fingerprint": fingerprint,
                    },
                }
            );
            const data = await response.json();

            if (data.statusCode === 200) {
                setCaptchaId(data.data.captchaId);
                setCaptchaSvg(data.data.captcha);
            } else {
                toast.error("Không thể tải Captcha");
            }
        } catch (error) {
            toast.error("Lỗi tải Captcha");
        }
    };

    const encryptData = (data) => {
        return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
    };

    const fetchPromotion = async () => {
        setLoading(true);
        const loadingTimeout = setTimeout(() => setLoading(false), 3000);

        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/promotion`
            );
            setPromotions(response.data.data.promotion);
            setLoading(false);
            clearTimeout(loadingTimeout);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const fetchPromotionMB = async () => {
        const loadingTimeout = setTimeout(() => setLoading(false), 3000);
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/promotion?platform=M`
            );
            setPromotionsMB(response.data.data.promotion);
            setLoading(false);
            clearTimeout(loadingTimeout);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const checkUsername = async () => {
        if (!username.trim() || !captcha.trim()) {
            toast.warn("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        try {
            setLoadingApply(true);
            const fingerprint = sessionStorage.getItem("fp");

            // Mã hóa payload
            const encryptedPayload = encryptData({
                username: username.toLowerCase(),
                captcha,
                captchaId,
            });

            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/promotion/check`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Fingerprint": fingerprint,
                    },
                    body: JSON.stringify({ data: encryptedPayload }), // Gửi payload đã mã hóa
                }
            );

            const data = await response.json();
            if (data.statusCode === 200) {
                setOpenListPromotionModal(true);
                setListPromotions(data.data.promotions);
            } else if (data.statusCode === 403) {
                setShowForbiddenModal(true); // Mở modal cảnh báo
            } else {
                toast.error(data?.message || "Có lỗi xảy ra!");
            }
            fetchCaptcha();
            setLoadingApply(false);
        } catch (error) {
            toast.error("Có lỗi xảy ra, vui lòng thử lại!");
        }
    };

    const clickPromotion = (promotion) => {
        setPromotion(promotion);
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    const closeListPromotionModal = () => {
        setOpenListPromotionModal(false);
    };

    const loadMore = () => {
        setVisibleCount((prev) => prev + 99);
    };

    const handleImageLoad = (id) => {
        setLoadedImages((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <>
            {loading && <Loader />}
            {loadingApply && <LoadingApply />}

            {/* DESKTOP */}
            <div className="bg-white min-h-screen flex flex-col md:block hidden">
                {/* Header có video background, cao 770px */}
                <div className="relative w-full h-[770px] p-4 flex flex-col items-center justify-between overflow-hidden">
                    {/* Video background */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/bgVideoBanner.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    {/* Nội dung header */}
                    <div className="relative z-10 w-full flex flex-col items-center justify-between">
                        {/* <div className="relative w-full flex flex-col items-center p-0">
                            <button
                                onClick={() => {
                                    if (window.history.length > 1) {
                                        const previousUrl = document.referrer;
                                        if (previousUrl.includes("rr")) {
                                            window.history.back();
                                        } else {
                                            window.location.href = "https://www.mm88com.com";
                                        }
                                    } else {
                                        window.location.href = "https://www.mm88com.com";
                                    }
                                }}
                                className="absolute top-4 left-4 px-4 py-2 rounded-lg text-white transition-all duration-300 hover:scale-105"
                                style={{ background: "none", border: "none", padding: 0 }}
                            >
                                <img src={buttonBackHome} alt="Về trang chủ" style={{ height: 40 }} />
                                <div className="inline-flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4 shrink-0"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                    <span className="text-[16px] font-semibold">
                                        Về trang chủ
                                    </span>
                                </div>
                            </button>
                        </div> */}

                        <div className="w-16"></div>

                        {/* Hình ảnh tiêu đề */}
                        <div className="flex-grow flex flex-col items-center pt-5">
                            <div className="w-full h-auto flex justify-center">
                                <img
                                    src={title}
                                    alt="Title"
                                    className="w-auto h-auto max-w-full object-contain"
                                />
                            </div>

                            <div className="w-full h-auto flex justify-center mt-2">
                                <img
                                    src={titleDetail}
                                    alt="Title detail"
                                    className="w-auto h-auto max-w-full object-contain"
                                />
                            </div>

                            {/* 2 nút desktop */}
                            <div className="mt-4 w-full max-w-[400px] grid grid-cols-2 gap-1">
                                {/* Button 1 */}
                                <button
                                    type="button"
                                    className="flex items-center justify-center"
                                >
                                    <img
                                        src={btnIndex}
                                        alt="Button 1"
                                        className="max-w-full h-auto"
                                    />
                                </button>

                                {/* Button 2 */}
                                <button
                                    type="button"
                                    className="flex items-center justify-center"
                                >
                                    <img
                                        src={btnCSKH}
                                        alt="Button 2"
                                        className="max-w-full h-auto"
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Form username + captcha */}
                        <div className="bg-[#F5F9FF]/80 p-4 flex gap-6 max-w-5xl rounded-full mt-4">
                            <input
                                type="text"
                                placeholder="Vui lòng nhập TÊN TÀI KHOẢN"
                                className="w-72 p-4 rounded-full border border-[#B6B6B6] outline-none  font-normal placeholder:font-700"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <div className="relative w-80 flex ">
                                <input
                                    type="text"
                                    placeholder="Nhập mã CAPTCHA"
                                    className="p-4 rounded-full border border-[#B6B6B6]  outline-none w-full pr-12  font-normal placeholder:font-700"
                                    value={captcha}
                                    onChange={(e) => setCaptcha(e.target.value)}
                                />
                                {captchaSvg && (
                                    <div
                                        className="absolute right-[2px] top-[3px] cursor-pointer pl-1 rounded-full overflow-hidden bg-[#f3f3f3]"
                                        dangerouslySetInnerHTML={{ __html: captchaSvg }}
                                        onClick={fetchCaptcha}
                                    />
                                )}
                            </div>
                            <button
                                className="w-64 p-4 rounded-full flex items-center justify-center text-white font-medium bg-gradient-to-b from-[#25C4AF] via-[#25C4AF] to-[#009F8A] hover:opacity-80 transition-all"
                                onClick={checkUsername}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>

                {/* Nội dung dưới */}
                <div className="w-full flex flex-col items-center p-4 bg-gray-100">
                    <div className="p4 flex gap-4 rounded-full mt-8">
                        <button
                            className={`w-[14rem] p-1 rounded-full text-[16px] border border-[#25C4AF] flex items-center justify-center ${activeButton === "promotions"
                                ? "text-white font-medium bg-gradient-to-b from-[#25C4AF] via-[#25C4AF] to-[#009F8A]"
                                : "text-[#25C4AF] font-medium bg-white hover:opacity-80"
                                }`}
                            onClick={() => setActiveButton("promotions")}
                        >
                            Khuyến mãi hot
                        </button>
                        <button
                            className={`w-[14rem]  p-1 rounded-full text-[16px] border border-[#25C4AF] flex items-center justify-center  ${activeButton === "conditions"
                                ? "text-white font-medium bg-gradient-to-b from-[#25C4AF] via-[#25C4AF] to-[#009F8A]"
                                : "text-[#25C4AF] font-medium bg-white hover:opacity-80"
                                }`}
                            onClick={() => setActiveButton("conditions")}
                        >
                            Quy tắc và điều kiện
                        </button>
                    </div>
                    {activeButton === "promotions" ? (
                        <>
                            {/* Danh sách ảnh */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {/* HÌNH CỨNG */}
                                <div className="w-full p-2">
                                    <div className="relative w-full overflow-hidden rounded-lg">
                                        <img
                                            src={KMGG88}
                                            alt="promo-1"
                                            className="block w-full h-auto object-cover transform-gpu transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
                                        />
                                    </div>
                                </div>

                                <div className="w-full p-2">
                                    <div className="relative w-full overflow-hidden rounded-lg">
                                        <img
                                            src={KMGG882}
                                            alt="promo-2"
                                            className="block w-full h-auto object-cover transform-gpu transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-4">
                                <button
                                    onClick={loadMore}
                                    className="px-4 py-2 bg-[#25C4AF] text-white rounded-full  hover:scale-[1.02] transition"
                                >
                                    Xem thêm
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="mt-12">
                            <img
                                src={rule}
                                alt="Rule"
                                className="w-auto h-auto max-w-5xl mx-auto mb-4"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* MOBILE */}
            <div className="bg-gray-200 min-h-screen flex flex-col items-center md:hidden block">
                {/* Header với video background, chiều cao tự co theo nội dung */}
                <div className="relative w-full p-4 flex flex-col items-center justify-between overflow-hidden">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/bgVideoBanner.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    <div className="relative z-10 w-full flex flex-col items-center justify-between">
                        {/* <div className="w-full flex flex-col items-center justify-center ">
                            <button
                                onClick={() => {
                                    if (window.history.length > 1) {
                                        const previousUrl = document.referrer;
                                        if (previousUrl.includes("rr")) {
                                            window.history.back();
                                        } else {
                                            window.location.href = "https://www.mm88com.com";
                                        }
                                    } else {
                                        window.location.href = "https://www.mm88com.com";
                                    }
                                }}
                                className="text-white rounded-lg"
                            >
                                <div className="inline-flex items-center gap-2">
                                    <svg
                                        className="w-4 h-7 shrink-0"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                    <span className="text-[16px] font-semibold">
                                        Về trang chủ
                                    </span>
                                </div>
                            </button>
                            <div className="w-12"></div>
                        </div> */}

                        {/* Tiêu đề + 2 nút mobile */}
                        <div className="w-full flex flex-col items-center text-gray-700 mt-3">
                            <div className="w-full h-auto">
                                <img
                                    src={title}
                                    alt="Title"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="w-full h-auto mt-2">
                                <img
                                    src={titleDetail}
                                    alt="Title detail"
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* 2 nút mobile: luôn nằm ngang, tự co giãn theo màn hình */}
                            <div className="mt-4 w-full px-4">
                                <div className="flex w-full items-center justify-center gap-2">
                                    {/* Button 1 */}
                                    <button
                                        type="button"
                                        className="flex-1 flex items-center justify-center"
                                    >
                                        <img
                                            src={btnIndex}
                                            alt="Button 1"
                                            className="w-full h-auto"
                                        />
                                    </button>

                                    {/* Button 2 */}
                                    <button
                                        type="button"
                                        className="flex-1 flex items-center justify-center"
                                    >
                                        <img
                                            src={btnCSKH}
                                            alt="Button 2"
                                            className="w-full h-auto"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>


                        {/* Input và Button */}
                        <div className="bg-[#F5F9FF]/80 p-4 flex flex-col gap-3 w-full max-w-md rounded-lg">
                            <input
                                type="text"
                                placeholder="Nhập tài khoản"
                                className="p-3 rounded-full border border-[#B8B8B8] outline-none w-full"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <div className="relative flex ">
                                <input
                                    type="text"
                                    placeholder="Nhập mã CAPTCHA"
                                    className="p-3 rounded-full border border-[#B8B8B8] outline-none w-full pr-12"
                                    value={captcha}
                                    onChange={(e) => setCaptcha(e.target.value)}
                                />
                                {captchaSvg && (
                                    <div
                                        className="absolute right-[-5px] top-[0px] rounded-full overflow-hidden cursor-pointer scale-[0.9]"
                                        dangerouslySetInnerHTML={{ __html: captchaSvg }}
                                        onClick={fetchCaptcha}
                                    />
                                )}
                            </div>
                            <button
                                className="p-3  bg-gradient-to-b rounded-full from-[#25C4AF] via-[#25C4AF] to-[#009F8A] text-white"
                                onClick={checkUsername}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>

                {/* Nội dung dưới */}
                <div>
                    {/* Tabs */}
                    <div className="flex  items-center justify-center gap-2 w-full max-w-md mt-6 px-4 mx-auto">
                        <button
                            className={`w-[170px] max-[344px]:w-[150px] max-[344px]:text-[14px]  shrink-0 text-center p-2 text-[16px] font-semibold rounded-full border ${activeButton === "promotions"
                                ? "text-white bg-gradient-to-b from-[#25C4AF] via-[#25C4AF] to-[#009F8A] border-transparent"
                                : "text-[#25C4AF] bg-white border-[#25C4AF]"
                                }`}
                            onClick={() => setActiveButton("promotions")}
                        >
                            Khuyến mãi hot
                        </button>

                        <button
                            className={`w-[170px] max-[344px]:w-[150px] max-[344px]:text-[14px] shrink-0 text-center p-2 text-[16px] font-semibold rounded-full border ${activeButton === "conditions"
                                ? "text-white bg-gradient-to-b from-[#25C4AF] via-[#25C4AF] to-[#009F8A] border-transparent"
                                : "text-[#25C4AF] bg-white border-[#25C4AF]"
                                }`}
                            onClick={() => setActiveButton("conditions")}
                        >
                            Quy tắc và điều kiện
                        </button>
                    </div>

                    {/* Nội dung */}
                    {activeButton === "promotions" ? (
                        <>
                            {/* Danh sách ảnh */}
                            <div className="mt-4 w-full max-w-md mx-auto flex flex-col gap-2 px-3">
                                <div className="w-full">
                                    <div className="relative w-full overflow-hidden rounded-lg">
                                        <img
                                            src={KMGG88}
                                            alt="promo-1"
                                            className="block w-full h-auto object-cover transform-gpu transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div className="relative w-full overflow-hidden rounded-lg">
                                        <img
                                            src={KMGG882}
                                            alt="promo-2"
                                            className="block w-full h-auto object-cover transform-gpu transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-4">
                                <button
                                    onClick={loadMore}
                                    className="mb-4 px-4 py-2 bg-[#25C4AF] text-white rounded-full hover:scale-[1.02] transition"
                                >
                                    Xem thêm
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="mt-6 mb-4">
                            <img
                                src={ruleMobile}
                                alt="RuleMobile"
                                className="w-auto h-auto max-w-full"
                            />
                        </div>
                    )}
                </div>
            </div>

            <Footer></Footer>
            <PromotionModal1
                isOpen={openModal === true}
                onClose={closeModal}
                promotion={promotion}
            />
            <ListPromotionModal
                isOpen={openListPromotionModal === true}
                onClose={closeListPromotionModal}
                promotions={listPromotions}
                username={username}
            />
            {showForbiddenModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-96">
                        <h2 className="text-lg font-bold text-red-600 text-center">
                            TÀI KHOẢN KHÔNG ĐƯỢC THAM GIA KHUYẾN MÃI
                        </h2>
                        <p className="text-sm text-gray-700 text-center mt-2">
                            Vui lòng liên hệ CSKH 24/7 để được hỗ trợ.
                        </p>
                        <div className="mt-4 text-center">
                            <a
                                href="https://gg88-cskh.pages.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 font-semibold hover:underline"
                            >
                                https://gg88-cskh.pages.dev/
                            </a>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={() => setShowForbiddenModal(false)}
                                className="bg-gradient-to-b from-[#25C4AF] via-[#25C4AF] to-[#009F8A] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HomePage;
