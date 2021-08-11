import React from "react";
import { View, StyleSheet } from "react-native";
import { TextArea } from "react-native-ui-lib";
import { useDispatch, useSelector } from "react-redux";

import { detailChange, subjectChange } from "../../store/actions/Feedback";

const SubmitFeedback = () => {
	const dispatch = useDispatch();
	const inputDetail = useSelector((state) => state.Feedback.detail);
	const inputSubject = useSelector((state) => state.Feedback.subject);

	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<View style={styles.subjectConatiner}>
					<TextArea // subject
						placeholder="Subject"
						value={inputSubject}
						onChangeText={(input) => dispatch(subjectChange(input))}
					/>
				</View>
				<View style={styles.detailContainer}>
					<TextArea // detail
						placeholder="Add Something..."
						value={inputDetail}
						onChangeText={(input) => dispatch(detailChange(input))}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
	inputContainer: {
		width: "90%",
		height: "50%",
		margin: "3%",
		borderWidth: 2,
		borderColor: "black",
		borderRadius: 15,
		padding: "3%",
	},
	subjectConatiner: {
		flex: 1,
		borderBottomWidth: 2,
		borderBottomColor: "black",
	},
	detailContainer: {
		flex: 5,
	},
});

export default SubmitFeedback;
