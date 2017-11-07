// @flow
import React, { Component } from "react";
import { StyleSheet, Button, View } from "react-native";
import {
    ParallaxScroll,
    ViewContainer,
    DreamHeader,
    ReadMore,
    Divider,
    LineDivider,
    IconTextRow,
    TagsRow,
    Comment,
    ShowMoreContentRow
} from "../../components";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { translate } from "../../utils";
import { colors } from "../../config";
import { textStyles } from "../../styles";
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.greyLight,
        justifyContent: "flex-start"
    },
    textContainer: {
        backgroundColor: colors.white
    },
    detailContainer: {
        backgroundColor: colors.white
    }
});
export default class DreamPage extends Component {
    render() {
        const { dream } = this.props.navigation.state.params;
        const { auth, navigation } = this.props;
        const { language } = auth;
        return (
            <ViewContainer barColor={"light"}>
                <ParallaxScroll
                    renderContent={() => <DreamHeader dream={dream} />}
                    backgroundImage={dream.image}
                    stickyTitle={dream.title}
                    navigateBack
                    navigation={navigation}
                    showMenu
                >
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <ReadMore numberOfLines={5} showHide={false}>
                                {dream.text}
                            </ReadMore>
                        </View>
                        <Divider textLeft="ДЕТАЛИ" />

                        <View style={styles.detailContainer}>
                            <TagsRow
                                icon="puzzle"
                                tags={["Лошадь", "Дерево", "Летать", "Кровать", "Облака"]}
                                noTagsText="Нет ключевых слов"
                            />
                            <LineDivider />
                            <IconTextRow
                                icon="ios-information-circle"
                                text={`${dream.interpetsCount} интерпретации`}
                                iconRight="ios-arrow-forward-outline"
                                onPress={() => {
                                    return null;
                                }}
                            />
                            <LineDivider />
                            <TagsRow icon="account-star" tags={[]} noTagsText="Никто не приснился" />
                            <LineDivider />
                            <IconTextRow icon="ios-people" text="Виден всем" disabled />
                            <LineDivider />
                            <IconTextRow icon="ios-globe-outline" text={dream.location} disabled />
                        </View>

                        <Divider textLeft="КОММЕНТАРИИ" />
                        <View style={styles.detailContainer}>
                            <Comment
                                avatar="https://shoutem.github.io/img/ui-toolkit/examples/image-11.png"
                                author="Dustin"
                                date="20 минут назад"
                                text={
                                    "Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh High."
                                }
                                onAuthorPress={() => {
                                    return null;
                                }}
                            />
                            <LineDivider />
                            <Comment
                                avatar="https://shoutem.github.io/img/ui-toolkit/examples/image-12.png"
                                author="Malone"
                                date="30 минут назад"
                                text={
                                    "Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh High."
                                }
                                onAuthorPress={() => {
                                    return null;
                                }}
                            />
                            <LineDivider />
                            <Comment
                                avatar="https://shoutem.github.io/img/ui-toolkit/examples/image-12.png"
                                author="Malone"
                                date="30 минут назад"
                                text={"Тоже самое снилось, к чему бы это?"}
                                onAuthorPress={() => {
                                    return null;
                                }}
                            />

                            <ShowMoreContentRow
                                text="Посмотреть все комментарии"
                                count={7}
                                onPress={() => {
                                    return null;
                                }}
                            />

                            <IconTextRow
                                size={22}
                                icon="ios-chatboxes"
                                text="Добавить комментарий"
                                onPress={() => {
                                    return null;
                                }}
                            />
                        </View>
                    </View>
                </ParallaxScroll>
            </ViewContainer>
        );
    }
}
