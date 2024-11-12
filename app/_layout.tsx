import IcHome from "@/assets/icons/IcHome";
import IcReceiving24 from "@/assets/icons/IcReceiving24";
import IcSend24 from "@/assets/icons/IcSend24";
import { Tabs } from "expo-router";
import React from "react";

const RootLayout = () => {
    return (
        <Tabs screenOptions={{
            headerTintColor: "#EE4756",
            headerTitleAlign: "center",
        }}>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({ color, focused }) => (
                    <IcHome fill={color} height={20} width={20} />
                )
            }} />
            <Tabs.Screen name="receive" options={{
                title: "Receive",
                tabBarIcon: ({ color, focused }) => (
                    <IcReceiving24 fill={color} style={{ height: 32, width: 32 }} />
                )
            }} />
            <Tabs.Screen name="send" options={{
                title: "Send",
                tabBarIcon: ({ color, focused }) => (
                    <IcSend24 fill={color} style={{ height: 32, width: 32 }} />
                )
            }} />
        </Tabs>
    );
}

export default RootLayout;