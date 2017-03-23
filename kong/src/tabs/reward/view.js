/**
 * Created by BinG on 2016/7/1.
 */

import React, {
  Component,
} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';

export default class RewardView extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};

    this.dismiss = this.dismiss.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          navIcon={require('./img/back_white.png')}
          onIconClicked={this.dismiss}
          title="悬赏详情"
          titleColor="#ffffff"
          actions={[{title: '分享', icon: require('./img/share.png'), show: 'always'}]}
          style={{height:56,backgroundColor: '#5597B8'}}
        >
        </ToolbarAndroid>

        <View style={styles.content}>
          <View style={styles.text}>
            <Text style={styles.title}>
              事业部总经理
            </Text>
            <Text style={styles.subtitle}>
              河南智业科技发展有限公司
            </Text>
          </View>
        </View>
      </View>
    );
  }

  dismiss(){
    this.props.navigator.pop();
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 15
  },
  image: { width: 40, height: 40, marginRight: 10 },
  title: { fontSize: 11, fontWeight: 'bold' },
  subtitle: { fontSize: 10 },
});