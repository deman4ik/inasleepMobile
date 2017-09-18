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
	const { id, author, avatar, image, title, date, likesCount, commentsCount, interpetsCount } = props;
	return (
		<Image
			styleName="large"
			source={{
				uri: image
			}}
			style={{ borderColor: "transparent", borderRadius: 15, marginBottom: 10 }}
		>
			<Tile>
				<View styleName="actions">
					<Button styleName="tight clear">
						<Icon name="more-horizontal" style={{ color: "white" }} />
					</Button>
				</View>
				<View styleName="content">
					<Title style={{ color: "white" }} styleName="sm-gutter-bottom h-center">
						{title}
					</Title>
					<View styleName="horizontal v-center space-between">
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
				</View>
				<View
					styleName="horizontal"
					style={{
						position: "absolute",
						bottom: 15
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
			</Tile>
		</Image>
	);
};

export default DreamCard;
