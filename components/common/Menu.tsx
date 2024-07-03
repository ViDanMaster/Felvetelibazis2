import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'

function Menu() {
  return (
    <TouchableOpacity>
      <Feather name='menu' size={34} color='white'/>
    </TouchableOpacity>
  )
}

export default Menu