import "./App.css";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Gov from "./page/Gov";
import School from "./page/School";

const App = () => {
    return (
        <div>
            <div className="m-4 pretendard md:block hidden">
                <a>
                    이 웹사이트는 대한민국 정부 공식 웹사이트가 아닙니다.
                </a>
            </div>
            <div className="navbar mb-2 bg-base-100 md:flex hidden">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-2xl pretendard">
                        <img src="./icons/govenmentplus_full.svg"
                             width="28"
                             height="28"/>
                        정부플러스
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component"
                                     src="/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                            </div>
                        </label>
                        <ul tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 pretendard">
                            <li><Link to="/">홈</Link></li>
                            <li><Link to="/gov">정부 웹사이트</Link></li>
                            <li><Link to="/school">학교, 교육청 웹사이트</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gov" element={<Gov/>}/>
                <Route path="/school" element={<School/>}/>
            </Routes>
        </div>
    );
};

export default App;
