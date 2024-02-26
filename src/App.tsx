import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { GlobalStyle } from './style/global';
import { ThemeContext, BookStoreThemeProvider } from './context/themeContext';
import { ThemeName, getTheme } from './style/theme';
import ThemeSwitcher from './components/header/ThemeSwitcher';
import { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

function App() {
    // return <Layout children={<Home />} />;

    return (
        <BookStoreThemeProvider>
            <ThemeSwitcher />
            <Layout>
                <Home /> {/* children  이렇게도 가능 */}
            </Layout>
        </BookStoreThemeProvider>
    );
}

export default App;
