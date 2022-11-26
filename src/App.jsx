import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import {routers} from "routers/routers";
import style from 'App.module.css';
import {Header} from "components/Header/Header";
// import {NotFoundPage} from "containers/NotFoundPage/NotFoundPage";
// import {PersonPage} from "containers/PersonPage/PersonPage";
// import {withErrorApi} from "HOC/withErrorApi";
// import {HomePage} from "components/HomePage/HomePage";
// const PersonPageWithError =  withErrorApi(PersonPage)

export function App() {
  return (
    <>
        <BrowserRouter>
            <div className={style.wrapper}>
                <Header />
                <Routes>
                    {routers.map((route, index) =>(
                        <Route
                            key={index}
                            path={route.path}
                            element={route.component}>
                        </Route>
                    ))}
                </Routes>

            </div>

        </BrowserRouter>
    </>
  );
}
// <Routes>
//    <Route path="/" element={<HomePage/>}></Route>
//    <Route path="/person" element={<PersonPageWithError/>}></Route>
//    <Route path="*" element={<NotFoundPage/>}></Route>
// </Routes>


