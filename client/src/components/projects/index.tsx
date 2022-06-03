import { ProjectsContainer, ProjectsLine, ProjectsSpace, ProjectsPresentation, ProjectsInstitution, ProjectsButton, ProjectsInstitutionBottom } from './style';
import { LogoNatrape, PeopleImage } from '../../assets'

export const Projects = () => {
    return(
        <>
        <ProjectsContainer>
            <ProjectsLine/>
            <ProjectsSpace>
                <ProjectsPresentation>
                        <h3>Conheça <b>projetos aliados</b></h3>
                        <p>Todo mês, damos visibilidade para algum projeto que tenha como objetivo dar suporte à causa LGBTQIA+ de alguma maneira. O objetivo de dar visibilidade aos projetos da comunidade é que os mesmos são impulsionados para mais ambientes, garantindo a maior captação de recursos, consequentemente.</p>
                </ProjectsPresentation>
                <ProjectsInstitution>
                    <ProjectsInstitutionBottom>
                        <img src={LogoNatrape} alt={"Logo Natrape"}/>
                        <ProjectsButton href={'https://www.instagram.com/natra_pe/'}>Conheça a <b>NATRAPE</b></ProjectsButton>
                    </ProjectsInstitutionBottom>
                    <p>A NATRAPE, Nova Associação de Travestis e Transgêneros de Pernambuco, é uma entidade da sociedade civil organizada que atua na promoção de Direitos Humanos.</p>
                </ProjectsInstitution>
            </ProjectsSpace>
            <img src={PeopleImage} alt={"People with pride flags"}/>
        </ProjectsContainer>
        </>
    )
}