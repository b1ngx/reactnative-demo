/**
 * Scrollable-tab-view
 * https://github.com/skv-headless/react-native-scrollable-tab-view
 * @blng
 */

import React, { Component } from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Workbench from '../workbench';
import Contacts from '../org';
import Me from '../me';
import TabBar from './tabbar';

export default class Tab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableTabView tabBarPosition="bottom" renderTabBar={() => <TabBar />}>
        <Workbench tabLabel={{name: '工作', icon: 'md-apps'}} {...this.props} />
        <Contacts tabLabel={{name: '通讯录', icon: 'md-contact'}} {...this.props}/>
        <Me tabLabel={{name: '我', icon: 'md-person'}} {...this.props} />
      </ScrollableTabView>
    );
  }
}
