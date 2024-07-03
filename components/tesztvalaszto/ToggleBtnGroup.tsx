import React from "react";
import { View, Text, ImageSourcePropType } from "react-native";

import ToggleBtn from "./ToggleBtn";
import styles from "./ToggleBtnGroup.style";

interface ToggleBtnGroupProps {
  texts: string[];
  images: ImageSourcePropType[];
  toggledIndex: number;
  onToggle: (index: number) => void;
}

const ToggleBtnGroup: React.FC<ToggleBtnGroupProps> = ({
  texts,
  images,
  toggledIndex,
  onToggle,
}) => {
  return (
    <View style={styles.groupContainer}>
      {texts.map((text, index) => (
        <View style={styles.btnGroup} key={index}>
          <Text style={styles.description}>{text}</Text>
          <View style={styles.btnContainer}>
            <ToggleBtn
              imgUrl={images[index]}
              toggled={toggledIndex === index}
              onToggle={() => onToggle(index)}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default ToggleBtnGroup