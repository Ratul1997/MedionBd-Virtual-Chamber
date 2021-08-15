/** 
 name: Articles
 function: This is a modal component for login
**/

import React from 'react';
import {FlatList} from 'react-native';

import ArticleComponent from './ArticleComponent';

export default function Articles(props) {
  /*

  Getting properties from navigation

  variables-
  article : article Data (Array of Objects)
  navigation: navigation properties

  */
  const {article, navigation} = props;

  /*
  name: renderItem
  function: for rendering items of Array 
  */
  const renderItem = ({item, index}) => (
    //ArticleComponent for viewing an item
    <ArticleComponent item={item} navigation={navigation} />
  );

  return (
    <>
      <FlatList
        data={article}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        key={({item, index}) => index.toString()}
      />
    </>
  );
}
