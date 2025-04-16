import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages }) => {
  const navigate = useNavigate();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    navigate(`/?page=${page}`);
  };

  return (
    <div className={`d-flex justify-content-center mt-4 ${styles.pagination}`}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`${styles.pageDot} ${currentPage === page ? styles.active : ''}`}
        />
      ))}
    </div>
  );
};

export default Pagination;