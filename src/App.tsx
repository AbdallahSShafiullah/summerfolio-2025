
import {RouterProvider, createBrowserRouter} from "react-router";
import Root from './Components/Root.tsx';
export default function App() {

    const router=createBrowserRouter(

        [
            {path:"*", Component:Root}
        ]
    )


    return(
        <>
            <RouterProvider router={router}/>
        </>



    )
}