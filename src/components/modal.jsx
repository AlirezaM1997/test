import { useEffect, useState } from "react";
import A from "./A";
import F from "./F";
export default function Modal({ modalMode, setModalmode }) {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  const [e, setE] = useState(false);
  const [f, setF] = useState(false);
  const [arr, setArr] = useState();
  const close = () => {
    setModalmode(false);
    setA(false);
    setF(false);
    console.log("jj");
  };
  return (
    <>
      <div
        className={`${
          modalMode ? "block" : "hidden"
        } fixed w-full h-full bottom-0 z-[1001] bg-[#29292938] backdrop-blur-[2px]`}
      >
        <section className="absolute min-h-[434px] p-4 pb-[50px] bg-white w-full bottom-0 flex flex-col justify-start rounded-t-[24px]">
          <button onClick={() => close()}>close</button>
          <h1 className="text-center text-base font-bold mt-[18px]">
            لیست نیازمندیها
          </h1>
          <h3 className="text-center text-xs font-normal mt-[5px]">
            موارد مورد نظر خود را انتخاب کنید
          </h3>
          <div className="grid grid-cols-3 gap-2 mt-[45px]" dir="rtl">
            <button
              className={`${
                a ? "bg-[#A274B2] text-white" : "text-[#A274B2]"
              } border-[1px] border-[#A274B2] rounded-[8px] py-[11px]`}
              onClick={() => {
                setA(!a);
                setArr([...arr, <A a={a} setA={setA} />]);
              }}
            >
              مالی
            </button>
            <button
              className={`${
                b ? "bg-[#A274B2] text-white" : "text-[#A274B2]"
              } border-[1px] border-[#A274B2] rounded-[8px] py-[11px]`}
              onClick={() => setB(!b)}
            >
              معنوی
            </button>
            <button
              className={`${
                c ? "bg-[#A274B2] text-white" : "text-[#A274B2]"
              } border-[1px] border-[#A274B2] rounded-[8px] py-[11px]`}
              onClick={() => setC(!c)}
            >
              ایده
            </button>
            <button
              className={`${
                d ? "bg-[#A274B2] text-white" : "text-[#A274B2]"
              } border-[1px] border-[#A274B2] rounded-[8px] py-[11px]`}
              onClick={() => setD(!d)}
            >
              حضور در رویداد
            </button>
            <button
              className={`${
                e ? "bg-[#A274B2] text-white" : "text-[#A274B2]"
              } border-[1px] border-[#A274B2] rounded-[8px] py-[11px]`}
              onClick={() => setE(!e)}
            >
              ظرفیت
            </button>
            <button
              className={`${
                f ? "bg-[#A274B2] text-white" : "text-[#A274B2]"
              } border-[1px] border-[#A274B2] rounded-[8px] py-[11px]`}
              onClick={() => {
                setF(!f);
                setArr([...arr, <F f={f} setF={setF} />]);
              }}
            >
              تخصصی مهارتی
            </button>
          </div>
          <p className="mt-[34px] mb-[18px] text-right text-sm font-normal">
            لورم ایپسوم متنی است که برای تهیه لورم ایپسوم متنی است که برای تهیه
            لورم ایپسوم متنی است که برای تهیه
          </p>
          {arr}
        </section>
      </div>
    </>
  );
}
