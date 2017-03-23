/**
 * Created by BinG on 2016/6/1.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import TabBar from 'react-native-xtabbar';

import Reward from './reward';
import Vault from './vault';
import Mine from './mine';

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TabBar style={styles.content} navTextColor="#858585" navTextColorSelected="#ff843a">
                    <TabBar.Item
                        badge = {8}
                        icon={require('./img/qian_normal.png')}
                        selectedIcon={require('./img/qian_hightlight.png')}
                        title='悬赏'>
                        <Reward {...this.props} />
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./img/zan_normal.png')}
                        selectedIcon={require('./img/zan_hightlight.png')}
                        title='收入'>
                        <Vault />
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./img/wo_normal.png')}
                        selectedIcon={require('./img/wo_hightlight.png')}
                        title='我'>
                        <Mine  />
                    </TabBar.Item>
                </TabBar>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default connect((state) => {
    return state.reward;
})(Main);