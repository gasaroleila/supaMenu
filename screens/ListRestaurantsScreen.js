import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, Text, FlatList} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RestaurantItem from "../components/Restaurant";


const ListRestaurantsScreen = ({ navigation }) => {

    const restaurantData = [
        {
            id: 1,
            title: 'Restaurant 1',
            description: 'Welcome to Restaurant 1',
            image: require('../assets/beach.jpg'),
        },
        {
            id: 2,
            title: 'Restaurant 2',
            description: 'Welcome to Restaurant 2',
            image: require('../assets/forest.jpg'),
        },
        {
            id: 3,
            title: 'Restaurant 3',
            description: 'Welcome to Restaurant 3',
            image: require('../assets/mountain.jpg'),
        },
        {
            id: 1,
            title: 'Restaurant 4',
            description: 'Welcome to Restaurant 4',
            image: require('../assets/beach.jpg'),
        },
        {
            id: 2,
            title: 'Restaurant 5',
            description: 'Welcome to Restaurant 5',
            image: require('../assets/forest.jpg'),
        },
        {
            id: 3,
            title: 'Restaurant 6',
            description: 'Welcome to Restaurant 6',
            image: require('../assets/mountain.jpg'),
        },
        {
            id: 2,
            title: 'Restaurant 7',
            description: 'Welcome to Restaurant 7',
            image: require('../assets/forest.jpg'),
        },
        {
            id: 3,
            title: 'Restaurant 8',
            description: 'Welcome to Restaurant 8',
            image: require('../assets/mountain.jpg'),
        },
    ];

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <View style={{flex: 1}}>
            <View style={styles.topNav}>
                {/**Top block */}
                <View style={{marginLeft: 10}}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Ionicons name="chevron-back-outline" size={24} />
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft: 10}}>
                    <Text>Search here...</Text>
                </View>
            </View>

            <Text style={{marginTop: 20, padding:5, marginLeft: 12, color:'#F7941D', fontSize: 12}}>Nearby Restaurant</Text>

            {/* <ScrollView style={styles.scrollview}> */}
                <View style={styles.scrollview}>
                   <FlatList 
                   showsVerticalScrollIndicator={false}
                   data={restaurantData}
                   keyExtractor={(item) => item.id.toString()}
                   renderItem={({item}) => <RestaurantItem restaurant={item} navigation={navigation}/> }
                   />
                </View>
            {/* </ScrollView> */}

            {/* Navigation bar */}
            <View style={styles.bottomNav}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Ionicons name="notifications" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Ionicons name="cart" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Ionicons name="settings" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Ionicons name="alarm" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topNav: {
        backgroundColor: '#F7941D',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center'
    },
    scrollview: {
        flex: 1,
        padding: 16,
        height: '75%',
        // backgroundColor: 'yellow'
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 30,
        paddingVertical: 35,
        height: '15%',
        // position: 'fixed',
        // bottom: 0,
        // backgroundColor: '#F7941D',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowColor: 'gray',
        shadowOffset: {
            width: 1.0,
            height: 1.0
        },
        shadowOpacity: 1.0,
        shadowRadius: 25.0,
        elevation: 10
    },
    content: {
        padding: 20,
    }
})

export default ListRestaurantsScreen;