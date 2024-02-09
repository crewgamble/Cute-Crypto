import styled from 'styled-components'

export const AboutContainer = styled.div`
 color: #fff;
 z-index: ;
 background: ${({ lightBg }) => (lightBg ? '#F7D0D9 ' : '#ACD3DE')};
 
 @media screen and (max-width: 768px) {
     padding: 20px 0;
 }
`;

export const AboutWrapper = styled.div`
 display: grid;
 z-index: 1;
 height: 100%;
 width: 100%;
 max-width: 1920px;
 margin-right: auto;
 margin-left: auto;
 padding: 0 0px;
 justify-content: center;
 align-items: center;
 
`;

export const AboutRow = styled.div`
 display: grid;
 grid-auto-columns: minmax(auto, 1fr);
 align-items: center;
 max-width: 1500px;
 margin-right: auto;
 margin-left: auto;
 grid-template-areas: ${({ imgStart }) =>
 imgStart ? `'col2 col1'` : `'col1 col2'`};

 @media screen and (max-width: 850px) {
    grid-template-areas: ${({ imgStart }) => 
    imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
}
`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
width: 100%; 
padding-top: 0;
padding-bottom: 60px;
align-items: center;
justify-content: center;
`

export const TopLine = styled.p`
 color: rgba(94, 87, 123, 1);;
 font-size: 16px; 
 line-height: 16px;
 font-weight: 700;
 letter-spacing: 1.4px;
 text-transform: uppercase;
 margin-bottom: 16px;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-bottom: ;
`

export const Subtitle = styled.p`
 margin-bottom: 25px;
 font-size: 18px; 
 line-height: 24px;
 display: flex;
 align-items: center;
 justify-content: center;
 color: ${({ darkText }) => (darkText ? '#F7F4EF ' : '#F7F4EF ')};
`

export const ImgWrap = styled.div`
margin-right: auto;
margin-left: auto;
max-width: 75%;
height: 100%;
align-items: center;
`
export const Img = styled.video`
align-items: center;
width: 100%;
margin: 10px 0 0 0;
padding-right: 0;
`;


export const RarityBanner = styled.img`
color: #F7F4EF;
justify-content: center;
display: flex;
align-items: center;
margin-left: auto;
margin-right: auto;
width: 60%;
min-width: 300px;
margin-top: 80px;;
padding-bottom: 60px;
`;

export const RarityContainer = styled.div`
 background-color: #6D6470;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 375px;
 width: 100%;
 padding: 0 ;
 position: relative;
 z-index: -1;
`

export const Raritybox = styled.img`
 padding: 0px;
 width: 100%;
 height: 100%;
 min-width: 60px;
 min-height: 60px;
 max-height: 300px;
`;


export const Textbox = styled.div`
background: rgba(126, 153, 181, 1);
padding: 20px 15px 1px 15px;
border-radius: 25px;  
`