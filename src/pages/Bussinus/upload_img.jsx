import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Btn/Btn'
// import dot from '../../Assets/dot.png'

import './Bussines.css'


const BusinessUploadImg = () => {

    let [img, setImg] = useState([])

    const handleUrl = (e) => {
        // let arr = []
        let url = URL.createObjectURL(e.target.files[0])
        // arr.push(url)
        setImg([url, ...img])
    }
    // console.log(img)

    const dltImg =(e)=>{
       let filter = img.filter((val)=>val!==e)
       setImg(filter)
    }

    return (
        <div className='bussines_container'>
            <div className='bussines_main_div'>
                <div className="bussine_top_img_div">
                    <img src='https://raw.githubusercontent.com/MuhammadTalhaKhan22784/rarare-master/main/src/Assets/lg_logo.png' alt="lgLogo" />
                </div>
                <h5 className='bussines_head'><strong>Business <strong style={{ color: '#19c2a0' }}> Registration!</strong></strong></h5>
                <div className="bussines_para">
                    <p>Please provide the following to complete registration!</p>
                </div>
                <div>
                    <h6><strong>Upload Incorporation Certificate</strong></h6>
                </div>
                <div className="upload_div">
                    <label htmlFor="upload_logo">
                        <img className='upload_img' src="https://i.stack.imgur.com/x3KMH.jpg" alt="" />
                    </label>
                    <input type="file" onChange={(e) => handleUrl(e)} name="upload_logo" id="upload_logo" />
                </div>
                <div className='main_upload_img_div'>
                    {img && img.map((val,i) => (
                        <div className="upload_result" key={i}>
                            <p className='upload_delete' onClick={()=>dltImg(val)} >&times;</p>
                            <img className='upload_img_result' src={val} alt="" />
                        </div>
                    ))}
                </div>
                <div className="business_btn_div">
                    <Link to='/business-info'>
                        <Button className='bussines_white_btn upload_back' value='Back' />
                    </Link>
                    <Link to='/authority-info'>
                        <Button className='bussines_grn_btn bus_submit' value='Submit for varification' />
                    </Link>
                </div>
                <div className="busines_login_div">
                    <p className="busines_login_para">
                        Already a member ?
                    </p>
                    <Link className='busi_login_link' to='/login'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default BusinessUploadImg