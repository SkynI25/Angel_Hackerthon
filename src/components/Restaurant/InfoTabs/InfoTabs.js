import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './InfoTabs.scss';

const InfoTabs = ({ children }) => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>메뉴 소개</Tab>
          <Tab>업체 소개</Tab>
          <Tab>배송 안내</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default InfoTabs;
