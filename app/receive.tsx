import EmptySendingActive from "@/assets/icons/EmptySendingActive";
import { Tabs } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

interface DeliveryListProps {
    deliveries: Delivery[];
}

const DeliveryList = ({ deliveries }: DeliveryListProps) => {
    return (
        <View style={{ flex: 1 }}>

            <FlatList
                data={deliveries}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: "row", padding: 20, borderBottomWidth: 1, borderBottomColor: "#1F1F21" }}>
                        <EmptySendingActive width={48} height={48} />
                        <View style={{ flex: 1, paddingLeft: 20 }}>
                            <Text style={{ color: "#EE4756" }}>{item.ontvanger}</Text>
                            <Text style={{ color: "#EE4756" }}>{item.adres}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id} />
        </View>
    )
}



const Receive = () => {

    const [data, setData] = useState<DeliveryData>({
        actief: [],
        geschiedenis: [],
    });
    const [tab, setTab] = useState<"actief" | "geschiedenis">("actief");

    const loadData = async () => {
        const response = await fetch("https://sampleapis.assimilate.be/bpost/ontvangen");
        const data: DeliveryData = await response.json();
        setData(data);
    }

    useEffect(() => {
        loadData();
    }, []);

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
            }} />

            <View style={{ flexDirection: "row" }}>
                <Pressable onPress={() => setTab("actief")} style={{ flexDirection: "column", flex: 1, justifyContent: "center", alignItems: "stretch", height: 50, backgroundColor: "#272B2C" }}>
                    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                        <Text style={{ color: "#EE4756" }}>Active</Text>
                    </View>
                    {tab === "actief" && <View style={{ backgroundColor: "#EE4756", height: 5 }} />}
                </Pressable>
                <Pressable onPress={() => setTab("geschiedenis")} style={{ flexDirection: "column", flex: 1, justifyContent: "center", alignItems: "stretch", height: 50, backgroundColor: "#272B2C" }}>
                    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                        <Text style={{ color: "#EE4756" }}>History</Text>
                    </View>
                    {tab === "geschiedenis" && <View style={{ backgroundColor: "#EE4756", height: 5 }} />}
                </Pressable>
            </View>

            <View style={{ flex: 1 }}>

                {tab === "actief" && <DeliveryList deliveries={data.actief} />}
                {tab === "geschiedenis" && <DeliveryList deliveries={data.geschiedenis} />}

            </View>

            <View style={{ backgroundColor: "#272B2C", height: 50, justifyContent: "center", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#1F1F21" }}>
                <Text style={{ color: "#EE4756" }}>Zending toevoegen of scannen</Text>
            </View>
        </View>
    );
}

export default Receive;