import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolateColor,
} from "react-native-reanimated";

const Lab3Bai1 = () => {
  const animation = useSharedValue(0);

  const handleStartAnimation = () => {
    animation.value = withSpring(1);
  };

  const animationStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animation.value,
      [0, 1],
      ["blue", "red"]
    );

    return {
      transform: [{ translateY: animation.value * 255 }],
      backgroundColor,
    };
  });

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 200,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleStartAnimation}
        >
          <Text >Start Animation</Text>
        </TouchableOpacity>
      </View>

      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            marginTop: 20,
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          },
          animationStyle,
        ]}
      ></Animated.View>
    </View>
  );
};

export default Lab3Bai1;

const styles = StyleSheet.create({});