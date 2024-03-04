import styled from 'styled-components';
import Title from '../components/common/Title';
import BooksFilter from '../components/common/books/BooksFilter';
import BooksList from '../components/common/books/BooksList';
import BooksEmpty from '../components/common/books/BooksEmpty';
import Pagination from '../components/common/books/Pagination';
import BookItem from '../components/common/books/BookItem';
import BooksViewSwitcher from '../components/common/books/BooksViewSwitcher';

function Books() {
    return (
        <>
            <Title size="large">도서 검색 결과</Title>
            <BooksStyle>
                <BooksFilter />
                <BooksViewSwitcher />
                <BooksList />
                <BooksEmpty />
                <Pagination />
            </BooksStyle>
        </>
    );
}

const BooksStyle = styled.div``;

export default Books;
