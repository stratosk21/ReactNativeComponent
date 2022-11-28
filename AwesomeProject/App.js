// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
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
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

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

// export default App;


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
<script src="http://localhost:8097"></script>
import React from 'react';
// import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import Constants from 'expo-constants';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapProgress data={[...data]} />
      </View>
    );
  }
}

const MapProgress = (props) => {
  if (!props.data || props.data.length === 0) return null;

  const firstItem = props.data.shift();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.verticalLine}></View>
      <View style={styles.verticalWrap}>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.itemWrapRow}>
            <View style={styles.firstPoint}></View>
            <View style={{ marginLeft: 5, flex: 1, marginTop: 30 }}>
              <Text style = {styles.title }>{firstItem.title}</Text>
              <Text>{firstItem.location}</Text>
              <Text>{firstItem.time}</Text>
            </View>
          </View>
          <View style={{marginLeft: 300}}>
          <Button
            // onPress={onPressLearnMore}
            title="Open Maps"
            color="#841584"
            // accessibilityLabel="Learn more about this purple button"
          />
          </View>
        </View>

        {props.data.map((item) => (
          <View style={styles.itemWrapRow}>
            <View style={styles.pointWrap}>
              <Text
                style={[
                  styles.markerText,
                  item.isCurrent ? styles.currentMarker : null,
                ]}>
                {item.letter}
              </Text>
            </View>
            <View style={{ marginLeft: 5, flex: 1 }}>
              <Text style={item.isCurrent ? styles.currentMarker : null}>
                {item.title}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold'
  },
  verticalLine: {
    backgroundColor: 'black',
    width: 2,
    height: '50%',
    position: 'absolute',
    marginLeft: 34,
    marginTop: 40,
  },
  verticalWrap: {
    justifyContent: 'space-between',
    height: '100%',
  },
  itemWrapRow: {
    width: 500,
    height: 50,
    marginLeft: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  // itemWrapColumn: {
  //   width: 100,
  //   height: 0,
  //   marginLeft: 20,
  //   justifyContent: 'center',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // },
  pointWrap: {
    backgroundColor: 'black',
    height: 20,
    width: 20,
    marginLeft: 5,
    alignItems: 'center',
  },
  firstPoint: {
    backgroundColor: 'black',
    borderRadius: 20,
    height: 10,
    width: 10,
    marginLeft: 10,
    marginTop: 30
  },
  markerText: { color: 'white' },
  currentMarker: { color: 'green' },
});

const data = [
  { title: 'Pick up from', location: 'Bukit Sagu, Kuantan, Pahang', time: '08:00 AM', isCurrent: false },
  { title: 'Destination', location: '205, Bukit Bintang St, Bukit Bintang, 55100 Kuala Lumpur, Federal Territory of Kuala Lumpur', time: '10.30 AM', isCurrent: false },
  // { title: 'Stop 3', letter: 'C', isCurrent: false },
  // { title: 'Stop 4', letter: 'D', isCurrent: false },
  // { title: 'Stop 5', letter: 'E', isCurrent: true },
];
