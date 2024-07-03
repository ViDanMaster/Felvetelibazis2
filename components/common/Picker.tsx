import React, { useState } from "react"
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native'

import styles from "./Picker.style"

interface PickerProps {
    name: string;
    items: string[];
    selectedIndex: number;
    onTap: (name: string, index: number) => void;
  }

const Picker: React.FC<PickerProps> = ({name, items, selectedIndex, onTap}) => {

    const [pickerVisible, setPickerVisible] = useState(false);
    const onPressHandler = () => setPickerVisible(previousState => !previousState);

    return(
        <View style={styles.container}>
            <Modal
            animationType="none"
            transparent={true}
            visible={pickerVisible}
            onRequestClose={() => {
                setPickerVisible(!pickerVisible);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ScrollView contentContainerStyle={styles.modalScrollView}>
                            {items.map((object, i) => {
                                return(
                                    <TouchableOpacity key={i} onPress={() => {setPickerVisible(!pickerVisible); onTap(name, i)}}>
                                        <Text style={styles.evszamText} key={i}>{object}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                        <TouchableOpacity
                            style={styles.megseButton}
                            onPress={() => setPickerVisible(!pickerVisible)}>
                            <Text style={styles.megseText}>Mégse</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={styles.pickerContainer}
                onPress={onPressHandler}
            >
                <Text style={styles.pickerText}>{items[selectedIndex]}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Picker