import React from "react";


const Rank = (props) => {
    return (
        <div>
            <div className="white f3">{`${props.user.name}, your rank is currently:`}</div>
            <div className="white f1">{`#${props.user.rank}`}</div>
        </div>
    );
};


export default Rank;