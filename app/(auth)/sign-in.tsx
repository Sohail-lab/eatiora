import {View, Text, Button, Alert} from 'react-native'
import React, {useState} from 'react'
import {Link, router} from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import {signIn} from "@/lib/appwrite";
import * as Sentry from "@sentry/react-native";

const SignIn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({email: '', password: ''});

    const submit = async () => {

        const { email, password } = form;

        if(!email || !password) {
            Alert.alert('Error!', 'Please enter valid email and password');
            return;
        }

        setIsSubmitting(true);

        try {
            await signIn({
                email,
                password,
            });

            // Alert.alert('Success', 'User logged in successfully');
            router.replace('/');
        }
        catch (e : any) {
            Alert.alert('Error', e.message);
            Sentry.captureEvent(e);
        }
        finally {
            setIsSubmitting(false);
        }
    };

    return (
        <View className="gap-10 bg-white rounded-lg p-5 mt-5">
            <Button title='Homepage' onPress={ () => router.push('/') } />
            <CustomInput
                placeholder="Enter your email"
                value={form.email}
                onChangeText={(text) => setForm((prev) => ({
                    ...prev,
                    email: text
                }))}
                label="Email"
                keyboardType="email-address"
            />
            <CustomInput
                placeholder="Enter your password"
                value={form.password}
                onChangeText={(text) => setForm((prev) => ({
                    ...prev,
                    password: text
                }))}
                label="Password"
                secureTextEntry={true}
            />
            <CustomButton
                title="Sign In"
                isLoading={isSubmitting}
                onPress={submit}
            />

            <View className="flex justify-center mt-5 flex-row gap-2">
                <Text className="base-regular text-gray-100">
                    Don't have an account?'
                </Text>
                <Link href="/sign-up" className="base-bold text-primary">
                    Sign Up
                </Link>
            </View>
        </View>
    )
}
export default SignIn
