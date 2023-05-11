import { View } from 'react-native'
import {Box, Text, Image, Progress} from 'native-base'

export default function Tracker({intake, goal, setIntake}) {
    return (
        <Box height={400} width="100%" alignItems="center" justifyContent="center">
            <View 
            onTouchStart={e => this.touchY = e.nativeEvent.pageY}
            onTouchEnd={e => {
                const swipeY = Math.round(this.touchY - e.nativeEvent.pageY)
                if(swipeY > 20 || swipeY < -20) { setIntake(intake + 5 * swipeY)}
            }}>
                
            <Image 
            size={200}
            borderRadius={100}
            borderColor={"blue.300"}
            borderWidth={8}
            mb={6}
            source={{
                uri: 'https://wallpaperaccess.com/full/380161.jpg'
            }}
                alt= "A splash of water"
            />
            </View>
            <Text color= "whitesmoke"fontSize="2xl" fontWeight="900">{intake} ml
            </Text>
            <Box width="90%" maxW="400" marginTop={8}>
                <Progress size="2xl" colorScheme="blue" value={intake} max={goal} />


            </Box>
        </Box>
    )
}