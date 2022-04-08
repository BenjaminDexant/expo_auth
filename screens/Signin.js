import React from "react";

import { StatusBar } from "expo-status-bar";

import { View, Image, Text, TextInput } from "react-native";

import { Formik } from "formik";

import { Feather } from '@expo/vector-icons';

import { Colors, Container, Logo, Title, Form } from "../components/styles.js";

const MyTextInput = ({ label, icon, ...props}) => {
    return (
        <View>
            <View style={Form.icon}>
                <Feather name={icon} size={30} color={Colors.secondary} />
            </View>
            <Text style={Form.label}>
                {label}
            </Text>
            <TextInput style={Form.input} {...props} />
        </View>
    );
}

const Signin = () => {

    const handleOnSubmit = (values) => {
        console.log(values);
    }

    return (
        <View style={Container.main}>
            <StatusBar style="auto" />
            <View style={Container.inner}>
                <Image style={Logo.main} resized="cover" source={require("../assets/images/road.jpg")} />
                <Text style={Title.main}>Signin</Text>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={handleOnSubmit}
                >
                    {({ handleChange, handleBlur, values }) => (
                        <View style={Form.main}>
                            <MyTextInput
                                label="Email"
                                icon="mail"
                                placeholder="Email"
                                placeholderTextColor={Colors.grey}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="********"
                                placeholderTextColor={Colors.grey}
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                                secureTextEntry={true}
                            />
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
}

export default Signin;