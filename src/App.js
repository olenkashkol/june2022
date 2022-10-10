import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./mainLayout/MainLayout";
import {ToDosPage, ToDoDetailsPage, CommentsPage, AlbumsPage, CommentPageDetails,AlbumsPageDetails} from "./pages";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'todos'} element={<ToDosPage/>}>
                        <Route path={':id'} element={<ToDoDetailsPage/>}/>
                    </Route>
                    <Route path={'albums'} element={<AlbumsPage/>}>
                        <Route path={':id'} element={<AlbumsPageDetails/>}/>
                    </Route>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':id'} element={<CommentPageDetails/>}/>
                    </Route>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
