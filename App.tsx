import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
  // View,
} from 'react-native';

import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  main: {
    height: 300,
    padding: 20,
  },
  header: {
    backgroundColor: 'blue',
    height: 40,
    padding: 'auto',
    // marginVertical: 'auto',
  },
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [name, setName] = useState('');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text>Calculator</Text>
        </View>
        <View style={{backgroundColor: 'red', flex: 0.5}} />
      </View>
      {/* <Text>{name}</Text> */}
      <TextInput
        value={name}
        onChangeText={(text: string) => {
          setName(text);
        }}
      />
      <Button
        title="clear everything "
        onPress={() => {
          console.log('hello');
          setName('');
        }}
      />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
