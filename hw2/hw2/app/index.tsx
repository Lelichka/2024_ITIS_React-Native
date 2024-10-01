import {Image, ScrollView, Text, View, StyleSheet, SafeAreaView} from "react-native";
import React from "react";
import {Divider} from '@rneui/themed';

export default function Index() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainScrollView}>
            <Text style={styles.title}>Basic React Native widgets</Text>
            <View style={styles.listSection}>
                <Text style={styles.header}>Text List</Text>
                <View>
                    <View style={styles.listItem}>
                        <Text style={styles.listTextItem}
                              numberOfLines={1}>{"Text 1"}</Text>
                    </View>
                    <View style={styles.listItem}>
                        <Text style={styles.listTextItem}
                              numberOfLines={1}>{"Text 2"}</Text>
                    </View>
                    <View style={styles.listItem}>
                        <Text style={styles.listTextItem}
                              numberOfLines={1}>{"Text 3"}</Text>
                    </View>
                    <View style={styles.listItem}>
                        <Text style={styles.listTextItem}
                              numberOfLines={1}>{"Text 4"}</Text>
                    </View>
                    <View style={styles.listItem}>
                        <Text style={styles.listTextItem}
                              numberOfLines={1}
                              ellipsizeMode={"head"}>{"Very very long text that does not fit on one line"}</Text>
                    </View>
                </View>
            </View>

            <Divider inset={true} color={"#4682B4"} width={2} insetType={"middle"}/>

            <View style={styles.horizontalScrollSection}>
                <Text style={styles.header}>Horizontal Scroll</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.horizontalScrollItem}>
                        <Image style={styles.horizontalScrollImage}
                               source={require('../assets/images/React.webp')}/>
                        <Text style={styles.itemText}>Picture 1</Text>
                    </View>
                    <View style={styles.horizontalScrollItem}>
                        <Image style={styles.horizontalScrollImage}
                               source={require('../assets/images/react-native-logo-square.webp')}/>
                        <Text style={styles.itemText}>Picture 2</Text>
                    </View>
                    <View style={styles.horizontalScrollItem}>
                        <Image style={styles.horizontalScrollImage}
                               source={require('../assets/images/partial-react-logo.png')}/>
                        <Text style={styles.itemText}>Picture 3</Text>
                    </View>
                </ScrollView>
            </View>

            <Divider inset={true} color={"#4682B4"} width={2} insetType={"middle"}/>

            <View style={styles.verticalScrollSection}>
                <Text style={styles.header}>Vertical Scroll</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.verticalScrollItem}>
                        <Image style={styles.verticalScrollImage} source={require('../assets/images/React.webp')}/>
                        <Text style={styles.itemText}>Picture 1</Text>
                    </View>
                    <View style={styles.verticalScrollItem}>
                        <Image style={styles.verticalScrollImage}
                               source={require('../assets/images/react-native-logo-square.webp')}/>
                        <Text style={styles.itemText}>Picture 2</Text>
                    </View>
                    <View style={styles.verticalScrollItem}>
                        <Image style={styles.verticalScrollImage}
                               source={require('../assets/images/partial-react-logo.png')}/>
                        <Text style={styles.itemText}>Picture 3</Text>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
        mainScrollView: {
            paddingHorizontal: 15,
        },
        title: {
            fontSize: 28,
            fontWeight: "800",
            marginVertical: 10,
            alignSelf: 'center',
        },
        listSection: {marginTop: 5, marginBottom: 20},
        header: {
            fontSize: 20,
            fontWeight: '700',
            fontStyle: 'italic',
            paddingVertical: 15,
            paddingHorizontal: 10
        },
        listItem: {
            paddingBottom: 3,
            paddingTop: 10,
            paddingHorizontal: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#8888'
        },
        listTextItem: {
            lineHeight: 24,
            fontSize: 18,
        },
        horizontalScrollSection: {height: '25%', marginTop: 5, marginBottom: 20},
        horizontalScrollItem: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginRight: 10,
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: '#F0FFFF'
        },
        horizontalScrollImage: {
            width: 150,
            height: 150,
            resizeMode: "cover",
            marginBottom: 15,
        },
        itemText: {
            fontSize: 18,
            fontWeight: '600',
        },
        verticalScrollSection: {height: '35%', marginVertical: 5},
        verticalScrollImage: {
            width: 100,
            height: 100,
            resizeMode: "contain",
        },
        verticalScrollItem: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: 5,
            marginBottom: 10,
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: '#F0F8FF'
        },
    },
);
