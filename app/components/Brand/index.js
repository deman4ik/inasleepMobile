import React from 'react';
import {View, Image, Text} from 'react-native'
import colors from '../../styles/colors'
import appStyles from '../../styles'

const Brand = (props) => {
  return(
    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
    {/**  <Image style={{width: 100, height: 100, marginTop:20}}
             source={require('../../../images/icon_colored.png')} />
             */}
             <Text style={appStyles.titleLabel}>Inasleep</Text>
    </View>
  )
}

export default Brand;
