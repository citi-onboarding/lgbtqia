import apiAxios from '../../services/api-axios';
import React, {useEffect, useState} from "react";
import { PeopleImage } from '../../assets';
import { ProjectsContainer, ProjectsLine, ProjectsSpace, ProjectsPresentation, ProjectsInstitution, ProjectsButton, ProjectsInstitutionBottom } from './style';

type ProjectsProps ={
    name: string,
    description: string,
    image: string,
    alt: string,
    link: string
}

export const Projects: React.ElementType = ({name, description, image, alt, link}:ProjectsProps) => {
    const [projects, setProjects] = useState<ProjectsProps[]>();

    function getInfos() {
        apiAxios.get(`projects`)
        .then(response => {setProjects(response.data);
        }).catch(error => console.log(error));
    };

    useEffect(() => {
        getInfos();
        console.log(projects);
    });

    return(
        <>
        <ProjectsContainer>
            <ProjectsLine/>
            <ProjectsSpace>
                <ProjectsPresentation>
                        <h3>Conheça <b>projetos aliados</b></h3>
                        <p>Todo mês, damos visibilidade para algum projeto que tenha como objetivo dar suporte à causa LGBTQIA+ de alguma maneira. O objetivo de dar visibilidade aos projetos da comunidade é que os mesmos são impulsionados para mais ambientes, garantindo a maior captação de recursos, consequentemente.</p>
                </ProjectsPresentation>
                {projects?.map((projectsInfo) => (
                <ProjectsInstitution>
                    <ProjectsInstitutionBottom>
                        <img src={projectsInfo?.image} alt={projectsInfo?.alt}/>
                        <ProjectsButton href={projectsInfo?.link}>Conheça a <b>{projectsInfo?.name}</b></ProjectsButton>
                    </ProjectsInstitutionBottom>
                    <p>{projectsInfo?.description}</p>
                </ProjectsInstitution>
                ))}
            </ProjectsSpace>
            <img src={PeopleImage} alt={"People with pride flags"}/>
        </ProjectsContainer>
        </>
    );
}