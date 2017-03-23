import React, {Component} from 'react';

import {
    Navigator,
    View
} from 'react-native';

import NavigationBar from "./navigation-bar";
import Vault from "../components/vault";

class Scene extends Component {
    renderScene(route: Object, navigator: Object) {
        const Component = route.component;
        return (
            <View style={{flex: 1}}>
                <NavigationBar
                    backgroundStyle={{backgroundColor: "#fff"}}
                    navigator={navigator}
                    route={route}
                    title={route.title}
                    titleColor="#333"
                />
                <Component
                    navigator={navigator}
                    route={route}
                    {...route.passProps}
                />
            </View>
        );
    }
    render() {
        return (
            <Navigator
                style={{flex: 1}}
                renderScene={this.renderScene}
                initialRoute={{
                    component: Vault,
                    title: "收入"
                }}
            />
        );
    }
}

export default Scene;