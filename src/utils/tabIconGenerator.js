import Icon from "react-native-vector-icons/Ionicons";

const getTabIcon = ({focused,color,size},route) => {
    
        let iconName ;

        if (route.name === 'Landing') {

          iconName = focused ? 'home' : 'home-outline'
                        
        } else if (route.name === 'Categories') {

          iconName = focused ? 'grid' : 'grid-outline'
                        
        } else if (route.name === 'Profile') {

          iconName = focused ? 'person' : 'person-outline'
                        
        }

        return <Icon name={iconName} color={focused ? 'purple' : color} size={focused ? 30 : size} />

    }

export {getTabIcon}