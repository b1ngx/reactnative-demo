'use strict';

import React, {
    Component,
} from 'react';
import {
    DrawerLayoutAndroid,
    ProgressBarAndroid,
    Text,
} from 'react-native';

export default class Mine extends Component {
    render() {
        return (
            <DrawerLayoutAndroid
                renderNavigationView={() => <Text>React Native</Text>}>
                <ProgressBarAndroid />
            </DrawerLayoutAndroid>
        );
    }
}