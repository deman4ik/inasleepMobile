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
	const { id, author, avatar, image, title, likesCount, commentsCount } = props;
	return (
		<Image
			styleName="large"
			source={{
				uri: image
			}}
		>
			<Tile styleName="content">
				<View styleName="actions">
					<Button styleName="tight clear">
						<Icon name="more-horizontal" style={{ color: "white" }} />
					</Button>
				</View>
				<Title styleName="sm-gutter-bottom">{title}</Title>
				<View styleName="horizontal">
					<View styleName="horizontal h-center v-center space-between">
						<Image
							styleName="small-avatar"
							source={{
								uri: avatar
							}}
						/>
						<Caption style={{ color: "white" }}>{author}</Caption>
					</View>
					<View styleName="horizontal center space-between">
						<Icon name="address" style={{ color: "white", fontSize: 18 }} />
						<Caption style={{ color: "white" }}>Москва, Россия</Caption>
					</View>
				</View>

				<View styleName="horizontal">
					<Button styleName="clear">
						<Icon name="like" style={{ color: "white" }} />
						<Text style={{ color: "white" }}>{likesCount}</Text>
					</Button>
					<Button styleName="clear">
						<Icon name="comment" style={{ color: "white" }} />
						<Text style={{ color: "white" }}>{commentsCount}</Text>
					</Button>
					<Button styleName="clear">
						<Icon name="about" style={{ color: "white" }} />
						<Text style={{ color: "white" }}>3</Text>
					</Button>
				</View>
			</Tile>
		</Image>
	);
};

export default DreamCard;