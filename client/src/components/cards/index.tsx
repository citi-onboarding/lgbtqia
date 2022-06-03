import {CardContainer, Description, Info, MoreInfo, TermFlag, TermFlag2} from "./styles"
import Letter from "../../assets/Q.svg"
import Flag from "../../assets/flag.png"
import L from "../../assets/L.svg"
import G from "../../assets/G.svg"
import B from "../../assets/B.svg"
import T from "../../assets/T.svg"
import Q from "../../assets/Q.svg"
import Flag1 from "../../assets/flag1.png"
import Flag2 from "../../assets/flag2.png"
import Flag3 from "../../assets/flag3.png"
import Flag4 from "../../assets/flag4.png"
import Flag5 from "../../assets/flag5.png"
import Arrow from "../../assets/arrow.svg"

type CardProps = {
    letter: any;
    term: string;
    flag: any;
    description: string;
    trans: boolean;
}

export const lesbian: CardProps = {
    letter: L,
    term: "Lésbica",
    flag: Flag1,
    description: "É uma orientação sexual e diz respeito a mulheres (cisgênero ou transgênero) que"+
    " se sentem atraídas afetiva e sexualmente por outras mulheres (também cis ou trans).",
    trans: false,
}
export const gay: CardProps = {
    letter: G,
    term: "Gay",
    flag: Flag2,
    description: "É uma orientação sexual e se refere a homens (cisgênero ou transgênero) que"+
    " se sentem atraídos por outros homens (também cis ou trans).",
    trans: false,
}
export const bi: CardProps = {
    letter: B,
    term: "Bissexual",
    flag: Flag3,
    description: "Bissexualidade também é uma orientação sexual. Bissexuais são pessoas que"+
    " se relacionam afetiva e sexualmente tanto com pessoas do mesmo gênero. quanto do gênero oposto"+
    " (sejam essas pessoas cis ou trans).",
    trans: false,
}
export const trans: CardProps = {
    letter: T,
    term: "Transexuais, transgêneros, travestis",
    flag: Flag4,
    description: "Este é um conceito relacionado à identidade de gênero e não à sexualidade, remetendo"+
    " à pessoa que possui uma identidade de gênero diferente do sexo designado no nascimento.",
    trans: true,
}

export const queer: CardProps = {
    letter: Q,
    term: "Queer",
    flag: Flag5,
    description: "É um termo da língua inglesa usado para qualquer pessoa que não se encaixe " + 
    "na heterocisnormatividade, ou seja, que não se identifica com o padrão binário de gênero," +
    " tampouco se sente contemplada com outra letra da sigla referente a orientação sexual",
    trans: false,
}

export const Card: React.ElementType = ({letter, term, flag, description, trans}: CardProps) => {
    if (trans === false){
        return (
              <CardContainer>
                  <img src={letter} alt="letra da sigla" style={{width: "147.56px",
  height: "180.38px", margin: "63.36px 96.07px 74.26px 0px"}}/>
                  <Info>
                      <TermFlag>
                          <h1>{term}</h1>
                          <img src={flag} alt="bandeira" />
                      </TermFlag>
                      <p>{description}</p>
                  </Info>
              </CardContainer>
        );
    }
    else {
        return (
            <CardContainer>
                <img src={letter} alt="letra da sigla" style={{width: "147.56px",
height: "180.38px", margin: "63.36px 96.07px 74.26px 0px"}}/>
                <Info>
                    <TermFlag2>
                        <h1>{term}</h1>
                        <img src={flag} alt="bandeira" />
                    </TermFlag2>
                    <Description>{description}</Description>
                    <MoreInfo>
                        <p>Saiba mais sobre esta sigla</p>
                        <img src={Arrow} alt="" />
                    </MoreInfo>
                </Info>
            </CardContainer>
      );
    }

}