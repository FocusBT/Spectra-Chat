import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StreamChat } from 'stream-chat'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { useEffect, useState, useContext } from 'react';
import Navigation from './navigation';
import { MessageInput, ChannelList, Chat, OverlayProvider, Channel, MessageList } from 'stream-chat-expo';
import { Text } from 'react-native';
import AuthContext from './contexts/Authentication';



// import messaging from '@react-native-firebase/messaging'

//API key for stream
const API_KEY = "tct37jrfx9w9"
const client = StreamChat.getInstance(API_KEY)



export default function App() {

  const [isReady, setIsReady] = useState(false);
  // const [selectedChannel, setselectedChannel] = useState<any>(null);

  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  const [userId, setUserId] = useState('')
  const [currentWindow, setCurrentWindow] = useState('')
  useEffect(() => {
    return () => client.disconnectUser();
  }, [])






  if (!isLoadingComplete) {
    return null;
  } else {
    return (

      <SafeAreaProvider>
        <AuthContext.Provider value={{ userId: userId, setUserId: setUserId,currentWindow: currentWindow,setCurrentWindow: setCurrentWindow }}>
          <OverlayProvider>
            <Chat client={client}>
              <Navigation colorScheme="light" />
            </Chat>
          </OverlayProvider>
        </AuthContext.Provider>
        {/* <StatusBar /> */}
      </SafeAreaProvider>
    );
  }
}
