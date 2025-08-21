import { useState } from "react";
function SearchBar (props){

    return (
        <div className="mb-6">
        <p className="text-slate-700">ค้นหาที่เที่ยว</p>
        <input
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          value={props.text}
          onChange={(e)=>props.onTextChange(e.target.value)}
          className="w-full max-w-full mx-auto block border-b border-slate-500 
          outline-none text-center py-2 text-slate-700 placeholder-slate-500"
        />
        </div>
    );
}

export default SearchBar;

