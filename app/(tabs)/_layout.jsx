import { View, Text, Image, StatusBar } from 'react-native'
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    
    <View className="items-center justify-center gap-2">
      <View></View>
      <View></View>
      <View></View>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs w-20`}
        style={{ color: color, textAlign: "center" }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
   <>
   <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#FFA001',
      tabBarInactiveTintColor: '#CDCDE0',
      tabBarStyle: {
        backgroundColor: '#161622',
        borderTopWidth: 1,
        borderTopColor: '#232533',
        height: 74,
      },
    }}
   >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
   </Tabs>

   <StatusBar backgroundColor="#161622" style="light" />
   </>
  );
};

export default TabLayout;
