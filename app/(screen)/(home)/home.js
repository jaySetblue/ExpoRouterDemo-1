import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router';
import Header from '../../component/header/header';

const home = () => {
    const router = useRouter();
  return (
    <View style={{flex:1}}>
        <Header />
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Link href={'/product'}>Go to Settings</Link>
        {/* <Pressable onPress={() => router.push('/settings')}>
            <Text>Go to Settings</Text>
        </Pressable> */}
    </View>
    </View>
  )
}

export default home