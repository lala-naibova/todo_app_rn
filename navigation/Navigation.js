import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import CreateScreen from '../screens/CreateScreen'
import EditScreen from '../screens/EditScreen'
import IndexScreen from '../screens/IndexScreen'
import ShowScreen from '../screens/ShowScreen'

const navigator = createStackNavigator({
    Create : CreateScreen,
    Edit :EditScreen,
    Show: ShowScreen,
    Index:IndexScreen
},{
    initialRouteName: 'Index',
    defaultNavigationOptions:{
        title:'To do lists'
    }
});

export default createAppContainer(navigator);

