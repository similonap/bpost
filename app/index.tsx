import { Tabs } from "expo-router";
import { Text, View, Image } from "react-native";
import "./global.css"
import React from "react";
import IcPersonalImage from "../assets/icons/IcPersonalInfo";
import BpostLogo from "../assets/icons/BpostLogo";
import IcCallCenter from "../assets/icons/IcCallCenter";
import IcSend24 from "@/assets/icons/IcSend24";
import IcScanColored from "@/assets/icons/IcScancolored";

const Index = () => {
    return (
        <View
            style={{
                backgroundColor: "black",
                flex: 1,
                justifyContent: "center",
                alignItems: "stretch",
            }}
        >
            <Tabs.Screen options={{
                tabBarStyle: {
                    backgroundColor: "#272B2C",
                    borderWidth: 0,
                },
                tabBarLabelPosition: "below-icon",
                tabBarActiveTintColor: "#EE4756",
                tabBarInactiveTintColor: "#9B9B9D",
                headerStyle: {
                    backgroundColor: "#272B2C",
                    borderWidth: 0,
                },
                headerLeft: () => (
                    <IcPersonalImage fill="#EE4756" style={{ position: "absolute", left: 0, marginLeft: 20 }} />
                ),
                headerRight: () => (
                    <IcCallCenter fill="#EE4756" style={{ position: "absolute", right: 0, marginRight: 20 }} />
                ),
                headerTitle: () => (
                    <BpostLogo style={{ alignSelf: "center" }} />
                ),

            }} />


            <View style={{ flex: 1, padding: 20, alignItems: "stretch", justifyContent: "flex-start" }}>
                <Text style={{ fontSize: 20, color: "#CCCCCC" }}>👋 Dag Sam</Text>


                <View style={{ marginTop: 20, gap: 10, flex: 1, flexDirection: "row" }}>
                    <View style={{ backgroundColor: "#101415", height: 200, width: 200, justifyContent: "center", alignItems: "center" }}>
                        <IcSend24 width={64} height={64} />
                    </View>
                    <View style={{ backgroundColor: "#101415", height: 200, width: 200, justifyContent: "center", alignItems: "center" }}>
                        <IcScanColored width={64} height={64} />
                    </View>

                </View>
            </View>
        </View>
    );
}

export default Index;