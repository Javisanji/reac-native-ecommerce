import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { API_URL } from "../../utils/constants";

export default function Order(props) {
	const { order } = props;

	return (
		<View style={styles.container}>
			<View style={styles.containerImage}>
				<Image
					style={styles.image}
					source={{
						uri: `${API_URL}${order.product.main_image.url}`,
					}}
				/>
			</View>
			<View style={styles.info}>
				<Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
					{order.product.title}
				</Text>
				<Text>Quantidade: {order.quantity}</Text>
				<Text>Total pago: R${order.totalPayment} </Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		borderColor: "#ddd",
		marginHorizontal: -20,
		paddingVertical: 5,
		flexDirection: "row",
	},
	containerImage: {
		width: "30%",
		height: 120,
		padding: 10,
	},
	image: {
		height: "100%",
		resizeMode: "contain",
	},
	info: {
		width: "70%",
		justifyContent: "center",
	},
	name: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 5,
	},
});
