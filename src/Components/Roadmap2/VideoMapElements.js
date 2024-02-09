import styled from 'styled-components'
 

export const HeroContainer = styled.div`
background: #F7D0D9;
display: flex;
align-items: center;
min-height: 100vh;
width: 100%;
padding: 0 0px;
position: relative;
z-index: 1; 

:before {
    content: '';
    postition: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
    z-index: 2

}
`

export const HeroBg = styled.div`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 100%;
 overflow: hidden;
 object-fit: cover;
`;

export const VideoBg = styled.video`
 width: 100%;
 height: 100%;
 -o-object-fit: cover;
 object-fit: cover;
 background: #F7D0D9;
`

export const HeroContent = styled.div`
 z-index: 3;
 height: 100%;
 width: 100%;
 padding: 8 24px;
 flex-direction: column;
 align-items: center;
`;


export const CloudsContainer =styled.div`
`

export const Row1 = styled.div`
display: flex;
position: relative;
justify-content: space-around;
width: auto;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`

export const Row2 = styled.div`
grid-template-columns: 1fr 1fr;
display: flex;
justify-content: space-evenly;
position: relative;
width: auto;
padding-bottom: 125px;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`

export const CloudPlace = styled.img`
height: auto;
margin-left: auto;
margin-right: auto;
padding: 10px 0;
width: 100%;
max-width: 450px;
min-width: 200px;

`

export const HeroGradient = styled.div`
position: absolute;
z-index: 5;
width: 100%;
bottom: 0px;
height: 100px;
width: 100%;
background:linear-gradient(0deg, rgba(247,208,214,50),transparent);
  background-color: transparent;
`

export const AccHeader = styled.img`
color: #F7F4EF;
display: flex;
align-items: center;
margin-left: auto;
margin-right: auto;
max-width: 50%;
min-width: 275px;
margin-top: 60px;
padding-bottom: 30px;
`