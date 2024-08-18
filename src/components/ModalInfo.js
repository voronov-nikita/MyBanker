import React, { useState } from "react";
import { Modal, Text, View, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
	const [modalVisible, setModalVisible] = useState(false);

	const handleOpenModal = () => {
		setModalVisible(true);
	};

	const handleCloseModal = () => {
		setModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleOpenModal}>
				<Text>Открыть модальное окно</Text>
			</TouchableOpacity>
			<Modal
				visible={modalVisible}
				onRequestClose={handleCloseModal}
				animationType="fade"
			>
				<View style={styles.modalContainer}>
					<Text style={styles.modalTitle}>Модальное окно</Text>
					<Text style={styles.modalText}>Это простенькое модальное окно.</Text>
					<Text style={styles.modalText}>
						Здесь можно отображать любые текстовые данные.
					</Text>
					<TouchableOpacity onPress={handleCloseModal}>
						<Text style={styles.modalClose}>Закрыть</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		margin: 20,
		padding: 20,
		borderRadius: 10,
	},
	modalTitle: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
	},
	modalText: {
		fontSize: 18,
		marginBottom: 10,
	},
	modalClose: {
		fontSize: 18,
		color: "blue",
	},
});

export default App;
