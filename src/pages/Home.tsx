import Button from '../components/common/Button';
import Title from '../components/common/Title';
import InputText from '../components/common/inputText';

function Home() {
    return (
        <>
            <Title size="medium" color="third">
                제목 테스트
            </Title>
            <Button size="medium" scheme="primary">
                버튼 테스트
            </Button>
            <InputText placeholder="여기에 입력하세요"></InputText>
            <div>Home body</div>
        </>
    );
}

export default Home;
