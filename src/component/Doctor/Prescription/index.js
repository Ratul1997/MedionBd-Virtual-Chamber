import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
import VirtualizedView from '../../../common/VirtualizedView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RX from './RX';
import Advice from './Advice';
import FollowUp from './FollowUp';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RXComponent from './RX/RXComponent';
import {connect} from 'react-redux';
import CheifComplaint from './CheifComplaint';
import History from './History';
import Diagnosis from './Diagnosis';
import OnExamination from './OnExamination';
import Investigation from './Investigation';
import axios from 'axios';
import ActivityIndicatorComponent from '../../../common/ActivityIndicatorComponent';
import DocumentPicker from 'react-native-document-picker';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {generatedHTML} from './generatedHTML';
import {convertArrayToHtml} from '../../../constants/calcuationdata';
import {userConstants} from '../../../constants/userConstants';
function Prescription(props) {
  const {
    navigation,
    medicines,
    advices,
    followup,
    route,
    cheifComplaint,
    history,
    diagnosis,
    onExamination,
    investigation,
    userDetails,
    removeAll,
  } = props;
  const {doctor, patient} = route.params;
  // const patient = [];
  console.log(doctor);
  const [modalVisible, setModalVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [prescriptionUri, setPresCriptionUri] = useState('');
  const [prescriptionLoad, setPresCriptionLoad] = useState(false);
  const [singleFile, setSingleFile] = useState(null);

  const renderRX = ({item, index}) => {
    return <RX item={item} />;
  };

  const renderAdvice = ({item, index}) => {
    return <Advice item={item} />;
  };
  const renderFollowUp = ({item, index}) => {
    return <FollowUp item={item} />;
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const renderCheifComplaints = ({item}) => {
    return <CheifComplaint item={item} />;
  };
  const renderHistory = ({item}) => {
    return <History item={item} />;
  };
  const renderDiagnosis = ({item}) => {
    return <Diagnosis item={item} />;
  };
  const renderOnExamination = ({item}) => {
    return <OnExamination item={item} />;
  };
  const renderInvestigation = ({item}) => {
    return <Investigation item={item} />;
  };
  const getDate = () => {
    const date = new Date();
    return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  };

  const onSavePresCription = () => {
    setPresCriptionLoad(true);
    const date = new Date();

    let options = {
      html: generatedHTML(
        doctor,
        patient,
        convertArrayToHtml(medicines, 'Med'),
        convertArrayToHtml(advices, 'Ad'),
        convertArrayToHtml(followup, 'FU'),
        convertArrayToHtml(cheifComplaint, 'CC'),
        convertArrayToHtml(history, 'H'),
        convertArrayToHtml(diagnosis, 'DS'),
        convertArrayToHtml(onExamination, 'ONE'),
        convertArrayToHtml(investigation, 'INV'),
        getDate(),
      ),
      fileName: 'prescription' + date.getTime() + patient.idpatients,
      directory: 'Documents',
    };
    // console.log(options);
    RNHTMLtoPDF.convert(options)
      .then(res => {
        setPresCriptionLoad(false);
        alert('File Saved At ' + res.filePath);
        setPresCriptionUri(res.filePath);
      })
      .catch(err => {
        setPresCriptionLoad(false);
        alert('Something went wrong in saving file');
      });
  };

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file

      console.log('res : ' + JSON.stringify(res));

      // Setting the state to show single file attributes
      setSingleFile(res);
      upload();
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const onSendPresCription = () => {
    selectFile();
  };
  const upload = async () => {
    console.log('click');
    // Check if any file is selected or not

    if (singleFile != null) {
      setIsLoading(true);
      // If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'File Upload');
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
      try {
        let res = await fetch('https://videoallapi.medionbd.com/upload.php', {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        });
        let responseJson = await res.json();
        if (responseJson.status == 1) {
          console.log(responseJson.data);

          const downloadUrl =
            'https://videoallapi.medionbd.com/' + responseJson.data[0];
          storeInDataBase(downloadUrl);
        } else {
          setIsLoading(false);
          alert(responseJson.msg);
        }
      } catch (error) {
        alert('Some Thing Went Wrong');
        setIsLoading(false);
      }
    } else {
      alert('Please Select File first');
    }
  };

  const storeInDataBase = downloadlink => {
    const date = new Date();
    const uploadedTime = date.getTime().toString();
    const url = 'https://videoallapi.medionbd.com/' + 'store-url';
    console.log(url, downloadlink);
    axios
      .post(url, {
        idpatients: patient.idpatients,
        idonlinedoctors: doctor.idonlinedoctors,
        url: downloadlink,
        uploadedby: doctor.idonlinedoctors,
        uploadedTime: uploadedTime,
      })
      .then(res => {
        console.log(res);
        updateStatus();
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        alert('Some Thing Went Wrong');
        setIsLoading(false);
      });
  };

  const updateStatus = () => {
    const url = 'https://videoallapi.medionbd.com/' + 'prescription-send';
    axios
      .post(url, {
        iddoctors: doctor.idonlinedoctors,
      })
      .then(res => {
        console.log(res);
        alert('Upload Successful');
        setIsLoading(false);
      })
      .catch(err => {
        alert('Some Thing Went Wrong');
        setIsLoading(false);
      });
  };
  const onBackNavigation = () => {
    if (!isLoading && !prescriptionLoad) {
      removeAll();
      navigation.goBack();
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        presentationStyle="overFullScreen">
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}>
          <RXComponent />
        </View>
      </Modal> */}
      <VirtualizedView>
        <View
          style={{
            paddingLeft: normalization(15),
            paddingTop: normalization(15),
          }}>
          <AntDesign
            onPress={onBackNavigation}
            name="close"
            size={30}
            color={COLORS.deepBlueHeader}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              color: COLORS.deepBlueHeader,
              fontWeight: 'bold',
            }}>
            {doctor.doctor_name}
          </Text>
          <Text style={{fontSize: 16, color: '#024614'}}>
            {doctor.doctor_qualification}
          </Text>
          <Text
            style={{
              fontSize: 19,
              color: COLORS.deepBlueHeader,
              fontWeight: 'bold',
            }}>
            {doctor.doctor_speciality}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: normalization(10),
            marginVertical: normalization(8),
          }}>
          <Text>Patient name: </Text>
          <TextInput
            placeholder="Name"
            value={patient.patient_name ? patient.patient_name : ''}
            style={{borderBottomWidth: 0.5, flex: 1, padding: 0}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: normalization(10),
          }}>
          <Text>Age: </Text>
          <TextInput
            placeholder="Age"
            value={patient.patient_age ? patient.patient_age.toString() : ''}
            style={{borderBottomWidth: 0.5, flex: 1, padding: 0}}
          />
          <Text>Date: </Text>
          <TextInput
            placeholder="Date"
            value={getDate()}
            style={{borderBottomWidth: 0.5, flex: 1, padding: 0}}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.navigate('Medicines')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Rx, </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
          <View style={{marginVertical: normalization(10)}}>
            <FlatList
              data={medicines}
              renderItem={renderRX}
              listKey={index => 'D' + index.toString()}
            />
          </View>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.navigate('Advices')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Advices, </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
          <View style={{marginVertical: normalization(10)}}>
            <FlatList
              data={advices}
              renderItem={renderAdvice}
              listKey={index => 'D' + index.toString()}
            />
          </View>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.navigate('Follow')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Follow Up, </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
          <View style={{marginVertical: normalization(10)}}>
            <FlatList
              data={followup}
              renderItem={renderFollowUp}
              listKey={index => 'D' + index.toString()}
            />
          </View>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.navigate('Complaints')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Cheif Complaint,{' '}
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
          <View style={{marginVertical: normalization(10)}}>
            <FlatList
              data={cheifComplaint}
              renderItem={renderCheifComplaints}
              listKey={index => 'D' + index.toString()}
            />
          </View>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.navigate('History')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>History, </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
          <View style={{marginVertical: normalization(10)}}>
            <FlatList
              data={history}
              renderItem={renderHistory}
              listKey={index => 'D' + index.toString()}
            />
          </View>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.navigate('Diagnosis')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Diagnosis, </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
          <View style={{marginVertical: normalization(10)}}>
            <FlatList
              data={diagnosis}
              renderItem={renderDiagnosis}
              listKey={index => 'D' + index.toString()}
            />
          </View>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.navigate('OnExamination')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              On Examination,{' '}
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
          <View style={{marginVertical: normalization(10)}}>
            <FlatList
              data={onExamination}
              renderItem={renderOnExamination}
              listKey={index => 'D' + index.toString()}
            />
          </View>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.navigate('Inv')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Investigation,{' '}
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
          <View style={{marginVertical: normalization(10)}}>
            <FlatList
              data={investigation}
              renderItem={renderInvestigation}
              listKey={index => 'D' + index.toString()}
            />
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity
            onPress={onSavePresCription}
            style={styles.buttonStyle}>
            {prescriptionLoad ? (
              <ActivityIndicatorComponent size="large" color="white" />
            ) : (
              <Text style={styles.buttonTextStyle}>Save</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onSendPresCription}
            style={styles.buttonStyle}>
            {isLoading ? (
              <ActivityIndicatorComponent size="large" color="white" />
            ) : (
              <Text style={styles.buttonTextStyle}>Send</Text>
            )}
          </TouchableOpacity>
        </View>
      </VirtualizedView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: normalization(10),
    margin: normalization(10),
    borderWidth: 1.2,
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.textDeepBlue,
    padding: normalization(10),
    marginHorizontal: normalization(10),
    marginVertical: normalization(5),
  },
  buttonTextStyle: {
    color: COLORS.textWhite,
    fontWeight: '600',
    fontSize: 17,
  },
});
function mapState(state) {
  const {
    medicines,
    advices,
    followup,
    cheifComplaint,
    history,
    diagnosis,
    onExamination,
    investigation,
  } = state.prescriptionReducer;
  const {userDetails} = state.docAuthReducer;
  return {
    medicines,
    advices,
    followup,
    cheifComplaint,
    history,
    diagnosis,
    onExamination,
    investigation,
    userDetails,
  };
}
const actionCreators = {
  removeAll: () => dispatch =>
    dispatch({type: userConstants.REMOVE_PRESCTIPTION_ALL}),
};
export default connect(mapState, actionCreators)(Prescription);
