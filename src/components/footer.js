import React from 'react';
import { useState } from "react";
import fb from '../assets/footer/fb.png';
import giayphep1 from '../assets/footer/giayphep1.png';
import giayphep2 from '../assets/footer/giayphep2.png';
import juventus from '../assets/footer/juventus.png';
import kjc from '../assets/footer/kjc.png';
import kjc2 from '../assets/footer/kjc2.png';
import mm88 from '../assets/footer/mm88.png';
import tele from '../assets/footer/tele.png';
import trachnhiem1 from '../assets/footer/trachnhiem1.png';
import trachnhiem2 from '../assets/footer/trachnhiem2.png';
import trachnhiem3 from '../assets/footer/trachnhiem3.png';
import vn from '../assets/footer/vn.png';
import youtube from '../assets/footer/youtube.png';
import bank from '../assets/footer/thanhtoan/bank.png';
import momo from '../assets/footer/thanhtoan/momo.png';
import qr from '../assets/footer/thanhtoan/qr.png';
import thecao from '../assets/footer/thanhtoan/thecao.png';
import usdt from '../assets/footer/thanhtoan/usdt.png';
import viettelpay from '../assets/footer/thanhtoan/viettelpay.png';
import zalopay from '../assets/footer/thanhtoan/zalopay.png';
import ace from '../assets/footer/nhacungcap/ace.png';
import add from '../assets/footer/nhacungcap/add.png';
import cmd from '../assets/footer/nhacungcap/cmd.png';
import dg from '../assets/footer/nhacungcap/dg.png';
import fbNcc from '../assets/footer/nhacungcap/fb.png';
import fc from '../assets/footer/nhacungcap/fc.png';
import jdb from '../assets/footer/nhacungcap/jdb.png';
import mt from '../assets/footer/nhacungcap/mt.png';
import pc from '../assets/footer/nhacungcap/pc.png';
import pr from '../assets/footer/nhacungcap/pr.png';
import saba from '../assets/footer/nhacungcap/saba.png';
import sexy from '../assets/footer/nhacungcap/sexy.png';
import sports from '../assets/footer/nhacungcap/sports.png';
import sv368 from '../assets/footer/nhacungcap/sv368.png';
import v8 from '../assets/footer/nhacungcap/v8.png';
import ws from '../assets/footer/nhacungcap/ws.png';
import sv388 from '../assets/footer/nhacungcap/388.png';
import footerMobile1 from '../assets/footer/footerMobile1.png';
import footerMobile2 from '../assets/footer/footerMobile2.png';
import logoFooter from '../assets/footer/logoFooter.png';
import jvtkjc from '../assets/footer/jvtkjc.png';
import players from "../assets/footer/doitactapdoan.png";
import bannerVuonTam from "../assets/footer/vuontamdangcap.png";
import logoDoiTac from "../assets/footer/logodoitac.png";
import eventImg from "../assets/footer/imgbaivietfooter.png";
import youtubeNew from "../assets/footer/youtube.png";
import telegramNew from "../assets/footer/telegg88.png";
import facebookIcon from "../assets/footer/face.png";
import titleNews from "../assets/footer/titleSukienGG88.png";
import logoDoiTacMB from "../assets/footer/logodoitacMB.png";
import playersMB from "../assets/footer/doitactapdoanMB.png";

