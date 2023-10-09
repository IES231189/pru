import React from 'react';

const Title = ({level , contect}) =>{
   const TitleTag = `h${level}`;

   return <TitleTag>{contect}</TitleTag>;

}

export default Title;