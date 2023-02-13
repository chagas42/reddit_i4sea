import { StatusBar } from 'expo-status-bar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useMemo } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { PostItem } from '../components/PostItem';
import { StackParamList } from '../routes';
import { useDispatch, useSelector } from 'react-redux';
import { allPosts } from '../store/fetchActions';

type HomeScreenRouteProp = RouteProp<StackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation }:Props) {
  const posts = useSelector((state) => state.posts);
	const dispatch = useDispatch();

  function handleAction (url:string, title: string) {
    navigation.navigate('WebView', {url: `https://reddit.com${url}`, title: title })
  }

  const _renderitem = ({item}) => <PostItem post={item.data} 
  onPress={() => handleAction(item.data.permalink, item.data.title)} 
  />;
  const memoizedValue = useMemo(() => _renderitem, [posts]);

	useEffect(
		() => {
			dispatch(allPosts());
		},
		[ posts, dispatch ]
	);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style='auto'
      />
      <Header/>
      <View style={styles.headerArea}>
      </View>
      <FlatList
        data={posts}
        renderItem={memoizedValue}
        keyExtractor={item => item.data.id}
        ItemSeparatorComponent={() => <View style={{ height: 10}} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerArea: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
