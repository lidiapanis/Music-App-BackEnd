import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import { useContext } from "react";
import UserContext from "../../context/user";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


export default function Wrapper() {
    const userData = useContext(UserContext)
    return (
        userData.user != null ? <Home /> : (
            <Tab.Navigator>
                <Tab.Screen name="Entrar" component={Login} />
                <Tab.Screen name="Registrar" component={Register} />
            </Tab.Navigator>
        )
    )
}