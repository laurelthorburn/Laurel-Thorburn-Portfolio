import './projectList.css';
import Project from '../project/Project'

export const ProjectList = () => {
    return(
        <div className="projectList">
            <div className="projectListTexts">
                <h1 className="projectListTitle">
                    Watch Me Work, Watch Me NayNay
                </h1>
                <p className="projectListDesc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolores harum magnam ea, provident commodi eveniet voluptates libero excepturi exercitationem odit aliquam officia blanditiis, illo hic. Officia repellat culpa quasi error nulla dolor, delectus dolorum reiciendis iure laborum vero dignissimos tenetur iusto veniam, sit doloribus nisi cumque quaerat esse ea.
                </p>
            </div>
            <div className="projectListContent">
            < Project />
            < Project />
            < Project />
            < Project />
            </div>
        </div>

        );
};

export default ProjectList