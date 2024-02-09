import styled from 'styled-components'

export const RarityContainer = styled.div`

 background-color: #6D6470;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 width: 100%;
 padding: 0 30px;
 position: relative;
 z-index: -1;
`

export const RarityContent = styled.div`
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
margin: center;
display: grid;
align-items: center;
white-space: nowrap;
`;

export const Raritybox = styled.img`
 padding: 5px;
 width: 100%;
 height: 100%;
 min-width: 60px;
 min-height: 60px;
 max-height: 300px;
`;

export const Raritylabel = styled.h1`
 font-size: 32px;
 line-height: 1.1;
 font-weight: 600;
 justify-content: center;
 text-decoration: none;
 text-align: center;
 padding-top: 5px;
 color: #F7F4EF;
 text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

 @media screen and (max-width: 1000px) {
    font-size: 16px;

@media screen and (max-width: 768px) {
    font-size: 10px;
}
`

export const Raritycolumn = styled.div`
width: 100%;
`