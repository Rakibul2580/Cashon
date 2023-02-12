import React from "react";

const QuickTransfer = () => {
  const items = [1, 2, 3, 4];
  return (
    <div className="w-full pl-10 mb-5 border-l-2 space-y-9">
      <h1 className="text-xl font-semibold">Quick Transfer</h1>
      <div className="flex items-center justify-around">
        {items.map((item, i) => (
          <div key={i} className="w-10 h-10 rounded-full bg-slate-500"></div>
        ))}
        <div className="flex items-center justify-center w-10 h-10 pb-1 text-2xl text-blue-500 border-2 border-blue-500 border-dashed rounded-full">
          <p>+</p>
        </div>
      </div>
      <select
        label="Quick Selection"
        className="w-full !px-4 !py-3 border border-blue-500 text-blue-500 text-xl rounded-xl bg-slate-100"
      >
        <option className={`text-xl`}>title1</option>
        <option className={`text-xl`}>title2</option>
        <option className={`text-xl`}>title3</option>
        <option className={`text-xl`}>title4</option>
        <option className={`text-xl`}>title5</option>
      </select>
      <input
        type="text"
        placeholder="Transfer Amount"
        className="w-full p-4 bg-slate-100 rounded-xl"
      />
      <div className="flex justify-around w-full">
        <button className="px-6 py-4 text-white bg-blue-500 rounded-xl">
          Send Money
        </button>
        <button className="px-6 py-4 rounded-xl !text-gray-400 bg-slate-50">
          Save as Draft
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;
