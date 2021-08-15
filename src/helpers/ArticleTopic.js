const ArticleTopic = [
  {title: 'All Blogs', key: '1'},
  {title: 'স্বাস্থ্য পরামর্শ', key: '2'},
  {title: 'খাদ্য ও পুষ্টি', key: '3'},
  {title: 'নারী স্বাস্থ্য', key: '4'},
  {title: 'শিশুর যত্ন', key: '5'},
  {title: 'করোনা', key: '6'},
  {title: 'ফিটনেস', key: '7'},
  {title: 'সৌন্দর্য চর্চা', key: '8'},
];

export default ArticleTopic;

const Complaint = [
  {
    type: 'Pain',
    subtype: {
      type1: 'Left Knee Joint',
      type2: 'Left Little Toe',
    },
  },
  {
    type: 'Fever',
    subtype: {
      type1: 'High Grade',
      type2: 'Low Grade',
    },
  },
  {
    type: 'Anorexia',
  },
];

const Medicine = [
  {
    generic_Name: 'Nicotinamide',
    medicines: [
      {
        type: 'Tab',
        brand_name: 'Xinc B',
        company_Name: 'Eskayef Bangladesh LTD,Mirpur',
        suggestions: [
          {
            dose1: 1,
            dose2: 0,
            dose3: 1,
            day: 30,
          },
          {
            dose1: 1,
            dose2: 0,
            dose3: 1,
            day: 15,
          },
        ],
      },
      {
        type: 'Syrp',
        brand_name: 'Xinc B',
        company_Name: 'Eskayef Bangladesh LTD,Mirpur',
        suggestions: [
          {
            dose1: 1,
            dose2: 0,
            dose3: 1,
            day: 30,
          },
          {
            dose1: 1,
            dose2: 0,
            dose3: 1,
            day: 15,
          },
        ],
      },
    ],
  },
];
