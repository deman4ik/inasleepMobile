import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Dimensions, View, Image, TouchableOpacity, Text } from "react-native";
import { dimensionRelativeToIphone } from "utils";
import { textStyles, colors } from "styles";
import { LineDivider } from ".";
const window = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 0,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: colors.white,
        padding: 15
    },
    avatarContainer: { alignSelf: "flex-start" },
    avatar: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
        width: dimensionRelativeToIphone(25, window.width),
        height: dimensionRelativeToIphone(25, window.width),
        borderRadius: 12.5,
        borderWidth: 0,
        resizeMode: "cover",
        alignSelf: "flex-start"
    },
    vertical: {
        flex: 1,
        flexDirection: "column",
        marginBottom: -5
    },
    horizontal: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: 5
    },
    author: {
        //maxWidth: window.width / 2
    },
    text: {
        color: colors.greyDarkest,
        lineHeight: 26,
        marginBottom: 5
    }
});

export const Comment = props => {
    const { onAuthorPress, divider } = props;
    const { avatar, author, text, date } = props.comment;
    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.avatarContainer} onPress={onAuthorPress}>
                    <Image style={styles.avatar} source={{ uri: avatar }} />
                </TouchableOpacity>
                <View style={styles.vertical}>
                    <View style={styles.horizontal}>
                        <TouchableOpacity onPress={onAuthorPress}>
                            <Text numberOfLines={1} style={[textStyles.subtitle, styles.author]}>
                                {author}
                            </Text>
                        </TouchableOpacity>
                        <Text style={textStyles.caption}>{date}</Text>
                    </View>
                    <Text style={[textStyles.text, styles.text]}>{text}</Text>
                </View>
            </View>
            {divider && <LineDivider />}
        </View>
    );
};
Comment.defaultProps = {
    divider: true
};
Comment.propTypes = {
    comment: PropTypes.object.isRequired,
    onAuthorPress: PropTypes.func.isRequired,
    divider: PropTypes.bool
};
