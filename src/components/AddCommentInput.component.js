// @flow
import React, { Component } from "react";
import { StyleSheet, Dimensions, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Footer, LineDivider } from "components";
import { Ionicons } from "@expo/vector-icons";
import { translate, dimensionRelativeToIphone, normalize } from "utils";
import { colors, textStyles } from "styles";
const window = Dimensions.get("window");
const styles = StyleSheet.create({
    avatar: {
        marginHorizontal: 15,
        width: dimensionRelativeToIphone(25, window.width),
        height: dimensionRelativeToIphone(25, window.width),
        borderRadius: 12.5,
        borderWidth: 0,
        resizeMode: "cover",
        alignSelf: "center"
    },
    textInput: {
        flex: 1,
        color: colors.greyDarkest,
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    iconContainer: {
        alignSelf: "stretch",
        paddingHorizontal: 15,
        justifyContent: "center"
    },
    icon: {
        color: "#222222",
        textAlign: "center",
        textAlignVertical: "center"
    }
});

export class AddCommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }
    render() {
        const { avatar, placeholder, onSend, dreamId } = this.props;
        return (
            <KeyboardAvoidingView behavior={"position"}>
                <LineDivider />
                <Footer>
                    <Image style={styles.avatar} source={{ uri: avatar }} />

                    <TextInput
                        placeholder={placeholder}
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                        multiline={true}
                        style={[textStyles.text, styles.textInput]}
                        selectionColor={colors.greyDarkest}
                        placeholderTextColor={colors.greyDarkestOp}
                        underlineColorAndroid={"transparent"}
                    />
                    <TouchableOpacity style={styles.iconContainer} onPress={onSend(dreamId, this.state.text)}>
                        <Ionicons size={normalize(22)} name={"ios-paper-plane-outline"} style={styles.icon} />
                    </TouchableOpacity>
                </Footer>
            </KeyboardAvoidingView>
        );
    }
}