import badge18 from "../assets/footer/icon18+.png";
import brand1 from "../assets/footer/brand1.png";
import brand2 from "../assets/footer/brand2.png";
import brand3 from "../assets/footer/brand3.png";
import brand4 from "../assets/footer/brand4.png";
import brand5 from "../assets/footer/brand5.png";
import brand6 from "../assets/footer/brand6.png";
import brand7 from "../assets/footer/brand7.png";
import secureIcon from "../assets/footer/Group.png";
const Footer = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      {/* Desktop Footer */}

      {/* Desktop Footer (match mockup mới) */}
      <footer className="hidden md:block bg-white text-[#0A0A0A]">
        <div className="container mx-auto px-8 lg:px-16 xl:px-24 py-8">

          {/* HÀNG TRÊN: TRÁI / GIỮA / PHẢI */}
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* TRÁI (6) */}
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-[auto,1fr] items-center gap-6">
                {/* Ảnh cầu thủ + banner */}
                <div className="relative w-fit translate-x-[113px]">
                  <img
                    src={players}
                    alt="Đối tác tập đoàn KJC 2025-2026"
                    className="h-[170px] xl:h-[186px] w-auto object-contain select-none"
                    loading="lazy"
                  />

                </div>

                {/* Text + logo JJ | KJC */}
                <div className="flex flex-col items-center justify-center text-center w-fit mx-auto translate-x-[45px] translate-y-[-20px]">
                  <img
                    src={bannerVuonTam}
                    alt="GG88 - Vươn tầm đẳng cấp -"
                    className="w-[320px] object-contain select-none pointer-events-none mb-2"
                    loading="lazy"
                  />
                  <img
                    src={logoDoiTac}
                    alt="Juventus FC & KJC - Đối Tác Chính Thức Năm 2025-2026"
                    className="h-10 xl:h-12 w-auto object-contain select-none w-[320px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>


            <div className="col-span-12 lg:col-span-3 mr-5">
              <h3
                className="text-[20px] font-extrabold uppercase leading-tight tracking-tighter line-clamp-2"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,           // clamp tiêu đề 2 dòng
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                KJC | Juventus – Đối tác độc quyền khu vực Châu Á
              </h3>

              <p
                className="mt-1 text-[#4B5563] text-[14px] leading-6 tracking-tight"
                style={
                  isCollapsed
                    ? {
                      display: "-webkit-box",
                      WebkitLineClamp: 2,      // khi Ẩn bớt: chỉ còn 2 dòng
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }
                    : undefined                   // khi Xem thêm: hiện đầy đủ
                }
              >
                KJC hợp tác độc quyền với CLB Juventus tại châu Á, đưa thương hiệu vươn tầm quốc tế.
                Juventus – biểu tượng bóng đá thế giới với nhiều danh hiệu lẫy lừng – trở thành đại sứ độc quyền,
                nâng uy tín và tầm ảnh hưởng...
              </p>

              <button
                className="mt-1 text-[#25C4AF] text-sm hover:underline"
                onClick={() => setIsCollapsed((v) => !v)}
              >
                {isCollapsed ? "Xem thêm" : "Ẩn bớt"}
              </button>
            </div>

            {/* PHẢI (3) — giữ nguyên sát lề như bạn đang để */}
            <div className="col-span-12 lg:col-span-3 lg:-ml-6 xl:-ml-8 2xl:-ml-10 w-[226px] h-[150px]">
              <div className="rounded-xl overflow-hidden ring-1 ring-black/10 w-full h-full mx-auto lg:mx-0">
                <img
                  src={eventImg}
                  alt="Sự kiện ký kết"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* LINK ĐIỀU HƯỚNG */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 text-sm text-[#6B7280]">
            {[
              'Giới thiệu về MM88', 'Điều khoản & điều kiện', 'Chơi có trách nhiệm',
              'Miễn trách nhiệm', 'Quyền riêng tư', 'Hướng dẫn nạp rút',
              'Câu hỏi thường gặp', 'Liên hệ'
            ].map((t, i, arr) => (
              <React.Fragment key={t}>
                <a href="#" className="hover:underline whitespace-nowrap">{t}</a>
                {i < arr.length - 1 && <span className="mx-3 text-gray-300">|</span>}
              </React.Fragment>
            ))}
          </div>

          {/* ICON CHỨNG NHẬN */}
          <div className="mt-6 flex items-center justify-center gap-[62px] flex-nowrap overflow-x-auto">
            {/* badges */}
            {[secureIcon, brand2, brand3, brand6, brand5, brand4, brand7, brand1, badge18].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`badge-${i + 1}`}
                className="h-7 w-auto object-contain shrink-0"
                loading="lazy"
              />
            ))}



            {/* social */}
            <img src={facebookIcon} alt="Facebook" className="h-7 w-auto cursor-pointer hover:opacity-80 transition-opacity shrink-0" />
            <img src={youtubeNew} alt="YouTube" className="h-7 w-auto cursor-pointer hover:opacity-80 transition-opacity shrink-0" />
            <img src={telegramNew} alt="Telegram" className="h-7 w-auto cursor-pointer hover:opacity-80 transition-opacity shrink-0" />
          </div>

        </div>
      </footer>


      {/* Mobile */}
      <footer className="md:hidden block bg-white">
        <div className="container mx-auto flex flex-col items-center px-4 py-4">
          <div className="w-full relative rounded-[10px] border border-white/60 bg-white/20 mb-6" style={{
            borderColor: "#BFEAE4",
            boxShadow: "0px 2px 5.1px 0 rgba(88, 195, 181, 0.18)",
          }}>
            <div className="grid grid-cols-2 items-center ">
              {/* Cột trái: logo đối tác */}
              <div className="flex justify-start  translate-x-[35px]  max-[360px]:translate-x-[10px] max-[360px]:translate-y-[10px] max-[344px]:translate-x-[10px] max-[344px]:translate-y-[10px] translate-y-[20px]">
                <img
                  src={logoDoiTacMB}
                  alt="Juventus FC & KJC"
                  className=" w-auto object-contain"
                />
              </div>

              {/* Cột phải: ảnh cầu thủ */}
              <div className="flex justify-end translate-y-[13px]">
                <img
                  src={playersMB}
                  alt="Players"
                  className=" w-auto object-contain"
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <img
                src={titleNews}
                alt="Tin tức - Sự kiện nổi bật GG88"
                className="w-full h-full max-w-full object-contain"

                loading="lazy"
              />
            </div>

            {/* Danh sách tin (theo mockup) */}
            <div className=" w-full space-y-1">
              {/* Tin 1 */}
              <div
                className="flex items-start gap-3  p-3"

              >
                <div className="flex-1">
                  <h4
                    className="text-[15px] font-extrabold uppercase text-[#25C4AF] leading-[18px]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    KJC | Juventus – Đối tác độc quyền khu vực Châu Á
                  </h4>
                  <p className="mt-1 text-[12px] leading-4 text-[#4B5563]">
                    <span className="font-bold">KJC</span> hợp tác độc quyền với CLB Juventus tại châu Á, đưa thương hiệu vươn tầm
                    quốc tế. Juventus – biểu tượng bóng đá thế giới…
                  </p>
                  <button className="mt-1 text-[#25C4AF] text-xs hover:underline">Xem thêm</button>
                </div>

                <div className="w-[150px] h-[120px] rounded-[12px] overflow-hidden ring-1 ring-black/10 shrink-0">
                  <img src={eventImg} alt="Sự kiện" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>

              {/* Tin 2 */}
              <div
                className="flex items-start gap-3  p-3"

              >
                <div className="flex-1">
                  <h4
                    className="text-[15px] font-extrabold uppercase text-[#25C4AF] leading-[18px]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    Ra mắt ứng dụng KJC nhận KM
                  </h4>
                  <p className="mt-1 text-[12px] leading-5 text-[#4B5563]">
                    <span className="font-bold">KJC</span> ra mắt ứng dụng Liên Minh Quốc Tế – trải nghiệm tiện lợi, nhiều ưu đãi…
                  </p>
                  <button className="mt-1 text-[#25C4AF] text-xs hover:underline">Xem thêm</button>
                </div>

                <div className="w-[150px] h-[120px] rounded-[12px] overflow-hidden ring-1 ring-black/10 shrink-0">
                  <img src={eventImg} alt="Ứng dụng KJC" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>



          {/* Hàng trên: MXH + banner (GIỮ NGUYÊN) */}
          <div className="w-full">
            <div
              className="flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-[#F5F7F9] px-3 py-2"
              style={{ boxShadow: "0px 2px 5.1px 0 rgba(88, 195, 181, 0.36)" }}
            >
              <div className="flex items-center gap-3">
                <img src={telegramNew} alt="Telegram" className="h-8 w-8 max-[344px]:w-[20px] max-[344px]:h-[20px]  max-[344px]:h-[20px] max-[360px]:w-[20px]  max-[360px]:h-[20px]" />
                <img src={facebookIcon} alt="Facebook" className="h-8 w-8 max-[344px]:w-[20px] max-[344px]:h-[20px] max-[360px]:h-[20px]  max-[360px]:w-[20px]" />
                <img src={youtubeNew} alt="YouTube" className="h-8 w-8 max-[344px]:w-[20px] max-[344px]:h-[20px] max-[360px]:h-[20px]  max-[360px]:w-[20px]" />
                {/* <img src={tiktokIcon} alt="TikTok" className="h-8 w-8" /> */}
              </div>

              <img
                src={bannerVuonTam}
                alt="GG88 - Vươn tầm đẳng cấp -"
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>

          {/* Link điều hướng (GIỮ NGUYÊN) */}
          <div className="mt-4 text-center text-[#868DA5] text-[12px] leading-6 space-y-1">
            <div className="flex items-center justify-center flex-wrap gap-x-2">
              <a href="#" className="hover:underline whitespace-nowrap">Giới thiệu về GG88</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:underline whitespace-nowrap">Điều khoản & điều kiện</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:underline whitespace-nowrap">Chơi có trách nhiệm</a>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-x-2">
              <a href="#" className="hover:underline whitespace-nowrap">Miễn trách nhiệm</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:underline whitespace-nowrap">Quyền riêng tư</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:underline whitespace-nowrap">Hướng dẫn nạp rút</a>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-x-2">
              <a href="#" className="hover:underline whitespace-nowrap">Câu hỏi thường gặp</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:underline whitespace-nowrap">Liên hệ</a>
            </div>
          </div>

          {/* Icon chứng nhận (GIỮ NGUYÊN) */}
          <div className="mt-4 flex items-center justify-center gap-3 opacity-90 max-[344px]:w-[20px] max-[360px]:w-[20px]">
            {[secureIcon, brand2, brand3, brand6, brand5, brand4, brand7, brand1, badge18].map((src, i) => (
              <img key={i} src={src} alt={`badge-${i + 1}`} className="h-7 w-auto object-contain " />
            ))}
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;