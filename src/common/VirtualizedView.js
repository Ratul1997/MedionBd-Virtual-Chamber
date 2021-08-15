/** 
 name: VirtualizedView
 function: This is a FlatList Component for nested FlatList
**/

import React from 'react';
import {FlatList} from 'react-native';

export default function VirtualizedView(props) {
  /*

  Getting properties from navigation
  children: children in the routing component (React Children)

  */
  const {children} = props;
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      {...props}
      listKey={(item, index) => 'D' + index.toString()}
      renderItem={null}
      ListHeaderComponent={() => <React.Fragment>{children}</React.Fragment>}
    />
  );
}
