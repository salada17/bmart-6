import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import * as S from './style';
import { SORTOPTIONS } from '../../commons/constants';

interface Props {
  selectedOption: string;
  changeSort: Function;
  isModalOpen: boolean;
  onModalClose: Function;
}

Modal.setAppElement('#root');

const customStyle = {
  overlay: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0,0,0,0.16)',
  },

  content: {
    width: '100%',
    height: '350px',
    top: 'auto',
    right: 'auto',
    left: 'auto',
    bottom: 0,
    background: 'var(--white)',
    borderRadius: '15px 15px 0px 0px',
    padding: 0,
  },
};

const SortModal = ({ selectedOption, changeSort, isModalOpen, onModalClose }: Props) => {
  return (
    <>
      <Modal isOpen={isModalOpen} onRequestClose={() => onModalClose()} style={customStyle}>
        <S.Header>
          <S.Title>정렬</S.Title>
          <S.CloseButton onClick={() => onModalClose()}>닫기</S.CloseButton>
        </S.Header>
        <S.SortCardList>
          {Object.entries(SORTOPTIONS).map(([title], index) => (
            <S.SortCard
              key={index}
              onClick={() => {
                changeSort(title);
                onModalClose();
              }}
              theme={{ selected: title === selectedOption }}
            >
              {title}
            </S.SortCard>
          ))}
        </S.SortCardList>
      </Modal>
    </>
  );
};
export default SortModal;
