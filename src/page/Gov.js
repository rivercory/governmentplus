import data from "../components/data/government.json";
import {useState} from "react";

const Gov = () => {
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
                        <a role="tab" className="tab rounded-full border-2" onClick={() => setFilter("nao")}>
                            국가행정조직
                        </a>
                        <a role="tab" className="tab rounded-full border-2" onClick={() => setFilter("lg")}>
                            지자체
                        </a>
                    </div>

                    <div className="md:block hidden suit">
                        {filteredProjects.map(project => {
                            return (
                                <a href={project.link} target="_blank">
                                    <div className="flex flex-row card m-4 p-2 bg-base-100 card-bordered border-2">
                                        <figure><img className="flex-none w-60 p-6" src={project.img} alt="Shoes"/></figure>
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

                    <div className="md:hidden block suit grid grid-cols-1 auto-cols-max md:grid-cols-4 gap-2 w-full p-4 pretendard">
                        {filteredProjects.map(project => {
                            return (
                                <a href={project.link} target="_blank">
                                    <div className="card p-2 bg-base-100 card-bordered border-2">
                                        <figure><img className="p-2" src={project.img} alt="Shoes"/></figure>
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

export default Gov;