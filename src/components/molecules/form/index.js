import React, { useState } from "react";
import { View } from 'react-native'
import { COLORS } from "../../../shared/colors";
import fonts from "../../../shared/fonts";
import { CustomButton } from "../../atoms/button";
import { Input } from "../../atoms/input";
import { Typography } from "../../atoms/typography";
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateSelector } from "./dateSelector";
import { getPickerDateFormat } from '../../../helpers/dateFormat';
import { useTasksCreate } from '../../../hooks/useTaskCreate';
import moment from "moment";

export function Form({ navigation }) {

  const [description, setDescription] = useState('')
  const [showInitDate, setShowInitDate] = useState(false)
  const [date, setDate] = useState(getPickerDateFormat(new Date()));
  const { task, createTask } = useTasksCreate();

  const getDateFormat = ({ nativeEvent }) => { 
    const { timestamp } = nativeEvent;
    const dateSelect = getPickerDateFormat(timestamp);
    setDate(dateSelect); 
    setShowInitDate(false);
  };

  const create = () => { 
    createTask(description, moment(date, "DD/MM/YYYY").toISOString());
    navigation.replace('Main')
  }

  return (
    <View style={{ padding: 24 }}>
      <Typography
        caption="Todo List"
        color={COLORS.textColor}
        textAlign="center"
        fontFamily={fonts.RobotoBold}
        fontSize={24}
      />
      <View style={{ marginTop: 24 }}>
        <Typography
          caption="Descripción"
          color={COLORS.textColor}
          fontFamily={fonts.RobotoBold}
          fontSize={12}
        />
        <View style={{ marginTop: 12, marginBottom: 24 }}>
          <Input
            value={description}
            placeholder="Descripción"
            onChangeText={(value) => setDescription(value)}
            borderColor={COLORS.textColor1}
            borderWidth={1}
            borderRadius={5}
            height={40}
            testID="inputTaskDescription"
          />
        </View>
        <Typography
          caption="Fecha límite"
          color={COLORS.textColor}
          fontFamily={fonts.RobotoBold}
          fontSize={12}
        />
        <View style={{ marginTop: 12 }}>
          <DateSelector date={date} onPress={() => setShowInitDate(true)} />
        </View>
        {showInitDate && (
          <DateTimePicker
            value={new Date()}
            display="default"
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date(2300, 10, 20)}
            onChange={(select) => getDateFormat(select)}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 16,
        }}
      >
        <CustomButton
          title="Agregar"
          onPress={() => create()}
          disabled={false}
          height={40}
          width={80}
          backgroundColor={COLORS.textColor}
          testID="saveTaskButton"
        />
      </View>
    </View>
  );
}