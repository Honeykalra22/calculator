import React, { useState } from "react";

const Wrapper = () => {
    const [result, setResult] = useState("");

    const click = (e) => {
        setResult(result.concat(e.target.value));
    }

    const clear = () => {
        setResult("")
    }
    const calculate = () => {
        setResult(eval(result));
    }

    return (
        <div className="  flex flex-col justify-center items-center h-screen">
            <div className="w-1/4 bg-sky-950 px-5 py-16 ">
                <div>
                    {/* screen */}
                    <input className=" w-full mb-10 py-2 rounded-lg text-end px-2 bg-sky-900" type="text" placeholder="0" readOnly value={result} />
                </div>
                <div className="grid grid-cols-4 gap-3">
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="1" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="2" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="3" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="+" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="4" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="5" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="6" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="-" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="7" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="8" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="9" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="*" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="0" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={clear} value="Clear" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={calculate} value="=" />
                    <input type="button" className=" items-center text-center  hover:bg-gray-700 cursor-pointer bg-gray-600 px-4 text-lg py-2 text-white rounded-lg" onClick={click} value="/" />
                </div>
            </div>
        </div>
    )
}
export default Wrapper