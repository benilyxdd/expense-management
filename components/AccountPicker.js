import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import AccountsData from "../data/AccountsData";
import AccountDetailsData from "../data/AccountDetailsData";

const AccountPicker = (props) => {
	const [pickerOpen, setPickerOpen] = useState(false);
	const [pickerItems, setPickerItems] = useState(AccountsData);
	const [pickerValue, setPickerValue] = useState(pickerItems[0].value);

	return (
		<SafeAreaView style={styles.headerContainer}>
			<DropDownPicker
				open={pickerOpen}
				items={pickerItems}
				value={pickerValue}
				setOpen={setPickerOpen}
				setItems={setPickerItems}
				setValue={setPickerValue}
				onChangeValue={() => props.onChangeAccount(AccountDetailsData[pickerValue])}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		height: "11%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		borderBottomColor: "black",
		borderBottomWidth: 2,
	},
	header: {
		// fontFamily: "Caveat-Regular",
		fontSize: 25,
		paddingBottom: "1%",
	},
});

export default AccountPicker;
