import React, {useState} from "react";
import data from './data/government.json';

const App = () => {
    const [filter, setFilter] = useState();
    const projects = data;

    console.log(projects);

    const filteredProjects = !filter
        ? projects
        : projects.filter(project => project[filter]);

    return (
        <div className="m-4">
            <div className="section-component">
                <div role="tablist" className="tabs tabs-boxed">
                    <a role="tab" className="tab" onClick={() => setFilter()}>
                        All
                    </a>
                    <a role="tab" className="tab" onClick={() => setFilter("nao")}>
                        국가행정조직
                    </a>
                    <a role="tab" className="tab" onClick={() => setFilter("lg")}>
                        지자체
                    </a>
                </div>

                <div className="container">
                    {filteredProjects.map(project => {
                        return (
                            <div className="row">
                                <div className="w-100">
                                    <div className="d-flex border mt-1 mb-1 p-3">
                                        <div className="col-11">
                                            <div className="font-weight-normal"> {project.kor}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
