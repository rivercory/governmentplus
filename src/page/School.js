import data from "../data/school.json";
import {useState} from "react";

const School = () => {
    const [filter, setFilter] = useState();
    const projects = data;

    console.log(projects);

    const filteredProjects = !filter
        ? projects
        : projects.filter(project => project[filter]);
    return (
        <div>
            <div>
                <div className="section-component">
                    <div role="tablist" className="grid gap-2 w-fit md:mt-0 mt-4 ml-4 pretendard">
                        <a role="tab" className="tab rounded-full border-2" onClick={() => setFilter()}>
                            전체
                        </a>
                        <a role="tab" className="tab rounded-full border-2" onClick={() => setFilter("ooe")}>
                            교육청
                        </a>
                        <a role="tab" className="tab rounded-full border-2" onClick={() => setFilter("school")}>
                            학교
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full p-4 pretendard">
                        {filteredProjects.map(project => {
                            return (
                                <a href={project.link} target="_blank">
                                    <div className="card bg-base-100 card-bordered border-2">
                                        <figure><img src={project.img} alt="Shoes"/></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {project.name}
                                            </h2>
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default School;