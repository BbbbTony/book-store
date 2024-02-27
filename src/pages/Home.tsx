import Button from '../components/common/Button';
import Title from '../components/common/Title';

function Home() {
    return (
        <>
            <Title size="medium" color="third">
                제목 테스트
            </Title>
            <Button size="medium" scheme="primary">
                버튼 테스트
            </Button>
            <div>Home body</div>
        </>
    );
}

export default Home;
