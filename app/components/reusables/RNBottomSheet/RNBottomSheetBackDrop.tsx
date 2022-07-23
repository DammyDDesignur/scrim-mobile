import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import React, { FC } from "react";

const RNBottomSheetBackDrop = (props: BottomSheetBackdropProps) => {
  return (
    <BottomSheetBackdrop {...props} pressBehavior="close" appearsOnIndex={2} />
  );
};

export default RNBottomSheetBackDrop;
