import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Dimensions, TouchableOpacity, Text, ScrollView, View } from "react-native";
import { Icon } from "components";
import { normalize } from "utils";
import { textStyles, colors } from "styles";
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 0,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        height: 65
    },
    icon: {
        color: "#222222",
        textAlign: "center",
        textAlignVertical: "center",
        marginRight: 15
    },
    rightIcon: {
        color: "#222222",
        textAlign: "center",
        textAlignVertical: "center",
        opacity: 0.5
    },
    tagTextContainer: {
        flex: 1,
        flexDirection: "row"
    },
    tagText: {
        paddingVertical: 5,
        marginRight: 10,
        backgroundColor: "#F2F2F2",
        color: "black",
        paddingHorizontal: 5
    },
    text: {
        color: "#666666",
        flex: 1
    }
});
export const TagsRow = props => {
    const { icon, iconRight, tags, noTagsText, onPress, disabled } = props;
    const tagsList = tags.map(tag => (
        <TouchableOpacity key={tag} onPress={onPress} disabled={disabled}>
            <Text style={styles.tagText}>{tag}</Text>
        </TouchableOpacity>
    ));

    return (
        <View style={styles.container}>
            {icon !== null && (
                <Icon set={"MaterialCommunityIcons"} size={normalize(22)} name={icon} style={styles.icon} />
            )}
            {tags.length > 0 ? (
                <ScrollView style={styles.tagTextContainer} horizontal showsHorizontalScrollIndicator={false}>
                    {tagsList}
                </ScrollView>
            ) : (
                <Text style={[textStyles.text, styles.text]}>{noTagsText}</Text>
            )}
            {iconRight !== null && (
                <Icon set={"Ionicons"} size={normalize(20)} name={iconRight} style={styles.rightIcon} />
            )}
        </View>
    );
};

TagsRow.defaultProps = {
    icon: null,
    iconRight: null,
    tags: null,
    disabled: false,
    onPress: null
};

TagsRow.propTypes = {
    icon: PropTypes.string,
    iconRight: PropTypes.string,
    tags: PropTypes.array,
    disabled: PropTypes.bool,
    onPress: PropTypes.func
};
