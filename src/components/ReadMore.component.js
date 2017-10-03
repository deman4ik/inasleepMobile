import React from "react";
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from "react-native";
import { textStyles } from "../styles";
import { colors } from "../config";
import PropTypes from "prop-types";
import { LinearGradient } from "expo";
const window = Dimensions.get("window");
const styles = StyleSheet.create({
	text: {
		paddingTop: 15,
		color: colors.primaryDark,
		paddingHorizontal: 10
	},
	button: {
		width: window.width,
		alignItems: "center",
		backgroundColor: colors.white
	},
	buttonText: {
		color: colors.black,

		fontSize: 14
	}
});

export class ReadMore extends React.Component {
	state = {
		measured: false,
		shouldShowReadMore: false,
		showAllText: false
	};

	async componentDidMount() {
		await nextFrameAsync();

		// Get the height of the text with no restriction on number of lines
		const fullHeight = await measureHeightAsync(this._text);
		this.setState({ measured: true });
		await nextFrameAsync();

		// Get the height of the text now that number of lines has been set
		const limitedHeight = await measureHeightAsync(this._text);

		if (fullHeight > limitedHeight) {
			this.setState({ shouldShowReadMore: true }, () => {
				this.props.onReady && this.props.onReady();
			});
		}
	}

	render() {
		let { measured, showAllText } = this.state;

		let { numberOfLines } = this.props;

		return (
			<View>
				<Text
					numberOfLines={measured && !showAllText ? numberOfLines : 0}
					ref={text => {
						this._text = text;
					}}
					style={[textStyles.text, styles.text]}
				>
					{this.props.children}
				</Text>
				<View
					style={{
						alignItems: "stretch"
					}}
				>
					{this._maybeRenderReadMore()}
				</View>
			</View>
		);
	}

	_handlePressReadMore = () => {
		this.setState({ showAllText: true });
	};

	_handlePressReadLess = () => {
		this.setState({ showAllText: false });
	};

	_maybeRenderReadMore() {
		let { shouldShowReadMore, showAllText } = this.state;

		if (shouldShowReadMore && !showAllText) {
			if (this.props.renderTruncatedFooter) {
				return this.props.renderTruncatedFooter(this._handlePressReadMore);
			}

			return (
				<View
					style={{
						top: -40,
						alignItems: "stretch"
					}}
				>
					<LinearGradient
						colors={["rgba(255,255,255,0.2)", "white"]}
						style={{
							height: 30
						}}
					/>
					<TouchableHighlight
						style={styles.button}
						underlayColor={colors.white}
						onPress={this._handlePressReadMore}
					>
						<Text style={[styles.buttonText, textStyles.text]}>SHOW MORE</Text>
					</TouchableHighlight>
				</View>
			);
		} else if (shouldShowReadMore && showAllText && this.props.showHide) {
			if (this.props.renderRevealedFooter) {
				return this.props.renderRevealedFooter(this._handlePressReadLess);
			}

			return (
				<Text style={styles.button} onPress={this._handlePressReadLess}>
					Hide
				</Text>
			);
		}
	}
}

ReadMore.defaultProps = {
	showHide: true
};

function measureHeightAsync(component) {
	return new Promise(resolve => {
		component.measure((x, y, w, h) => {
			resolve(h);
		});
	});
}

function nextFrameAsync() {
	return new Promise(resolve => requestAnimationFrame(() => resolve()));
}
