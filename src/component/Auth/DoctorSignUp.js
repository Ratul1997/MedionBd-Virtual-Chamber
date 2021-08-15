import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import COLORS from '../../constants/COLORS';
import normalization from '../../constants/normalization';

import IonIcons from 'react-native-vector-icons/Ionicons';
import VirtualizedView from '../../common/VirtualizedView';
import {
  insertIntoDateArray,
  findFromDateArray,
  deleteFromDateArray,
} from '../../constants/calcuationdata';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import axios from 'axios';
import ActivityIndicatorComponent from '../../common/ActivityIndicatorComponent';

import Geolocation from '@react-native-community/geolocation';

const weekDays = [
  {
    name: 'Sat',
    value: 0,
  },
  {
    name: 'Sun',
    value: 1,
  },
  {
    name: 'Mon',
    value: 2,
  },
  {
    name: 'Tue',
    value: 3,
  },
  {
    name: 'Wed',
    value: 4,
  },
  {
    name: 'Thu',
    value: 5,
  },
  {
    name: 'Fri',
    value: 6,
  },
];
export default function DoctorSignUp(props) {
  const {navigation} = props;
  const [selectedId, setSelectedId] = useState([]);
  const [doctor_name, setDoctorName] = useState('');
  const [doctor_qualification, setDoctorQualification] = useState('');

  const [doctor_speciality, setDoctorSpecialty] = useState('');
  const [doctor_institution, setDoctorInstitution] = useState('');
  const [doctor_registration_number, setDoctorRegistrationNumber] = useState(
    '',
  );
  const [doctor_about, setDoctorAbout] = useState('');
  const [contact_number, setContactNumber] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [doctor_specialization_catagory, setDoctorCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chamber_name, setChamberName] = useState('');
  const [chamber_address, setChamberAddress] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [password, setPassword] = useState('');

  const [confirm_password, setConfirmPassword] = useState('');
    useEffect(() => {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          const {latitude, longitude} = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        error => alert(error.message),
        {timeout: 20000, maximumAge: 1000},
      );
    }, []);
  const renderDay = ({item, index}) => {
    const backgroundColor = findFromDateArray(selectedId, item.value)
      ? '#19769F'
      : '#fff';
    const color = findFromDateArray(selectedId, item.value)
      ? '#fff'
      : '#19769F';

    const onPress = () => {
      if (!findFromDateArray(selectedId, item.value)) {
        setSelectedId([...insertIntoDateArray(selectedId, item.value)]);
      } else {
        setSelectedId([...deleteFromDateArray(selectedId, item.value)]);
      }
    };
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: COLORS.deepBlueHeader,
          height: normalization(50),
          width: normalization(50),
          marginHorizontal: normalization(5),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor,
        }}
        onPress={onPress}>
        <Text style={{color}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const onBack = () => {
    navigation.goBack();
  };
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => alert(error.message),
      {timeout: 20000, maximumAge: 1000},
    );
  };
  const onConfirm = () => {
    setIsLoading(true);
    const user = {
      doctor_name: doctor_name,
      doctor_qualification: doctor_qualification,
      doctor_speciality: doctor_speciality,
      doctor_institution: doctor_institution,
      doctor_registration_number: doctor_registration_number,
      doctor_specialization_catagory: doctor_specialization_catagory,
      contact_number: contact_number,
      doctor_about: doctor_about,
      startTime: startTime,
      endTime: endTime,
      doctor_day: selectedId.sort().toString(),
      longitude: longitude,
      latitude: latitude,
      chamber_address: chamber_address,
      chamber_name: chamber_name,
    };
    console.log(user);
    const url = 'https://videoallapi.medionbd.com/' + 'checkVirtual';
    console.log(url);
    axios
      .post(url, {
        contact_number: contact_number,
      })
      .then(res => {
        console.log(res.data);
        addData();
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const addData = () => {
    const url = 'https://videoallapi.medionbd.com/' + 'signUpVirtualChamber';
    console.log(url);
    axios
      .post(url, {
        doctor_name: doctor_name,
        doctor_qualification: doctor_qualification,
        doctor_speciality: doctor_speciality,
        doctor_institution: doctor_institution,
        doctor_registration_number: doctor_registration_number,
        doctor_specialization_catagory: doctor_specialization_catagory,
        contact_number: contact_number,
        doctor_about: doctor_about,
        startTime: startTime,
        endTime: endTime,
        doctor_day: selectedId.sort().toString(),
        longitude: longitude,
        latitude: latitude,
        chamber_address: chamber_address,
        chamber_name: chamber_name,
        password: password,
      })
      .then(res => {
        console.log(res.data);
        setIsLoading(false);
        alert('Login With your number and password');
      })
      .catch(err => {
        console.log(err);
        alert('Phone Number is already used');
        setIsLoading(false);
      });
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'center',
          marginHorizontal: normalization(10),
          marginVertical: normalization(10),
        }}>
        <TouchableOpacity
          style={{position: 'absolute', left: 0}}
          onPress={onBack}>
          <IonIcons
            name="arrow-back-circle-sharp"
            color={COLORS.deepBlueHeader}
            size={normalization(25)}
          />
        </TouchableOpacity>
        <Text
          style={{fontSize: normalization(20), color: COLORS.deepBlueHeader}}>
          Sign Up
        </Text>
      </View>
      <ScrollView>
        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Doctor Name
        </Text>
        <TextInput
          placeholder="Doctor Name"
          style={styles.refId}
          value={doctor_name}
          onChangeText={text => setDoctorName(text)}
        />
        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Doctor Qualification
        </Text>
        <TextInput
          placeholder="Doctor Qualification"
          style={styles.refId}
          value={doctor_qualification}
          onChangeText={text => setDoctorQualification(text)}
        />
        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Doctor Specialty
        </Text>
        <TextInput
          placeholder="Doctor Qualification"
          style={styles.refId}
          value={doctor_speciality}
          onChangeText={text => setDoctorSpecialty(text)}
        />
        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Doctor Specialize Category
        </Text>
        <Menu>
          <MenuTrigger
            text={
              doctor_specialization_catagory
                ? doctor_specialization_catagory
                : 'Select Specialization'
            }
            style={[styles.refId, {color: '#979A9A'}]}
          />
          <MenuOptions
            optionsContainerStyle={{
              marginLeft: normalization(30),
              marginTop: normalization(25),
            }}>
            <MenuOption
              onSelect={() => setDoctorCategory('Anesthesiology')}
              text="Anesthesiology"
            />
            <MenuOption
              onSelect={() => setDoctorCategory('Medicine')}
              text="Medicine"
            />
            <MenuOption
              onSelect={() => setDoctorCategory('Cardiology')}
              text="Cardiology"
            />
            <MenuOption
              onSelect={() => setDoctorCategory('Pediatric/Child')}
              text="Pediatric/Child"
            />
            <MenuOption
              onSelect={() => setDoctorCategory('Oral & Dental')}
              text="Oral & Dental"
            />
            <MenuOption
              onSelect={() => setDoctorCategory('Ear, Nose & Throat')}
              text="Ear, Nose & Throat"
            />
          </MenuOptions>
        </Menu>
        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Doctor Institution
        </Text>
        <TextInput
          placeholder="Doctor Institution"
          style={styles.refId}
          value={doctor_institution}
          onChangeText={text => setDoctorInstitution(text)}
        />
        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Doctor Registration Number
        </Text>
        <TextInput
          placeholder="Doctor Registration Number"
          style={styles.refId}
          value={doctor_registration_number}
          onChangeText={text => setDoctorRegistrationNumber(text)}
        />
        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Doctor Phone Number
        </Text>
        <TextInput
          placeholder="Doctor Phone Number"
          style={styles.refId}
          value={contact_number}
          keyboardType="number-pad"
          onChangeText={text => setContactNumber(text)}
        />

        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Doctor About
        </Text>
        <TextInput
          placeholder="Doctor About"
          style={styles.refId}
          multiline
          value={doctor_about}
          onChangeText={text => setDoctorAbout(text)}
        />

        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Chamber Name
        </Text>
        <TextInput
          placeholder="Chamber Name"
          style={styles.refId}
          multiline
          value={chamber_name}
          onChangeText={text => setChamberName(text)}
        />

        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Chamber Address
        </Text>
        <TextInput
          placeholder="Chamber Address"
          style={styles.refId}
          multiline
          value={chamber_address}
          onChangeText={text => setChamberAddress(text)}
        />

        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Start Time
        </Text>
        <TextInput
          placeholder="ex: 9pm/10:30am"
          style={styles.refId}
          value={startTime}
          onChangeText={text => setStartTime(text)}
        />
        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          End Time
        </Text>
        <TextInput
          placeholder="ex: 9pm/10:30am"
          style={styles.refId}
          value={endTime}
          onChangeText={text => setEndTime(text)}
        />

        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Password
        </Text>
        <TextInput
          placeholder="Password"
          style={styles.refId}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Confirm Password
        </Text>
        <TextInput
          placeholder="Confirm Password"
          style={styles.refId}
          value={confirm_password}
          onChangeText={text => setConfirmPassword(text)}
        />
        <Text
          style={{
            marginLeft: normalization(15),
            color: '#979A9A',
            textAlign: 'left',
          }}>
          Available Day
        </Text>
        <FlatList
          data={weekDays}
          horizontal={true}
          renderItem={renderDay}
          keyExtractor={item => item.value}
          style={{margin: normalization(10)}}
        />
        <TouchableOpacity
          onPress={onConfirm}
          style={{
            height: normalization(47),
            width: Dimensions.get('window').width * 0.92 - normalization(57),
            backgroundColor: '#053871',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 25,
            marginBottom: normalization(7),
            alignSelf: 'center',
          }}>
          {isLoading ? (
            <ActivityIndicatorComponent size="small" color="white" />
          ) : (
            <Text
              style={{
                fontSize: normalization(14),
                color: COLORS.white,
                fontWeight: 'bold',
              }}>
              Confirm
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  refId: {
    fontSize: normalization(14),
    padding: 8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#979A9A',
    marginBottom: 15,
    marginEnd: '2%',
    width: '90%',
    alignSelf: 'center',
  },
  picker: {
    fontSize: normalization(14),
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#979A9A',
    marginBottom: 15,
    marginEnd: '2%',
  },
});
