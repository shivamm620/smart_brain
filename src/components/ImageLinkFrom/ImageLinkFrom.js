import React from 'react';
import './ImageLinkFrom.css'
const ImageLinkFrom = ({onInputChange , onSubmit})=>{
    return(
        <div className="f3">
         <p>
            {`The Brain Will Detect Your Faces In Picture. Get Try It`}
        </p>
        <div className="center mt10">
        <div className=" from center pa4 center br3 shadow-5">
         <input className="f3 mr3 pa2 w-70 center" type='text' onChange={onInputChange}/>
         <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onSubmit}>Detect</button>
        </div>
        </div>
        </div>
    )
}
export default ImageLinkFrom;