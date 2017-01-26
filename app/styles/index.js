import {
    StyleSheet
} from 'react-native';
import colors from './colors'


const appStyles = StyleSheet.create({

    errorLabel: {
        textAlign: 'center',
        color: 'red',
        marginLeft: 10,
        marginRight: 10,
        //marginTop: 10,
        //marginBottom: 10,
        //minHeight: 20,
        fontSize: 14
    },
    titleLabel: {
        textAlign: 'center',
        fontSize: 35,
        color: colors.darkBackground,
        marginLeft:10,
        marginRight: 10,
        marginTop: 10
    },
    bigButton: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 5,
      marginBottom: 5,
      minHeight: 30
    },
    bigButtonText: {
      fontSize: 20
    }
});

export default appStyles;
