import React, { Component } from "react";
import { View, Text, Image, Dimensions, StyleSheet, Platform, TouchableOpacity } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { HeaderLeft, HeaderRight, HeaderTitle } from "components";
import { HEADER_HEIGHT } from "constants";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "styles";
import { normalize } from "utils";

type Props = {
  backgroundImage: string,
  renderContent: any,
  stickyTitle: string,
  navigateBack?: boolean,
  showMenu?: boolean,
  menuAction?: Function,
  menuIcon?: string,
  navigation: Object,
  children?: React.Element<*>,
  refreshControl?: React.Element<*>
};

type State = {
  parallaxHeaderHeight: number
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    width: window.width,
    backgroundColor: colors.primaryDark
  },
  backgroundImage: {
    width: window.width
  },
  backgroundImageOverlay: {
    width: window.width,
    backgroundColor: colors.darkOverlay
  }
});

export class ParallaxScroll extends Component {
  props: Props;

  state: State;

  constructor() {
    super();
    this.state = {
      parallaxHeaderHeight: this.getParallaxHeaderHeight()
    };
  }

  componentDidMount() {
    Dimensions.addEventListener("change", this.dimensionsDidChange);
  }

  getParallaxHeaderHeight = (window = Dimensions.get("window")) => {
    let devider = 2;

    if (window.width > window.height) {
      devider = Platform.OS === "ios" ? 1.2 : 1.4;
    }

    return window.height / devider;
  };

  dimensionsDidChange = ({ window }) => {
    this.setState({
      parallaxHeaderHeight: this.getParallaxHeaderHeight(window)
    });
  };

  render() {
    const {
      backgroundImage,
      renderContent,
      stickyTitle,
      navigateBack,
      showMenu,
      menuIcon,
      menuAction,
      navigation,
      children,
      refreshControl
    } = this.props;

    const renderBackgroundImage = backgroundImage => {
      if (backgroundImage !== null) {
        return (
          <Image
            source={{
              uri: backgroundImage
            }}
            style={[styles.backgroundImage, { height: this.state.parallaxHeaderHeight }]}
          >
            <View style={[styles.backgroundImageOverlay, { height: this.state.parallaxHeaderHeight }]} />
          </Image>
        );
      } else {
        return <View style={[styles.background, { height: this.state.parallaxHeaderHeight }]} />;
      }
    };

    return (
      <ParallaxScrollView
        backgroundColor={colors.transparent}
        stickyHeaderHeight={HEADER_HEIGHT}
        parallaxHeaderHeight={this.state.parallaxHeaderHeight}
        backgroundSpeed={10}
        renderBackground={() => <View key="background">{renderBackgroundImage(backgroundImage)}</View>}
        renderForeground={renderContent}
        renderStickyHeader={() => <HeaderTitle key="sticky-header" text={stickyTitle} />}
        renderFixedHeader={() => (
          <View key="fixed-header">
            {navigateBack && <HeaderLeft icon="ios-arrow-back" onPress={() => navigation.goBack()} />}

            {showMenu && <HeaderRight icon={menuIcon} onPress={menuAction} />}
          </View>
        )}
        refreshControl={refreshControl}
      >
        {children}
      </ParallaxScrollView>
    );
  }
}

ParallaxScroll.defaultProps = {
  navigateBack: false,
  showMenu: false,
  menuIcon: "ios-more",
  menuAction: undefined,
  children: null,
  refreshControl: null,
  backgroundImage: null
};
