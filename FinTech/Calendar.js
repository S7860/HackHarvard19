import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React, {Component} from 'react';
import WeekView from 'react-native-week-view';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class CalendarScreen extends Component{
  //state object
  state = { toggle: false };
  selectedDate = new Date();

  generateDates = (hours, minutes) => {
    const date = new Date();
    date.setHours(date.getHours() + hours);
    if (minutes != null) {
      date.setMinutes(minutes);
    }
    return date;
  };

  render() {
    return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style = {styles.titleBackground}>
          <Text style={styles.title}>Credit Advisor</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <View style={styles.button}>
              <Button
                title="Gas"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Grocery"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Travel"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Restaurant"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Morgage"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
      </>
    );
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    margin: 30,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 22,
  },
  headerStyle: {
    backgroundColor: '#4286f4',
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    color: "cornflowerblue",
  },
  titleBackground: {
    backgroundColor: "white",
  },
});


export default CalendarScreen;
