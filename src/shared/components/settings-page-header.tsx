import { observer } from "mobx-react-lite";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useStore } from "../../services/RootStore";

type Props = {
  onBackClick(): void;
  onSaveClick(): void;
};

export const SettingsPageHeader = observer(
  ({ onBackClick, onSaveClick }: Props) => {
    const { searchSettingsService } = useStore();

    return (
      <View style={styles.header}>
        {/* <TouchableOpacity onPress={onBackClick}>
          <Text text={"Назад"} />
        </TouchableOpacity> */}
        <Button title="Назад" onPress={onBackClick} />
        <Button
          title="Сохранить"
          onPress={() => searchSettingsService.onSaveChangesClick()}
          disabled={!searchSettingsService.hasChanges}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: 10,
  },
});
