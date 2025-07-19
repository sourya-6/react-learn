// import React from 'react'

// const ProfileCard = () =>{
//     const name = "Sourya";
//     const rollNo = 663
//     return(
//         <div>
//             <div>Name:{name}</div>
//             <div>RollNo:{rollNo}</div>
//         </div>
//     )
// }

// export default ProfileCard
import React from 'react';

const ProfileCard = (props) => {//these way or
  //const ProfileCard = ({name,rollNo})=>{//second way
  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Roll No: {props.rollNo}</div>
    </div>
  );
};

export default ProfileCard;
