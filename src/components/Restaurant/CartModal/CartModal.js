import React from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import './CartModal.scss';
import { GrCart } from 'react-icons/gr';
import CartItem from '../CartItem/CartItem';

const CartModal = ({
  cart = [],
  modalIsOpen,
  setIsOpen,
  deleteItem,
  changeCount,
  history,
}) => {
  const priceSum = cart.reduce((acc, cur) => acc + cur.price * cur.count, 0);
  const deliveryPrice = 3500;

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOrderBtnClick = () => {
    history.push('/order');
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2 className="modal-title">장바구니</h2>
        <button className="modal-close" onClick={closeModal}>
          <MdClose />
        </button>
        {cart.length > 0 ? (
          <>
            <div className="modal-content">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  deleteItem={deleteItem}
                  changeCount={changeCount}
                />
              ))}
              <div className="price-info">
                <div className="row">
                  <span>총 상품금액</span>
                  <span>
                    {new Intl.NumberFormat('ko-KR').format(priceSum)}원
                  </span>
                </div>
                <div className="row">
                  <span>배달비</span>
                  <span>
                    {new Intl.NumberFormat('ko-KR').format(deliveryPrice)}원
                  </span>
                </div>
                <div className="row">
                  <span>총 결제예상금액</span>
                  <span>
                    {new Intl.NumberFormat('ko-KR').format(
                      priceSum + deliveryPrice,
                    )}
                    원
                  </span>
                </div>
              </div>
            </div>
            <div className="modal-btn" onClick={handleOrderBtnClick}>
              총{' '}
              {new Intl.NumberFormat('ko-KR').format(priceSum + deliveryPrice)}
              원 구매하기
            </div>
          </>
        ) : (
          <div className="empty modal-content">
            <GrCart className="icon" />
            장바구니가 비어있습니다
          </div>
        )}
      </Modal>
    </React.Fragment>
  );
};

export default CartModal;
