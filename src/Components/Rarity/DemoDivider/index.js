import React from 'react'
import { Raritybox, RarityContainer, RarityContent, Raritylabel, Raritycolumn, } from './Demostyles'
import Rarity1 from '../../../images/RarityPics/Rarity1.png'
import Rarity2 from '../../../images/RarityPics/Rarity2.png'
import Rarity3 from '../../../images/RarityPics/Rarity3.png'
import Rarity4 from '../../../images/RarityPics/Rarity4.png'
import Rarity5 from '../../../images/RarityPics/Rarity5.png'
import Rarity6 from '../../../images/RarityPics/Rarity6.png'

const DemoRarity = () => {
    return (
        <RarityContainer>
            <RarityContent>
                <Raritycolumn><Raritylabel>Common</Raritylabel><Raritybox src={Rarity1} /></Raritycolumn>
                <Raritycolumn><Raritylabel>Uncommon</Raritylabel><Raritybox src={Rarity2}/></Raritycolumn>
                <Raritycolumn><Raritylabel>Rare</Raritylabel><Raritybox src={Rarity3}/></Raritycolumn>
                <Raritycolumn><Raritylabel>Special</Raritylabel><Raritybox src={Rarity4}/></Raritycolumn>
                <Raritycolumn><Raritylabel>Mystic</Raritylabel><Raritybox src={Rarity5}/></Raritycolumn>
                <Raritycolumn><Raritylabel>Secret</Raritylabel><Raritybox src={Rarity6}/></Raritycolumn>
            </RarityContent>
        </RarityContainer>
    )
}

export default DemoRarity
