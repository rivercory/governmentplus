import React, {useState} from "react";
import data from "./data/government.json";
import "./App.css";

const App = () => {
    const [filter, setFilter] = useState();
    const projects = data;

    console.log(projects);

    const filteredProjects = !filter
        ? projects
        : projects.filter(project => project[filter]);

    return (
        <div>
            <div className="m-4 pretendard">
                <a>
                    이 웹사이트는 대한민국 정부 공식 웹사이트가 아닙니다.
                </a>
            </div>
            <div className="navbar mb-2 bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl"><img src="./icons/govenmentplus_transparent.svg" width="32"
                                                              height="32"/></a>
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
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
                <div className="section-component">
                    <div role="tablist" className="w-fit tabs tabs-boxed tabs-lg ml-4 pretendard">
                        <a role="tab" className="tab" onClick={() => setFilter()}>
                            전체
                        </a>
                        <a role="tab" className="tab" onClick={() => setFilter("nao")}>
                            국가행정조직
                        </a>
                        <a role="tab" className="tab" onClick={() => setFilter("lg")}>
                            지자체
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full p-4">
                        {filteredProjects.map(project => {
                            return (
                                <a href={project.link} target="_blank">
                                    <div className="card bg-base-100 shadow-xl">
                                        <figure><img src={project.img} alt="Shoes"/></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {project.kor}
                                            </h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
    );
};

export default App;
