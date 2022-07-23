import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";

const RNBottomSheetView = ({ children }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetScrollView>{children}</BottomSheetScrollView>
    </GestureHandlerRootView>
  );
};

export default RNBottomSheetView;
