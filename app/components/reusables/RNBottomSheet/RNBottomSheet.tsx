import React, { Children } from "react";
import { View, StyleSheet, GestureResponderEvent } from "react-native";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";

type RNBottomSheetTypes = {
  snapPoints: (string | number)[];
  children: React.ReactNode;
  open: boolean;
  onClose?: any;
};

const RNBottomSheet = ({
  snapPoints,
  children,
  open,
  onClose,
}: RNBottomSheetTypes) => {
  const [index, setIndex] = React.useState<number>(0);
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const _snapPoints = React.useMemo(() => [1, ...snapPoints], []);
  //   const handleSheetChanges = React.useCallback((index: number) => {
  //     setIndex(index);
  //   }, []);

  const renderBackdrop = React.useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        onPress={() => bottomSheetRef.current.close()}
        pressBehavior="close"
        appearsOnIndex={2}
      />
    ),
    []
  );

  //   React.useEffect(() => {
  //     open ? bottomSheetRef.current?.expand() : bottomSheetRef.current?.close();
  //   }, [open]);

  React.useEffect(() => {
    onClose(bottomSheetRef);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      open ? bottomSheetRef.current?.expand() : bottomSheetRef.current?.close();
      return () => bottomSheetRef.current?.close();
    }, [open])
  );
  return (
    <BottomSheet
      enablePanDownToClose={true}
      enableOverDrag={true}
      enableContentPanningGesture={true}
      enableHandlePanningGesture={true}
      ref={bottomSheetRef}
      index={index}
      snapPoints={_snapPoints}
      //   onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      //   onClose={() => onClose(true)}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetScrollView>{children}</BottomSheetScrollView>
      </GestureHandlerRootView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default RNBottomSheet;
