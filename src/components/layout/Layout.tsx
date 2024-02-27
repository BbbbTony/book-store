import Header from '../common/Header';
import Footer from '../common/Footer';
import styled from 'styled-components';

interface LayoutProps {
    children: React.ReactNode; //리액트노드 타입은 리액트로 만든 컴포넌트들이 배치될수있다.
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <LayoutStyle>{children}</LayoutStyle>
            <Footer />
        </>
    );
}

const LayoutStyle = styled.main`
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.width.large};
    padding: 20px 0;
`;

export default Layout;
