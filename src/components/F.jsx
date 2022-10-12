export default function f({ f, setF }) {
  return (
    <>
      <div className={`${f ? "block mb-5" : "hidden"}`}>
        <div className="flex items-center justify-between">
          <div className="w-5 h-5 bg-[#C9B9EB80] rounded-[4px] ml-2"></div>
          <div className="flex items-center justify-end">
            <div className="text-right">تخصصی و مهارتی</div>
            <div
              className="w-5 h-5 bg-[#C9B9EB80] rounded-full ml-2"
              onClick={() => setF(false)}
            ></div>
          </div>
        </div>
        <div className="rounded-lg border-[1px] border-[#484848] w-full mt-[9px] p-3 text-right">
          نیازمند بنا و نقاش
        </div>
      </div>
    </>
  );
}
