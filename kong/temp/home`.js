'use strict';

import React, {
	Component,
} from 'react';

import {
	StyleSheet,
    ScrollView,
	Text,
	View,
	Image,
    TouchableOpacity
} from 'react-native';

import ProgressBar from 'ProgressBarAndroid';

var REQUEST_URL = 'http://www.hr72.com/api/rewardhall/getlist';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            isRefreshing: false,
            rowData: Array.from(new Array(20)).map(
                (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
        };
    }

	render() {


        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row} onClick={this._onClick}/>;
        });

		return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffff00"
                    />
                }>
                {rows}
            </ScrollView>
		);
	}

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ProgressBar />
            </View>
        );
    }

    _onClick(row) {
        row.clicks++;
        this.setState({
            rowData: this.state.rowData,
        });
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // prepend 10 items
            const rowData = Array.from(new Array(10))
                .map((val, i) => ({
                    text: 'Loaded row ' + (+this.state.loaded + i),
                    clicks: 0,
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 10,
                isRefreshing: false,
                rowData: rowData,
            });
        }, 5000);
    }

    renderMovie(reward) {
        return (
            <TouchableWithoutFeedback onPress={this._onClick} >
                <View style={styles.row}>
                    <Text style={styles.text}>
                        {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    listView: {},
    cell: { backgroundColor: '#fff', marginBottom: 10},
    info: { flexDirection: 'row', margin: 10},
    bounty: {marginRight: 30},
	row: { flexDirection: 'row',  justifyContent: 'center', borderTopColor: '#ddd', borderTopWidth: 0.5,paddingTop:10, paddingBottom: 10 },
	text: { flex: 1, justifyContent: 'center'},
    divider: { borderRightWidth: 0.5, borderRightColor: '#ddd' },
	title: { fontSize: 18, marginTop: 10 , marginLeft: 10, color: '#333'},
	subtitle: { fontSize: 10 },
    center: {textAlign: 'center', fontSize: 12 }
});
