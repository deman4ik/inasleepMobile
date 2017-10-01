// @flow
import React from "react";

import { Dimensions, TouchableHighlight } from "react-native";
import {
	View,
	Image,
	Tile,
	Overlay,
	Title,
	Subtitle,
	Heading,
	Text,
	Caption,
	Button,
	Icon,
	Divider
} from "@shoutem/ui";
import { getSizeRelativeToReference } from "@shoutem/theme";
const window = Dimensions.get("window");
function dimensionRelativeToIphone(dimension, actualRefVal = window.width) {
	// 375 is iPhone width
	return getSizeRelativeToReference(dimension, 375, actualRefVal);
}

export const DreamCard = props => {
	const { dream, onPress } = props;
	return (
		<TouchableHighlight
			style={{
				borderColor: "transparent",
				borderRadius: 15,
				width: window.width - 20,
				marginHorizontal: 10,
				marginTop: 3,
				marginBottom: 27
			}}
			onPress={() => onPress(dream)}
		>
			<Image
				styleName="large"
				source={{
					uri: dream.image
				}}
				style={{
					borderColor: "transparent",
					borderRadius: 15,
					width: window.width - 20
				}}
			>
				<Tile style={{ position: "relative" }}>
					<View>
						<Title style={{ color: "white" }} styleName="lg-gutter-top md-gutter-bottom h-center">
							{dream.title}
						</Title>
						<View
							styleName="horizontal v-center space-between md-gutter-bottom"
							style={{ paddingHorizontal: 15 }}
						>
							<Button styleName="clear">
								<Image
									source={{
										uri: dream.avatar
									}}
									style={{
										marginRight: 10,
										borderColor: "white",
										borderWidth: 0.5,
										borderRadius: dimensionRelativeToIphone(35) / 2,
										resizeMode: "cover",
										width: dimensionRelativeToIphone(35),
										height: dimensionRelativeToIphone(35)
									}}
								/>

								<Text style={{ color: "white" }}>{dream.author}</Text>
							</Button>
							<View styleName="vertical h-end">
								<Button styleName="clear">
									<Caption style={{ color: "white" }}>{dream.date}</Caption>
								</Button>
								<Button styleName="clear">
									<Caption style={{ color: "white" }}>{dream.location}</Caption>
								</Button>
							</View>
						</View>
						<View
							styleName="horizontal "
							style={{
								alignSelf: "flex-end"
							}}
						>
							<Button styleName="stacked clear">
								<Icon name="like" style={{ color: "white" }} />
								<Text style={{ color: "white" }}>{dream.likesCount}</Text>
							</Button>
							<Button styleName="stacked clear">
								<Icon name="comment" style={{ color: "white" }} />
								<Text style={{ color: "white" }}>{dream.commentsCount}</Text>
							</Button>
							<Button styleName="stacked clear">
								<Icon name="about" style={{ color: "white" }} />
								<Text style={{ color: "white" }}>{dream.interpetsCount}</Text>
							</Button>
						</View>
					</View>
					<View styleName="actions">
						<Button styleName="tight clear">
							<Icon name="more-horizontal" style={{ color: "white" }} />
						</Button>
					</View>
				</Tile>
			</Image>
		</TouchableHighlight>
	);
};
