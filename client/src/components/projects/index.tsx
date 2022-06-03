import { ProjectsContainer, ProjectsLine, ProjectsSpace, ProjectsPresentation, ProjectsInstitution, ProjectsTitle, ProjectsDescription, ProjectsLogo, ProjectsButton, ProjectsButtonText, ProjectsPeopleImage} from './style';
import { LogoNatrape, PeopleImage } from '../../assets'

export const Projects = () => {
    return(
        <>
          <ProjectsContainer>
              <ProjectsLine/>
              <ProjectsSpace>
                  <ProjectsPresentation>
                      <ProjectsTitle>Conheça projetos aliados</ProjectsTitle>
                      <ProjectsDescription>Todo mês, damos visibilidade para algum projeto que tenha como objetivo dar suporte à causa LGBTQIA+ de alguma maneira. O objetivo de dar visibilidade aos projetos da comunidade é que os mesmos são impulsionados para mais ambientes, garantindo a maior captação de recursos, consequentemente.</ProjectsDescription>
                  </ProjectsPresentation>

                  <ProjectsInstitution>
                      <ProjectsLogo>
                        <img src={LogoNatrape} alt="Logo Natrape"/>  
                      </ProjectsLogo>
                      <ProjectsButton>
                          <ProjectsButtonText>Conheça a NATRAPE</ProjectsButtonText>
                      </ProjectsButton>
                      <ProjectsDescription>A NATRAPE, Nova Associação de Travestis e Transgêneros de Pernambuco, é uma entidade da sociedade civil organizada que atua na promoção de Direitos Humanos.</ProjectsDescription>
                  </ProjectsInstitution>
              </ProjectsSpace>
              <ProjectsPeopleImage>
                <img src={PeopleImage} alt="People with pride flags"/>
              </ProjectsPeopleImage>
          </ProjectsContainer>
        </>
    )
}