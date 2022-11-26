import {HomePage} from "containers/HomePage/HomePage";
import {withErrorApi} from "HOC/withErrorApi";
import {PersonPage} from "containers/PersonPage/PersonPage";
import {NotFoundPage} from "containers/NotFoundPage/NotFoundPage";

const PersonPageWithError =  withErrorApi(PersonPage)


export const routers = [
    {
        path: "/",
        component: <HomePage />

    },
    {
        path: "/person",
        component: <PersonPageWithError/>

    },
    {
        path: "*",
        component: <NotFoundPage/>

    }
]