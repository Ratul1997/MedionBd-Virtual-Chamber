import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {connect} from 'react-redux';

import Blog from './component/Blog';
import BlogDetails from './component/Blog/BlogDetails';
import AppointMents from './component/DoctorProfile/AppointMents';
import Revenue from './component/DoctorProfile/Revenue';
import CustomDrawerContent from './CustomDrawerContent';
import DoctorSignUp from './component/Auth/DoctorSignUp';
import LoginDoc from './component/Doctor/Auth/LoginDoc';
import HomePageDoc from './component/Doctor/HomePageDoc';
import DocHistory from './component/Doctor/DocHistory';
import Prescription from './component/Doctor/Prescription';
import RXComponent from './component/Doctor/Prescription/RX/RXComponent';
import AdviceComponent from './component/Doctor/Prescription/Advice/AdviceComponent';
import FollowUpComponent from './component/Doctor/Prescription/FollowUp/FollowUpComponent';
import CheifComplaintComponent from './component/Doctor/Prescription/CheifComplaint/CheifComplaintComponent';
import HistoryComponent from './component/Doctor/Prescription/History/HistoryComponent';
import DiagnosisComponent from './component/Doctor/Prescription/Diagnosis/DiagnosisComponent';
import OnExaminationComponent from './component/Doctor/Prescription/OnExamination/OnExaminationComponent';
import InvestigationComponent from './component/Doctor/Prescription/Investigation/InvestigationComponent';
import VideoCall from './component/VideoCall';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const BlogStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="BlogDetails" component={BlogDetails} />
    </Stack.Navigator>
  );
};

const PrescriptionStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Prescription"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Prescription" component={Prescription} />
      <Stack.Screen name="Medicines" component={RXComponent} />
      <Stack.Screen name="Advices" component={AdviceComponent} />
      <Stack.Screen name="Follow" component={FollowUpComponent} />
      <Stack.Screen name="Complaints" component={CheifComplaintComponent} />
      <Stack.Screen name="History" component={HistoryComponent} />
      <Stack.Screen name="Diagnosis" component={DiagnosisComponent} />
      <Stack.Screen name="OnExamination" component={OnExaminationComponent} />
      <Stack.Screen name="Inv" component={InvestigationComponent} />
    </Stack.Navigator>
  );
};

const DoctorProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DocTorHome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="DoctorRevenue" component={Revenue} />
      <Stack.Screen name="AppointMents" component={AppointMents} />
      <Stack.Screen name="DocTorHome" component={HomePageDoc} />
      <Stack.Screen name="DocHistory" component={DocHistory} />
      <Stack.Screen name="PresCriptionStack" component={PrescriptionStack} />
      <Stack.Screen name="Video Call" component={VideoCall} />
    </Stack.Navigator>
  );
};

const DoctorLoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginDoc} />
      <Stack.Screen name="SignUp" component={DoctorSignUp} />
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
    </Stack.Navigator>
  );
};
const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="DoctorStackHome"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Doctor Profile" component={DoctorProfileStack} />
      <Drawer.Screen name="Blogs" component={BlogStack} />
    </Drawer.Navigator>
  );
};
function AppNavigation(props) {
  const {loggedIn} = props;
  return loggedIn ? <DrawerNav /> : <DoctorLoginStack />;
}
function mapState(state) {
  const {userDetails} = state.userReducer;
  const {loggedIn} = state.authReducer;
  return {userDetails, loggedIn};
}
const actionCreators = {};
export default connect(mapState, actionCreators)(AppNavigation);
