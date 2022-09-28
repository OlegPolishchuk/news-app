import React from 'react';

import ReactPaginate from 'react-paginate';

import s from './Pagination.module.scss';

import { ReturnComponentType } from 'types';

interface Props {
  pageCount: number;
  onClickCallback: (pageNumber: number) => void;
}

export const Pagination = ({
  pageCount,
  onClickCallback,
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
    onClickCallback(e.selected);
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      breakLabel="..."
      breakClassName={s.pagination_break}
      renderOnZeroPageCount={() => null}
      onClick={handlePageClick}
      className={s.pagination}
      activeClassName={s.pagination_page_active}
      pageClassName={s.pagination_page}
      pageLinkClassName={s.pagination_pageLink}
    />
  );
};
