import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './style/theme';

function App() {
    // return <Layout children={<Home />} />;
    return (
        <ThemeProvider theme={light}>
            <GlobalStyle themeName="light" />
            <Layout>
                <Home /> {/* children  이렇게도 가능 */}
            </Layout>
        </ThemeProvider>
    );
}

export default App;
