import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { memo } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  useAnimatedRef,
  runOnJS,
} from "react-native-reanimated";

const Bai2Lab3 = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const scrollY = useSharedValue(0);
  const flatListRef = useAnimatedRef();

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const onViewableItemsChanged = useAnimatedRef(({ viewableItems }) => {
    viewableItems.forEach((item) => {
      if (item.index !== undefined) {
        const index = item.index;
        runOnJS(handleItemVisibilityChange)(index);
      }
    });
  });

  const handleItemVisibilityChange = (index) => {
    const itemIndex = parseInt(index, 10);
    flatListRef.current?.scrollToIndex({ index: itemIndex });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: 1 - scrollY.value / 200,
      transform: [{ scale: 1 - scrollY.value / 1000 }],
    };
  });

  const renderItem = ({ item }) => {
    return (
      <Animated.View style={[styles.item, animatedStyle]}>
        <Text style={styles.text}>{item}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={flatListRef}
        onViewableItemsChanged={onViewableItemsChanged}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    marginVertical: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Bai2Lab3;