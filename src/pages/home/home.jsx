import React from 'react'
import Reinvite from '../../components/homeComp/reinvite'
import WhatWeDo from '../../components/homeComp/whatWeDo'
import VoiceHeard from '../../components/homeComp/voiceHeard'
import Issues from '../../components/homeComp/issues'
import GetInspired from '../../components/homeComp/getinspired'
import Proposal from '../../components/homeComp/proposal'
import Community from '../../components/homeComp/community'
import Survey from '../../components/homeComp/survey'
import Report from '../../components/homeComp/report'
import Partner from '../../components/homeComp/partner'
import JoinCommunity from '../../components/homeComp/joinCommunity'
import HelpCartoon from '../../components/homeComp/helpCartoon'
import './home.css'

const Home = () => {
    return (
        <div>
            <HelpCartoon />
            <Reinvite />
            <WhatWeDo />
            <VoiceHeard />
            <Issues />
            <GetInspired />
            <Proposal />
            <Community />
            <Survey />
            <Report />
            <Partner />
            <JoinCommunity />
          
        </div>
    )
}

export default Home
