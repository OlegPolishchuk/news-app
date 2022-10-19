import React from 'react';

import ReactPaginate from 'react-paginate';

import s from './Pagination.module.scss';

import { ReturnComponentType } from 'types';

interface Props {
  pageCount: number;
  onClickCallback: (pageNumber: number) => void;
  currentPage: number;
}

export const Pagination = ({
  pageCount,
  onClickCallback,
  currentPage,
}: Props): ReturnComponentType => {
  const handlePageClick = (e: {
    index: number | null;
    selected: number;
    nextSelectedPage: number | undefined;
    event: object;
    isPrevious: boolean;
    isNext: boolean;
    isBreak: boolean;
    isActive: boolean;
  }): void => {
    onClickCallback(e.selected + 1);
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage}
      breakLabel="..."
      marginPagesDisplayed={2}
      renderOnZeroPageCount={() => null}
      onPageChange={handlePageClick}
      className={s.pagination}
      breakClassName={s.pagination_break}
      activeClassName={s.pagination_page_active}
      pageClassName={s.pagination_page}
      pageLinkClassName={s.pagination_pageLink}
      nextClassName={s.pagination_page}
      nextLinkClassName={s.pagination_pageLink}
      previousClassName={s.pagination_page}
      previousLinkClassName={s.pagination_pageLink}
      disabledClassName={s.pagination_disabled}
    />
  );
};
