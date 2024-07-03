import React from "react";
import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";

import styles from "./ToggleBtn.style";

interface ToggleBtnProps {
  toggled: boolean;
  onToggle: () => void;
  imgUrl: ImageSourcePropType;
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({ toggled, onToggle, imgUrl }) => {
  return (
    <TouchableOpacity
      style={toggled ? styles.toggleBtnContainerOn : styles.toggleBtnContainer}
      onPress={onToggle}
    >
      <Image style={styles.toggleBtnImg} source={imgUrl} />
    </TouchableOpacity>
  );
};

export default ToggleBtn;