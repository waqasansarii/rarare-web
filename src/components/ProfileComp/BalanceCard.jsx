import React from 'react'
import Button from '../Btn/Btn'

const BalanceCard = () => {
    return (
        <div className='balance_card_container'>
            <div className="blnce_card_div">
                <div className="blnce_head">
                    <h6>Your Balance</h6>
                    <Button className='blnce_btn' value='Buy Loco Points' />
                </div>
                <h3><strong style={{color:'#34b299'}}>2,000</strong></h3>
                <p>LOCO POINTS</p>
            </div>
        </div>
    )
}

export default BalanceCard
