import React,{useState} from 'react'
import bar from '../../Assets/Rectangle 28@2x.png'
import TopicHead from './topicHead'
import IssueCard from './issueCard'
import ProductProposalCard from './ProductProposalCard'
import ProSurveyCard from './ProSurveyCard'


const SearchResultHead = () => {

    let [list,setList] = useState(false)

    return (
        <div>
            <div className='search_result_div'>
                <div className='search_result_head_div'>
                    <div className='search_reslut'>Showing result for <span> "Potholes" </span> , near <span> " Togo nigeria " </span></div>
                    <div className='change_design_div'>
                        <img onClick={()=>setList(true)} style={list? {backgroundColor:'yellow'}:null} src={bar} alt="" />
                        <img onClick={()=>setList(false)} style={!list? {backgroundColor:'yellow'}:null} src={bar} alt="" />
                    </div>
                </div>
                <TopicHead result='2 Result' head='Issues' />
                <IssueCard list={list} />
                <TopicHead result='1533 Result' head='Proposal' />
                <ProductProposalCard list={list} />
                <TopicHead result='1033 Result' head='Surveys' />
                <ProSurveyCard list={list}/>

            </div>
        </div>
    )
}

export default SearchResultHead
