import React from 'react'
import Reinvite from '../../components/HomeComp/Reinvite'
import WhatWeDo from '../../components/HomeComp/WhatWeDo'
import VoiceHeard from '../../components/HomeComp/VoiceHeard'
import Issues from '../../components/HomeComp/Issues'
import GetInspired from '../../components/HomeComp/Getinspired'
import Proposal from '../../components/HomeComp/Proposal'
import Community from '../../components/HomeComp/Community'
import Survey from '../../components/HomeComp/Survey'
import Report from '../../components/HomeComp/Report'
import Partner from '../../components/HomeComp/Partner'
import JoinCommunity from '../../components/HomeComp/JoinCommunity'
import HelpCartoon from '../../components/HomeComp/HelpCartoon'
import './Home.css'

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
