import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';
import LabelOfAComponent from '../../../common/LabelOfAComponent';
import VirtualizedView from '../../../common/VirtualizedView';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 10, 4, 56, 87, 90],
    },
    {
      data: [30, 90, 67, 54, 10, 2],
    },
  ],
};
const pieChartData = [
  {
    name: 'Pending',
    amount: 3000,
    color: 'rgba(246, 113, 9, 0.3)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Get',
    amount: 2000,
    color: 'rgba(9, 152, 70,0.7)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

export default function Revenue(props) {
  const {navigation} = props;
  const chartConfig = {
    backgroundColor: 'white',
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 1) => `rgba(126, 2, 146, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };
  const width = Dimensions.get('window').width * 0.95;
  const height = 220;
  const labelStyle = {
    color: chartConfig.color(),
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
  };
  const graphStyle = {
    marginVertical: 8,
    padding: 10,
    ...chartConfig.style,
    alignSelf: 'center',
  };

  const onBackNavigate = () => {
    navigation.goBack();
  };

  return (
    <>
      <AllPurposeHeader title="Statistics" onBackNavigate={onBackNavigate} />
      <VirtualizedView>
        <LabelOfAComponent title="Patient Graph" />
        <BarChart
          width={width}
          height={height}
          data={data}
          chartConfig={chartConfig}
          style={graphStyle}
        />

        <LabelOfAComponent title="Revenue" />
        <View
          style={{
            backgroundColor: 'white',
            marginVertical: 8,
            marginHorizontal: 10,
            borderRadius: 16,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            paddingTop: normalization(10),
          }}>
          <Text>Total Revenue: 8000</Text>
          <Text>Pending: 3000</Text>
          <Text>Get: 2000</Text>
          <PieChart
            data={pieChartData}
            height={height}
            width={width}
            chartConfig={chartConfig}
            accessor="amount"
            style={graphStyle}
          />
        </View>
      </VirtualizedView>
    </>
  );
}
