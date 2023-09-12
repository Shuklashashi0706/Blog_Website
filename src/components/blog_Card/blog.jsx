import React from "react";
import { useState } from "react";
import Comment from "./commentbox"
const blog = (props) => {
  const [count, setCount] = useState(0);
  const [pop, setPop] = useState(true);
  const [string, setString] = useState("");
  const [array, setArray] = useState([]);
  const [show, setShow] = useState(false);
  // to handle show more
  function handleShow() {
    setShow(!show);
    setPop(true); // Turn off comments when Show More is clicked
  }
  function handleInput(event) {
    setString(event.target.value);
  }
  function handleClick() {
    const newArray = [...array, string];
    setArray(newArray);
    setString("");
    setCount(count + 1);
    setPop(!pop);
  }
  // to handle popping of comments
  function handlePop() {
    setPop(!pop);
    setShow(false); // Turn off Show More when Comments are clicked
  }
  function clearComment(){
    setArray([]);
  }
  return (
    <>
      <div className=" m-3 ">
        <div
          className={
            pop
              ? show
                ? " z-0 bg-[#6B8BB3] text-white shadow-xl md:h-[500px] md:ml-[100px]  mb-[25px]"
                : "z-0 bg-[#6B8BB3] text-white shadow-xl h-[415px] md:h-[410px] md:ml-[100px]  mb-[25px]"
              : "z-0 bg-[#6B8BB3] text-white shadow-xl  md:h-[570px] md:ml-[100px]  mb-[25px]"
          }
        >
          <div className=" relative h-[300px] w-full ">
            <img
              className="absolute inset-0 w-full h-full object-cover   "
              src={props.img}
              alt="img"
            />
          </div>
          <div className="p-2 ">
            <h2 className="font-bold text-2xl ">{props.title}</h2>
            <p className=" font-semibold">{props.desc}</p>
            <p className={show ? "" : "hidden"}>{props.para}</p>
          </div>
          <div className="flex justify-between mx-[18px]">
            <div className="">
              <button
                className="border border-white w-[110%] font-light h-[35px] "
                type="button"
                onClick={handleShow}
              >
                Show More <span className=" font-bold ">>></span>
              </button>
            </div>
            <div className="">
              <button className="ml-1 " type="button" onClick={handlePop}>
                Comments
                <span className="bg-black py-[1.5px] px-[4px]">{count}</span>
              </button>
            </div>
          </div>
          <div className={pop ? "hidden" : ""}>
            <div className="h-[150px] flex flex-col justify-between bg-white m-1 ">
              <div className="">
                {/* comments */}
                <Comment comments={array}/>
                {/* {array.length > 0
                  ? array.map((message) => (
                      <p className="text-xl text-black font-mono border border-black bg-[#c6dbf4] ">
                        {message}
                      </p>
                    ))
                  : ""} */}
              </div>
              <div className="flex h-[30px]">
                <input
                  className=" text-black border border-black w-[90%] "
                  type="text"
                  value={string}
                  onChange={handleInput}
                />
                <button
                  className="text-white ml-[2px] bg-[#6B8BB3] px-1  text-center"
                  onClick={handleClick}
                >
                  Comment
                </button>
                <button onClick={clearComment} className="text-black">Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;
