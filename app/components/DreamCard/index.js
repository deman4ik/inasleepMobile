// @flow
import React from "react";
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

const DreamCard = props => {
	const { id, author, image, title, likesCount, commentsCount } = props;
	return (
		<Image styleName="large-banner" source={{ uri: image }}>
			<Tile style={{ flex: 1, justifyContent: "flex-end" }}>
				<Subtitle styleName="md-gutter-top">{title}</Subtitle>
				<Caption styleName="full-width" style={{ color: "white" }}>
					{author}
				</Caption>
				<View styleName="horizontal h-start">
					<Icon name="address" styleName="full-width" style={{ color: "white", fontSize: 18 }} />
					<Caption styleName="full-width" style={{ color: "white" }}>
						Moscow, Russia
					</Caption>
				</View>
				<View styleName="horizontal h-start">
					<Button styleName="full-width clear">
						<Icon name="like" style={{ color: "white" }} />
						<Text style={{ color: "white" }}>{likesCount}</Text>
					</Button>
					<Button styleName="full-width clear">
						<Icon name="comment" style={{ color: "white" }} />
						<Text style={{ color: "white" }}>{commentsCount}</Text>
					</Button>
					<Button styleName="full-width clear">
						<Icon name="about" style={{ color: "white" }} />
						<Text style={{ color: "white" }}>2</Text>
					</Button>
				</View>
			</Tile>
		</Image>
	);
};

export default DreamCard;
