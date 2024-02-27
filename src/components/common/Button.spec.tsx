import { render, screen } from '@testing-library/react';
import Button from './Button';
import { BookStoreThemeProvider } from '../../context/themeContext';

describe('Title 컴포넌트 테스트', () => {
    it('랜더를 확인', () => {
        //1 랜더
        render(
            <BookStoreThemeProvider>
                <Button size="medium" scheme="primary">
                    버튼
                </Button>
            </BookStoreThemeProvider>
        );

        //2 확인
        expect(screen.getByText('버튼')).toBeInTheDocument();
    });
    it('size porps 적용', () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Button size="large" scheme="primary">
                    버튼
                </Button>
            </BookStoreThemeProvider>
        );
        expect(screen.getByRole('button')).toHaveStyle({ fontSize: '1.5rem' });
    });

    it('color porps 적용', () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Button size="large" scheme="primary">
                    버튼
                </Button>
            </BookStoreThemeProvider>
        );
        expect(container?.firstChild).toHaveStyle({ fontSize: 'brown' });
    });
});
