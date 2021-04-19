import React from 'react'

const TopicHead = ({head,result}) => {
    return (
        <div>
            <div className='topic_head_div'>
                <h5><strong>{head}</strong></h5>
                <p>{result}</p>
            </div>
        </div>
    )
}

export default TopicHead
