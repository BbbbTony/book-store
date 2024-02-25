import Header from '../common/Header';
import Footer from '../common/Footer';

interface LayoutProps {
    children: React.ReactNode; //리액트노드 타입은 리액트로 만든 컴포넌트들이 배치될수있다.
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
