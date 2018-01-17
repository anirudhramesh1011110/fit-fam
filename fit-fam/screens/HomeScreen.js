import React from 'react';

import { connect } from 'react-redux';

import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';

class HomeScreen extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <Text>
                    Home Screen
                    {`Welcome ${this.props.username}`}
                </Text>
            </View>
            
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'rgba(55, 55, 55, 0.7)',
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '60%',
        
    },
});

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.username
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);