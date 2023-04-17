import React, { useContext } from 'react';
import {View, ActivityIndicator} from 'react-native';

import { AuthContext } from '../context/auth';
import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';
import { UserPermitions } from '../base/Enums';
import ScreenLoad from '../components/ScreenLoad';

const Routes = () => {
  const {isUserLoaded, loading, user, screenLoading} = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#19882C" />
      </View>
    );
  }

  return (<>
    <ScreenLoad visivel={screenLoading}/>
    {isUserLoaded ?
      <AppRoutes
        mural={user.roles.includes(UserPermitions.MM)}
        refactory={user.roles.includes(UserPermitions.RM)}
        permitions={user.roles.includes(UserPermitions.PM)}
      /> :
      <AuthRoutes />
    }
  </>)
};

export default Routes;