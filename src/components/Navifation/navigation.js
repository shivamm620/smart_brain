import React from 'react';

const Navigation = ({onChangeRoute , isSingin})=>{
        if(isSingin){
            return(
                <nav style={{display:"flex",justifyContent:'flex-end'}}>
                <p onClick={()=>onChangeRoute('Singout')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
            </nav>
            )
        }else{
            return(
                <nav style={{display:"flex",justifyContent:'flex-end'}}>
                <p onClick={()=>onChangeRoute('Singin')} className="f3 link dim black underline pa3 pointer">Sign In</p>
                <p onClick={()=>onChangeRoute('Register')} className="f3 link dim black underline pa3 pointer">Register</p>
                </nav>
            )
        }
}

export default Navigation ;