import { useTheme } from "@src/context/ThemeContext"
import React from "react"
import { Pressable, Text, View } from "react-native"

interface HelloWorldProps {
    name: string
    description: string
}

function HelloWorld({ description, name }: HelloWorldProps) {
    const { theme } = useTheme()
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            padding: 20,
        }}>
            <Text style={{
                color: theme.colors.gray0,
                fontFamily: 'Arial',
                fontSize: 50,
            }}>Hello {name}!</Text>
            <Text style={{
                color: theme.colors.gray200,
            }}>{description}</Text>

            <Pressable
                onPress={() => alert('Hello World!')}
                style={{
                    backgroundColor: theme.colors.accentLight,
                    padding: 10,
                    borderRadius: 5,
                    marginTop: 10,
                }}>
                <Text style={{
                    color: theme.colors.gray0,
                }}>Press me</Text>
            </Pressable>
        </View>
    )
}

export default HelloWorld