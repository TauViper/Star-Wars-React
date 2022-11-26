import { useState } from "react";
import {ErrorMessage} from "components/ErrorMessage/ErrorMessage";

export const withErrorApi = Component => {
    return props => {
        const [errorApi, setErrorApi] = useState(false)
        return (
            <>
                {errorApi
                    ? <ErrorMessage/>
                    : (<Component setErrorApi={setErrorApi} {...props}/>)
                }
            </>
        );
    }
}

// export function withErrorApi(Component) {
//     const [errorApi, setErrorApi] = useState(false);
//   const ComponentWithExtra = (props) => {
//
//     return (
//       <>
//         {errorApi ? (
//           <h1>Error</h1>
//         ) : (
//           <Component {...props} setErrorApi={setErrorApi} />
//         )}
//       </>
//     );
//   };
//
//   return ComponentWithExtra;
// }
