/**
 * Created by BinG on 2016/5/28.
 */

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.Content),
                    loaded: true,
                });
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                enableEmptySections={true}
                style={{flex: 1}}
                renderFooter={this._renderFooter}
                onEndReached={this._onEndReached}
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                initialListSize={10}
                onEndReachedThreshold={10}
                pageSize={10}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        colors={['#ff0000', '#00ff00', '#0000ff','#3ad564']}
                        progressBackgroundColor="#ffffff"/>
                    }
            />
        );
    }

    _onRefresh() {
        this.componentWillMount();
    }

    _onEndReached(dispatch, nowRead, category, index){
        this.componentWillMount();
    }

    _renderFooter(isFirstLoaded){
        if(!isFirstLoaded){
            return;
        }

        if (1) {
            return (
                <View style={styles.progress}>
                    <ProgressBarAndroid />
                </View>
            );
        } else {
            return (
                <View style={styles.progress}>
                    <Text style={{color: 'rgba(0, 0, 0, 0.3)'}}>数据已结加载完了- -|||</Text>
                </View>
            );
        }
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ProgressBar />
            </View>
        );
    }

    renderMovie(reward) {
        return (
            <TouchableOpacity>
                <View style={styles.cell}>
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
            </TouchableOpacity>
        );
    }

}