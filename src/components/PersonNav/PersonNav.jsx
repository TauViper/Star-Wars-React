





















































// import React from 'react';
// import style from './PersonNav.module.css'
// import {Link} from "react-router-dom";
//
// export const PersonNav = ({getResource, nextPage, previousPage, counterPage}) => {
//     const handleChangePrevious = () => getResource(previousPage)
//     const handleChangeNext = () => getResource(nextPage)
//
//     return (
//         <div className={style.container}>
//             <Link to={`/person/?page=${counterPage-1}`}>
//                 <button onClick={handleChangePrevious} disabled={!previousPage} className={style.buttons}>Previous</button>
//             </Link>
//             <Link to={`/person/?page=${counterPage+1}`}>
//                 <button onClick={handleChangeNext} disabled={!nextPage} className={style.buttons}>Next</button>
//             </Link>
//
//
//         </div>
//     );
// };