import React from 'react'

const BackGradient = ({ tb }) => {

    let gradient = <div style={{bottom: 0}} className="black-gradient"></div>;

    if(tb){
        gradient = 
            <div style={{width: "100%", height: "100%"}}>
                <div style={{top:0, backgroundImage: "linear-gradient(to top, rgba(6, 9, 14, 0), rgba(6, 9, 14, 0.84) 58%, #06090e)"}} className="black-gradient"></div>
                <div style={{bottom: 0}} className="black-gradient"></div>;
            </div>
    }else if(tb === "bottom"){
        gradient = <div style={{top:0, backgroundImage: "linear-gradient(to top, rgba(6, 9, 14, 0), rgba(6, 9, 14, 0.84) 58%, #06090e)"}} className="black-gradient"></div>
    }

    return (
        <div>
            {gradient}
        </div>
    )
}

export default BackGradient
