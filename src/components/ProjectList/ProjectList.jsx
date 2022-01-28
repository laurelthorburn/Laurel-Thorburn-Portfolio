import './projectList.css';
import Project from '../project/Project';
import {projects} from '../../data';

export const ProjectList = () => {
    return(
        <div className="projectList">

            <div className="projectListContent">
            {projects.map((project) => (
                <Project key={project.id} img={project.img} link={project.link} title={project.title}/>
            ))}
            </div>
        </div>

        );
};

export default ProjectList