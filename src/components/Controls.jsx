import {Box, AddIcon, Text, Button} from "native-base"

export default function Controls ({intake, setIntake}) {
    return(
        <Box width="100%" alignItems="center" justifyContent="center">
            <Text color="whitesmoke" fontSize="xl" marginBottom={4}>
                <AddIcon color="whitesmoke" /> {' '}
                Add a portion of water 
            </Text>
            <Box flexDir="row" mb={6} width="80%" justifyContent="space-around">
                <Button colorScheme="blue" size="lg" borderRadius={16} paddingLeft={6} paddingRight={6} onPress={() => setIntake(intake + 500)}>

                    One Cup</Button>
                <Button colorScheme="blue" size="lg" borderRadius={16} paddingLeft={6} paddingRight={6} onPress={() => setIntake(intake + 1000)}>
                    One Bottle</Button>
            </Box>
            <Button colorScheme="gray" pl={8} pr={8} borderRadius={16} onPress={() => setIntake(0)} >
                <Text color="whitesmoke" fontSize="lg" fontWeight="500"> 🚫Reset</Text>
            </Button>
        </Box>
    )
}