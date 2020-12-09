import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { IconHome, IconTrans, IconProfile } from '../../assets'

const BottomNavigator = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icon = () => {
            if(label === " ") return isFocused ? <IconHome/> : <IconHome />
            if(label === "  ") return isFocused ? <IconTrans/> : <IconTrans />
            if(label === "   ") return isFocused ? <IconProfile/> : <IconProfile />
            return <IconHome />
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
              <Icon />
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

}

export default BottomNavigator

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 7
    }
})
