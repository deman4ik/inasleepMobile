import React, { Component } from "react";
import { View, Text, Image, Dimensions, StyleSheet, Platform, TouchableOpacity } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";

import { Ionicons } from "@expo/vector-icons";

import { colors, normalize } from "../config";

const STICKY_HEADER_HEIGHT = 62;

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
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    backgroundColor: colors.primaryDark,
    width: window.width,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  stickySectionText: {
    color: colors.white,
    fontFamily: "Rubik-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: normalize(16),
    margin: 10
  },
  fixedSectionLeft: {
    position: "absolute",
    bottom: 0,
    left: 10
  },
  fixedSectionRight: {
    position: "absolute",
    bottom: 0,
    right: 10
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
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        parallaxHeaderHeight={this.state.parallaxHeaderHeight}
        backgroundSpeed={10}
        renderBackground={() => <View key="background">{renderBackgroundImage(backgroundImage)}</View>}
        renderForeground={renderContent}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{stickyTitle}</Text>
          </View>
        )}
        renderFixedHeader={() => (
          <View key="fixed-header">
            {navigateBack && (
              <View style={styles.fixedSectionLeft}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="ios-arrow-back"
                    size={normalize(30)}
                    color={colors.white}
                    underlayColor="transparent"
                  />
                </TouchableOpacity>
              </View>
            )}

            {showMenu && (
              <View style={styles.fixedSectionRight}>
                <TouchableOpacity onPress={menuAction}>
                  <Ionicons name={menuIcon} size={normalize(30)} color={colors.white} underlayColor="transparent" />
                </TouchableOpacity>
              </View>
            )}
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
