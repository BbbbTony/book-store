import { render, screen } from '@testing-library/react';
import Title from './Title';
import { BookStoreThemeProvider } from '../../context/themeContext';

describe('Title 컴포넌트 테스트', () => {
    it('랜더를 확인', () => {
        //1 랜더
        render(
            <BookStoreThemeProvider>
                <Title size="medium">제목</Title>
            </BookStoreThemeProvider>
        );

        //2 확인
        expect(screen.getByText('제목')).toBeInTheDocument();
    });

    it('size porps 적용', () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Title size="large">제목</Title>
            </BookStoreThemeProvider>
        );
        expect(container?.firstChild).toHaveStyle({ fontSize: '2rem' });
    });

    it('color porps 적용', () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Title size="large" color="primary">
                    제목
                </Title>
            </BookStoreThemeProvider>
        );
        expect(container?.firstChild).toHaveStyle({ fontSize: 'brown' });
    });
});
