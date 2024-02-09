import styled from 'styled-components'

export const ServicesContainer = styled.div`
 height: 1250px;
 display: flex; 
 justify-content: center;
 flex-direction: column;
 align-items: center;
 background: #F7D0D9;


 @media screen and (max-width: 1920px) {
    height: 930px;
 } 

 @media screen and (max-width: 768px) {
    height: 1100px;
 }


 @media screen and (max-width: 480px) {
    height: 1300px;
 }
`

export const ServicesH1 = styled.img`
color: #F7F4EF;
justify-content: center;
display: flex;
align-items: center;
margin-left: auto;
margin-right: auto;
max-width: 30%;
min-width: 320px;
margin-top: 80px;;
padding-bottom: 60px;
`

export const Subtitle = styled.p`
 max-width: 768px;
 margin-bottom: 0px;
 font-size: 18px; 
 line-height: 24px;
 color: #F7F4EF;
 justify-content: center;
`

export const BodyContainer = styled.div`
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
`

export const ServicesWrapper = styled.div`
grid-template-columns: 1fr 1fr 1fr;
display: grid;
align-items: center;
white-space: nowrap;
`;

export const ServicesCard = styled.div`
width: 100%;
`

export const ServicesIcon = styled.img`
padding: 25px;
width: 100%;
height: 100%;
max-width:  280px;
max-height: 280px;
min-width: 40px;
min-height: 40px;
border-radius: 50%;
max-height: 330px;
`

export const ServicesH2 = styled.h2`
 font-size: 1.5rem;
 margin-bottom: 10px;
 text-align: center;
 z-index: 10;
 text-decoration: none;
 color: #F7F4EF;
 white-space: nowrap;
 text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`

export const ServicesH3 = styled.h2`
 font-size: 1.5rem;
 margin-bottom: 10px;
 text-align: center;
 z-index: 10;
 text-decoration: none;
 color: #F7F4EF;
 white-space: nowrap;
 text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

 @media screen and (max-width: 768px) {
   font-size: 100%;
}
`

export const ServicesP = styled.p`
 font-size: 1.2rem;
 text-align: center;
 line-height: 1.2;
 font-weight: 600;
 color: #F7F4EF;
 text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`

export const SocialIconLink = styled.a`
 color: #BD5857;
 font-size: 25px;
 align-items: center;
 border-radius: 25px;
 margin-left: auto;
 margin-right: auto;
 display: table;
 margin-top: 8px;
 &:hover {
   transition: all 0.2s ease-in-out;
   background: rgba(0,0,0,0.3);
`;

export const FTwitter = styled.img`
height: 24px;
width: 50px; 
margin-bottom: -4px;
`

export const Textbox = styled.div`
background: rgba(226, 135, 180, 1);
padding: 15px 5px 15px 15px;
border-radius: 12px;  
justify-content: center;
margin-right: 15px;
margin-left: 15px;
`