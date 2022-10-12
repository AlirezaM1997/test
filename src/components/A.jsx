export default function A({ a, setA }) {
  return (
    <>
      <div className={`${a ? "block mb-5" : "hidden"}`}>
        <div className="flex items-center justify-end">
          <div className="text-right">مالی</div>
          <div
            className="w-5 h-5 bg-[#C9B9EB80] rounded-full ml-2"
            onClick={() => setA(false)}
          ></div>
        </div>
        <input
          className="rounded-lg border-[1px] border-[#484848] w-full mt-[9px] p-3 text-center placeholder:text-left"
          placeholder="ریال"
        />
      </div>
    </>
  );
}
