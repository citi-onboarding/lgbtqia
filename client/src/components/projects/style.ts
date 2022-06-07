import styled from 'styled-components'; 

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(180deg, #FFF2F6 9.23%, rgba(255, 242, 246, 0) 82.02%);

  img{
    width: 934.31px;
    margin: auto;
  }
`;

export const ProjectsLine = styled.div`
  position: relative;
  width: 592.46px;
  height: 7.32px;
  margin-left: 117.04px;
  margin-right: 659.51px;
  margin-bottom: 76.32px;
  top: 85.45px;
  background: #EF548C;
  border-radius: 14px;
`;

export const ProjectsSpace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  padding: 76.32px 0px 123.81px 117.04px;
`;

export const ProjectsPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: left;
  width: 564.06px;

  h3{
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
    color: #000000;
    left: 117.04px;
  }

  p{
    width: 564.06px;
    margin-top: 25.72px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 41px;
    color: #222222;
  }
`;

export const ProjectsInstitution = styled.div`
  width: 609px;
  height: 314.84px;
  left: 79.16px;
  top: 0px;
  background: #FCFCFC;
  box-shadow: 1.91338px 1.91338px 19.1338px rgba(0, 0, 0, 0.07);
  border-top-left-radius: 11.4803px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 11.4803px;

  img{
    width: 181.28px; 
    height: 63.07px;
    margin-top: 39.92px;
    margin-left: 33.27px;
  }

  p{
    width: 443.32px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 15.307px;
    line-height: 34px;
    color: #222222;
    margin-left: 33.27px;
    margin-top: 42.89px;
  }
`;

export const ProjectsInstitutionBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
`;

export const ProjectsButton = styled.a`
  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  font-size: 14.1331px;
  line-height: 18px;
  text-align: center;
  color: #FFFFFF;
  width: 168px;
  padding: 9.74px 9.5px 10.26px 9.5px;
  background: #EF548C;
  border: 0.614033px solid #DDDDDD;
  border-radius: 3.12613px;
  text-align: center;
  margin-top: 52.8px;
  margin-right: 123.29px;

  b{
      font-weight: 550;
    }
`;