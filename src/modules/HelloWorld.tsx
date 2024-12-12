import { Pressable, Text, View } from "react-native"

interface HelloWorldProps {
    name: string
    description: string
}

function HelloWorld({ description, name }: HelloWorldProps) {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        }}>
            <Text style={{
                color: '#fff',
                fontFamily: 'Arial',
                fontSize: 50,
            }}>Hello {name}!</Text>
            <Text style={{
                color: '#fff',
            }}>{description}</Text>

            <Pressable
                onPress={() => alert('Hello World!')}
                style={{
                    backgroundColor: 'blue',
                    padding: 10,
                    borderRadius: 5,
                    marginTop: 10,
                }}>
                <Text style={{
                    color: '#fff',
                }}>Press me</Text>
            </Pressable>

        </View>
    )
}

export default HelloWorld