import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { BookStoreThemeProvider } from './context/themeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/common/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
        errorElement: <Error />, //하위에 모두 적용됨
    },
    {
        path: '/books',
        element: (
            <Layout>
                <div>도서 목록</div>
            </Layout>
        ),
    },
]);

function App() {
    // return <Layout children={<Home />} />;

    return (
        <BookStoreThemeProvider>
            <RouterProvider router={router} />
        </BookStoreThemeProvider>
    );
}

export default App;
