import React from 'react';

const Enlaces=({label ,link})=>{
    return <li><a href={link}>{label}</a></li>;
};

export default Enlaces;