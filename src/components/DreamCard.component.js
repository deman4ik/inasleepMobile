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
	const { id, author, avatar, image, title, date, likesCount, commentsCount, interpetsCount, onPress } = props;
	return (
		<TouchableHighlight onPress={() => onPress(id)}>
			<Image
				styleName="large"
				source={{
					uri: image
				}}
				style={{
					borderColor: "transparent",
					borderRadius: 15,
					marginHorizontal: 10,
					marginVertical: 3,
					width: window.width - 20
				}}
			>
				<Tile style={{ position: "relative" }}>
					<View>
						<Title style={{ color: "white" }} styleName="lg-gutter-top md-gutter-bottom h-center">
							{title}
						</Title>
						<View
							styleName="horizontal v-center space-between md-gutter-bottom"
							style={{ paddingHorizontal: 15 }}
						>
							<Button styleName="clear">
								<Image
									styleName="small-avatar"
									source={{
										uri: avatar
									}}
									style={{ marginRight: 10 }}
								/>

								<Text style={{ color: "white" }}>{author}</Text>
							</Button>
							<View styleName="vertical h-end">
								<Button styleName="clear">
									<Caption style={{ color: "white" }}>{date}</Caption>
								</Button>
								<Button styleName="clear">
									<Caption style={{ color: "white" }}>Москва, Россия</Caption>
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
								<Text style={{ color: "white" }}>{likesCount}</Text>
							</Button>
							<Button styleName="stacked clear">
								<Icon name="comment" style={{ color: "white" }} />
								<Text style={{ color: "white" }}>{commentsCount}</Text>
							</Button>
							<Button styleName="stacked clear">
								<Icon name="about" style={{ color: "white" }} />
								<Text style={{ color: "white" }}>{interpetsCount}</Text>
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
