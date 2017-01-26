import React from 'react';
import { Text } from 'react-native'

const Label = (props) => {
  const { text, style } = props;
  return ( <Text {...props}>{text}</Text>);
}

export default Label;
