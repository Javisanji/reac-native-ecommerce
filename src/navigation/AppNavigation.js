import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import colors from "../styles/colors";
import AccountStack from "./AccountStack";
import ProductStack from "./ProductStack";
import Favorites from "../screens/Favorites";
import Cart from "../screens/Cart";

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				barStyle={styles.navigation}
				screenOptions={({ route }) => ({
					tabBarIcon: (routeStatus) => {
						return setIcon(route, routeStatus);
					},
				})}
			>
				<Tab.Screen
					name="Home"
					component={ProductStack}
					options={{
						title: "Inicio",
					}}
				/>
				<Tab.Screen
					name="favorites"
					component={Favorites}
					options={{
						title: "Favoritos",
					}}
				/>
				<Tab.Screen
					name="cart"
					component={Cart}
					options={{
						title: "Carrinho",
					}}
				/>
				<Tab.Screen
					name="acount"
					component={AccountStack}
					options={{
						title: "Minha conta",
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

function setIcon(route, routeStatus) {
	let iconName = "";

	switch (route.name) {
		case "Home":
			iconName = "home";
			break;
		case "favorites":
			iconName = "heart";
			break;
		case "cart":
			iconName = "shopping-cart";
			break;
		case "acount":
			iconName = "bars";
			break;
		default:
			break;
	}
	return <AwesomeIcon name={iconName} style={styles.icon} />;
}

const styles = StyleSheet.create({
	navigation: {
		backgroundColor: colors.bgDark,
	},
	icon: {
		fontSize: 20,
		color: colors.fontlight,
	},
});
