import React from "react";
import { View, StyleSheet, Modal, GestureResponderEvent } from "react-native";

type ModalType = {
  animationType?: "slide" | "fade" | "none";
  children: React.ReactNode;
  presentationStyle?:
    | "overFullScreen"
    | "fullScreen"
    | "pageSheet"
    | "formSheet";
  statusBarTranslucent?: boolean;
  visible: boolean;
  opacity?: number;
  onRequestClose: (event: GestureResponderEvent) => void;
};

const RNModal = ({
  animationType = "slide",
  presentationStyle,
  statusBarTranslucent = true,
  visible,
  opacity = 5,
  onRequestClose,
  children,
}: ModalType) => {
  const styles = StyleSheet.create({
    container: { backgroundColor: `rgba(0, 0, 0, ${opacity / 10})`, flex: 1 },
  });
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType={animationType}
      statusBarTranslucent={statusBarTranslucent}
      presentationStyle={presentationStyle}
      onRequestClose={onRequestClose}
    >
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

export default RNModal;
