import {CardContainer, Description, Info, Letter, MoreInfo, TermFlag, TermFlag2} from "./styles"
import { L, G, B, T, Q, Flag1, Flag2, Flag3, Flag4, Flag5, Arrow } from "../../assets"

type CardProps = {
    letter: any;
    term: string;
    flag: any;
    description: string;
    trans: boolean;
    letterName: string;
}

export const lesbian: CardProps = {
    letter: L,
    term: "Lésbica",
    flag: Flag1,
    description: "É uma orientação sexual e diz respeito a mulheres (cisgênero ou transgênero) que"+
    " se sentem atraídas afetiva e sexualmente por outras mulheres (também cis ou trans).",
    trans: false,
    letterName: "letra L",
}
export const gay: CardProps = {
    letter: G,
    term: "Gay",
    flag: Flag2,
    description: "É uma orientação sexual e se refere a homens (cisgênero ou transgênero) que"+
    " se sentem atraídos por outros homens (também cis ou trans).",
    trans: false,
    letterName: "letra G",
}
export const bi: CardProps = {
    letter: B,
    term: "Bissexual",
    flag: Flag3,
    description: "Bissexualidade também é uma orientação sexual. Bissexuais são pessoas que"+
    " se relacionam afetiva e sexualmente tanto com pessoas do mesmo gênero, quanto do gênero oposto"+
    " (sejam essas pessoas cis ou trans).",
    trans: false,
    letterName: "letra B",
}
export const trans: CardProps = {
    letter: T,
    term: "Transexuais, transgêneros, travestis",
    flag: Flag4,
    description: "Este é um conceito relacionado à identidade de gênero e não à sexualidade, remetendo"+
    " à pessoa que possui uma identidade de gênero diferente do sexo designado no nascimento.",
    trans: true,
    letterName: "letra T",
}

export const queer: CardProps = {
    letter: Q,
    term: "Queer",
    flag: Flag5,
    description: "É um termo da língua inglesa usado para qualquer pessoa que não se encaixe " + 
    "na heterocisnormatividade, ou seja, que não se identifica com o padrão binário de gênero," +
    " tampouco se sente contemplada com outra letra da sigla referente a orientação sexual",
    trans: false,
    letterName: "letra Q",
}

export const Card: React.ElementType = ({letter, term, flag, description, trans, letterName}: CardProps) => {
    if (trans === false){
        return (
              <CardContainer>
                  <Letter>
                    <img src={letter} alt={letterName} style={{width: "100%"}}/>
                  </Letter>
                  <Info>
                      <TermFlag>
                          <h1>{term}</h1>
                          <img src={flag} alt={"bandeira " + term} />
                      </TermFlag>
                      <p>{description}</p>
                  </Info>
              </CardContainer>
        );
    }
    else {
        return (
            <CardContainer>
                <Letter>
                    <img src={letter} alt={letterName} style={{width: "100%"}}/>
                </Letter>
                <Info>
                    <TermFlag2>
                        <h1>{term}</h1>
                        <img src={flag} alt={"bandeira " + term} />
                    </TermFlag2>
                    <Description>{description}</Description>
                    <MoreInfo>
                        <a href="https://transcendemos.com.br/transcendemosexplica/trans/">Saiba mais sobre esta sigla</a>
                        <img src={Arrow} alt="seta para a direita" />
                    </MoreInfo>
                </Info>
            </CardContainer>
      );
    }

}