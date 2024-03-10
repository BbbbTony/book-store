import styled from 'styled-components';
import Title from '../components/common/Title';
import BooksFilter from '../components/common/books/BooksFilter';
import BooksList from '../components/common/books/BooksList';
import BooksEmpty from '../components/common/books/BooksEmpty';
import Pagination from '../components/common/books/Pagination';
import BooksViewSwitcher from '../components/common/books/BooksViewSwitcher';
import { useBooks } from '../hooks/useBooks';

function Books() {
    const { books, pagination } = useBooks();

    return (
        <>
            <Title size="large">도서 검색 결과</Title>
            <BooksStyle>
                <BooksFilter />
                <BooksViewSwitcher />
                <BooksList books={books} />
                <BooksEmpty />

                <Pagination />
            </BooksStyle>
        </>
    );
}

const BooksStyle = styled.div``;

export default Books;
