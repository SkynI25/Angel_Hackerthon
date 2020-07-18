import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './InfoTabs.scss';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

Modal.setAppElement('#root');

const InfoTabs = ({ restaurant: { items }, addItem }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const openModal = (idx) => {
    setSelectedItem(items[idx]);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleModalBtnClick = () => {
    closeModal();
    addItem(selectedItem);
  };

  return (
    <div>
      <div className="delivery-info">배달 시간 : 55~60분 예상</div>
      <Tabs>
        <TabList>
          <Tab>메뉴 소개</Tab>
          <Tab>업체 소개</Tab>
        </TabList>

        <TabPanel>
          <div className="restaurant-list-container">
            <div className="list">
              {items &&
                items.map((item, idx) => (
                  <div
                    className="item-container"
                    key={idx}
                    onClick={() => openModal(idx)}
                  >
                    <div className="img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div>
                      <p className="title">{item.name}</p>
                      <p className="description">
                        {new Intl.NumberFormat('ko-KR', {
                          style: 'currency',
                          currency: 'KRW',
                        }).format(item.price)}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2 className="modal-title">
          {selectedItem.name}
          <span className="price">
            {new Intl.NumberFormat('ko-KR', {
              style: 'currency',
              currency: 'KRW',
            }).format(selectedItem.price)}
          </span>
        </h2>
        <button className="modal-close" onClick={closeModal}>
          <MdClose />
        </button>
        <div className="modal-content">
          <div className="img">
            <img src={selectedItem.img} alt={selectedItem.name} />
          </div>
          <div className="description">{selectedItem.description}</div>
          <div className="recipe">{selectedItem.recipe}</div>
        </div>
        <div className="modal-btn" onClick={handleModalBtnClick}>
          장바구니에 담기
        </div>
      </Modal>
    </div>
  );
};

export default InfoTabs;
