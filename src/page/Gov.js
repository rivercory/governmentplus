import data from "../components/data/government.json";
import { useEffect, useState } from "react";

const Gov = () => {
    const [filter, setFilter] = useState();
    const projects = data;

    console.log(projects);

    useEffect(() => {
        setFilter()
    }, []);

    const filteredProjects = !filter
        ? projects
        : projects.filter(project => project[filter]);
    return (
        <div>
            <div>
                <div className="section-component">
                    <div className="md:block hidden">
                        {filteredProjects.map(project => {
                            return (
                                <a href={project.link} target="_blank">
                                    <div className="flex flex-row card m-4 p-2 bg-base-100 card-bordered border-2">
                                        <figure><img className="flex-none w-48 p-2" src={project.img} alt="Image" /></figure>
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

                    <div className="md:hidden block grid grid-cols-1 auto-cols-max md:grid-cols-4 gap-2 w-full p-4">
                        {filteredProjects.map(project => {
                            return (
                                <a href={project.link} target="_blank">
                                    <div className="card p-2 bg-base-100 card-bordered border-2">
                                        <figure><img className="p-2" src={project.img} alt="Image" /></figure>
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
