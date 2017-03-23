'use strict';

import React, {
    Component
} from 'react';

import {
    Text,
    View,
    Image,
    StyleSheet,
    ListView,
    RefreshControl,
    TouchableHighlight,
    ToolbarAndroid
} from 'react-native';

import {fetchData, refreshData} from '../../actions/reward';
import ProgressBar from 'ProgressBarAndroid';

class List extends Component {
    render() {
        let {reward, onPress} = this.props;
        return (
            <TouchableHighlight
                style={styles.cell}
                activeOpacity={1}
                underlayColor="rgb(236, 236, 236)"
                onPress={onPress}>
                <View>
                    <Text style={styles.title}>{reward.JobTitile}</Text>
                    <View style={styles.info}>
                        <Text style={styles.bounty}>赏金：{reward.Bounty} 元</Text>
                        <Text>郑州/互联网</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.text, styles.divider]}>
                            <Text style={styles.center}>{reward.DateTime}</Text>
                        </View>
                        <View style={[styles.text, styles.divider]}>
                            <Text style={styles.center}>{reward.RecommendMemberCount}</Text>
                        </View>
                        <View style={[styles.text, styles.divider]}>
                            <Text style={styles.center}>15天到期</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };

        this.onPress = this.onPress.bind(this);
    }

    componentDidMount() {
        const {dispatch, page} = this.props;
        dispatch(fetchData(page));
    }

    render() {
        /*if (this.props.isFetching) {
            return this.renderLoadingView();
        }*/
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                  title="悬赏"
                  titleColor="#000000"
                  actions={[{title: '搜索', icon: require('./img/search_black.png'), show: 'always'}]}
                  style={{height:56,backgroundColor:'#ffffff'}}
                >
                </ToolbarAndroid>
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource.cloneWithRows(this.props.rewards)}
                    renderRow={this.renderRow.bind(this)}
                    renderSeparator={this.renderSeparator }
                    renderFooter={this.renderFooter.bind(this)}
                    onEndReached={this.onEndReached.bind(this)}
                    initialListSize={5}
                    onEndReachedThreshold={1}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.isRefresh}
                            onRefresh={this.onRefresh.bind(this)}
                            colors={['#ff0000', '#00ff00', '#0000ff','#3ad564']}
                            progressBackgroundColor="#ffffff"/>
                    }
                />
            </View>
        );
    }

    renderRow(reward) {
        return (
            <List reward={reward} onPress={this.onPress} />
        );
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        var style = styles.rowSeparator;
        if (adjacentRowHighlighted) {
            style = [style, styles.rowSeparatorHide];
        }
        return (
            <View key={'SEP_' + sectionID + '_' + rowID} style={style}/>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ProgressBar />
            </View>
        );
    }

    renderFooter() {
        if(this.props.isFinished){
            return (
                <View style={styles.progress}>
                    <Text style={{color: 'rgba(0, 0, 0, 0.3)'}}>数据已结加载完了- -|||</Text>
                </View>
            );
        }else{
            return (
                <View style={styles.progress}>
                    <ProgressBar />
                </View>
            );
        }
    }

    onEndReached() {
        const {dispatch, page, isFetching, isFinished} = this.props;
        if(!isFetching && !isFinished){
            dispatch(fetchData(page));
        }
    }

    onRefresh() {
        const {dispatch} = this.props;
        dispatch(refreshData(1));
    }

    onPress() {
        this.props.navigator.push({ reward: true })
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    cell: {
        marginTop: 10,
        backgroundColor: '#fff'
    },
    info: {
        flexDirection: 'row',
        margin: 10
    },
    bounty: {
        marginRight: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopColor: '#ddd',
        borderTopWidth: StyleSheet.hairlineWidth,
        paddingTop: 10,
        paddingBottom: 10
    },
    text: {
        flex: 1,
        justifyContent: 'center'
    },
    divider: {
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: '#ddd'
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 10,
        color: '#333'
    },
    subtitle: {
        fontSize: 10
    },
    center: {
        textAlign: 'center',
        fontSize: 12
    },
    progress: {
        marginVertical: 20,
        paddingBottom: 20,
        alignSelf: 'center'
    },
    rowSeparator: {

    },
    rowSeparatorHide: {
        opacity: 0.0
    }
});

export default Home;