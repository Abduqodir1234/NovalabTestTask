import axios from 'axios';
import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom"
import Loading from './components/Loading';
// import Blog from './pages/blogs/item';
const SigninPage = lazy(()=>import('./pages/signin'))
const SignUpPage = lazy(()=>import('./pages/signup'))
const IndexPage = lazy(()=>import('./pages/index'))
const UserDetail = lazy(()=>import('./pages/user/id'))
const ProfilePage = lazy(()=>import('./pages/profile'))
// const MyBlogItem = lazy(()=>import('./pages/my-blogs/item'))
// const BlogCreate  = lazy(()=>import('./pages/my-blogs/create'))

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL 
  // axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('access_token')}`
  // axios.defaults.headers.common["refresh"] = `${localStorage.getItem('refresh_token')}`
  return (
    <Router>
      <Suspense fallback={<Loading/>} >
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/register' element={<SignUpPage />} />
          <Route path='/users/:id' element={<UserDetail />} />
          <Route path='/profile' element={<ProfilePage />} />
          {/* <Route path='/blogs/:id' element={<Blog />} />
          <Route path='/profile/blogs' element={<MyBlogs />} />
          <Route path='/profile/blogs/create' element={<BlogCreate />} />
          <Route path='/profile/blogs/:id' element={<MyBlogItem />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
