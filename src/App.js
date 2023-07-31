import Form from "./components/Form";
import "./App.css";
import { useState } from "react";

function App() {
  const [isOpenToggleMneu, setIsOpenToggleMneu] = useState(false);
  const [showHideClassName, setShowHideClassName] = useState("");

  const toggleMobileMenuHandler = () => {
    setIsOpenToggleMneu(!isOpenToggleMneu);
    console.log(isOpenToggleMneu);
    isOpenToggleMneu
      ? setShowHideClassName("toggleMobileMenu")
      : setShowHideClassName("");
  };

  return (
    <div className="App ">
      <div className="bg-amber-500 container flex flex-col">
        {/**********************  navbar *********************/}
        <nav className="bg-emerald-200 w-full flex justify-between h-[60px]">
          <div className="bg-slate-500 my-auto">-LOGO-</div>
          <div className="bg-purple-500 flex align-middle">
            <ul className="hidden md:flex gap-3">
              <li>
                <a href="/" alt="link">
                  Link1
                </a>
              </li>
              <li>
                <a href="/" alt="link">
                  Link2
                </a>
              </li>
              <li>
                <a href="/" alt="link">
                  Link3
                </a>
              </li>
            </ul>
            {/* hamburger menu */}
            <div
              className=" flex flex-col  gap-1 py-2 my-auto md:hidden"
              onClick={toggleMobileMenuHandler}
            >
              <div className="bg-slate-800 h-[2px] w-[40px]"></div>
              <div className="bg-slate-800 h-[2px] w-[35px] mx-auto"></div>
              <div className="bg-slate-800 h-[2px] w-[30px] mx-auto"></div>
            </div>
          </div>
        </nav>

        {/********************* mobile menu *********************/}
        <div id="mobileMenu" className={showHideClassName}>
          <ul className=" bg-indigo-400 px-2 py-5 flex flex-col gap-3 ">
            <li>
              <a href="/" alt="link">
                Link1
              </a>
            </li>
            <li>
              <a href="/" alt="link">
                Link2
              </a>
            </li>
            <li>
              <a href="/" alt="link">
                Link3
              </a>
            </li>
          </ul>
        </div>

        {/*{/********************* form container **********************/}
        <div className=" bg-[#f6f6f6] md:px-60 py-20 ">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
