import React from 'react'
import ProfileCard from '../../components/ProfileComp/ProfileCard'
import ProfileSettingCard from '../../components/ProfileComp/ProfileSettingCard'


const ProfileSetting = () => {
    return (
        <div>
            <div className='acount_container'>
                <div className="acount_main_div">
                    <ProfileCard />
                    <ProfileSettingCard />
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting
