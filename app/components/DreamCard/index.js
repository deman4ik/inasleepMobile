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
				<View styleName="horizontal v-center space-between">
					<Button styleName="full-screen clear">

						<Image
							styleName="small-avatar"
							source={{
								uri: avatar
							}}
							style={{marginRight: 10}}
						/>

						<Caption style={{ color: "#cccccc" }}>{author}</Caption>
					</Button>
					<Button styleName="full-screen clear h-center ">
						<Icon name="address" style={{ color: "white", fontSize: 18 }} />
						<Caption style={{ color: "#cccccc" }}>Москва, Россия</Caption>
					</Button>
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
