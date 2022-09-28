import React from 'react';

import ReactPaginate from 'react-paginate';

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
      nextLabel="next >"
      previousLabel="< previous"
      renderOnZeroPageCount={() => null}
      onClick={handlePageClick}
    />
  );
};
