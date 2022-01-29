import './projectList.css';
import Project from '../project/Project';
import {projects} from '../../data';

export const ProjectList = () => {
    return(
        <div className="projectList">

            <div className="projectListContent">
            {projects.map((project) => (
                <Project key={project.id} img={project.img} ghLink={project.ghLink} siteLink={project.siteLink} title={project.title}/>
            ))}
            </div>
        </div>

        );
};

export default ProjectList