import React from 'react'
import ProfileCard from '../../components/ProfileComp/ProfileCard'
import SecuritySettingCard from '../../components/ProfileComp/SecuritySetCard'


const SecuritySetting = () => {
    return (
        <div>
            <div className='acount_container'>
                <div className="acount_main_div">
                    <ProfileCard />
                    <SecuritySettingCard />
                </div>
            </div>
        </div>
    )
}

export default SecuritySetting
