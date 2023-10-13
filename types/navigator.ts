import type { NativeStackNavigationOptions } from '@react-navigation/native-stack/lib/typescript/src/types'
import type { ComponentType, FC } from 'react'
import type EventProps from './events'
import type PlaceProps from './place'
import type UserProps from './user'

export type Router = {
  params?: {
    user?: UserProps
    eventId?: EventProps['id']
    placeId?: PlaceProps<unknown>['id']
  }
}
export type HeaderScreenProps = {
  left?: boolean
  right?: boolean
  title?: NativeStackNavigationOptions['headerTitle']
}
export enum RootStack {
  AccountScreen = 'AccountScreen',
  HomeScreen = 'HomeScreen',
  SignInScreen = 'SignInScreen',
  EventScreen = 'EventScreen',
  EventByIdScreen = 'EventByIdScreen',
  PlaceScreen = 'PlaceScreen',
  PlaceByIdScreen = 'PlaceByIdScreen',
  NewPlaceScreen = 'NewPlaceScreen'
}
export type ScreenTypeProps<T> = {
  component: FC<T> | ComponentType<T>,
  options?: Partial<NativeStackNavigationOptions>
}
export type RoutesScreens = {
  [key in RootStack]: ScreenTypeProps<undefined>['component']
}
export type NavigatorProps = {
  navigation?: any
  route?: Router
}
export type ScreenType = ScreenTypeProps<undefined> & {
  name: string,
}
export type TabType = ScreenTypeProps<undefined> & {
  label: string
  iconName: string
  navigateTo: keyof typeof RootStack
}
