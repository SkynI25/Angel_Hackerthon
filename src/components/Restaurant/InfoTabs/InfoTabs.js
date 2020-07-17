import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './InfoTabs.scss';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const InfoTabs = ({ menu, info, delivery }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState({});

  const openModal = (idx) => {
    setSelectedMenu(menu[idx]);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  menu = [
    {
      name: '고구마피자',
      price: 1000,
      img:
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
    },
    {
      name: '고구마피자',
      price: 12000,
      img:
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
    },
    {
      name: '고구마피자',
      price: 14000,
      img:
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
    },
    {
      name: '고구마피자',
      price: 16000,
      img:
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
    },
    {
      name: '고구마피자',
      price: 18000,
      img:
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
    },
  ];

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>메뉴 소개</Tab>
          <Tab>업체 소개</Tab>
          <Tab>배송 안내</Tab>
        </TabList>

        <TabPanel>
          <div className="restaurant-list-container">
            <div className="list">
              {menu.map((item, idx) => (
                <div
                  className="item-container"
                  key={idx}
                  onClick={() => openModal(idx)}
                >
                  <div className="img">
                    <img src={item.img} />
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
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <div>{selectedMenu.price}</div>
      </Modal>
    </div>
  );
};

export default InfoTabs;
