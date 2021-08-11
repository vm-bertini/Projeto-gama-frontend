import React, {useState, useEffect} from 'react'
import useApi from '../../helpers/BookAPI'

export const context = React.createContext()

const Store = ({children}) => {
    const [state, setState] = useState(null)
    const api = useApi()
    useEffect(() => {
        api.getUserInfo().then(res => {
            setState(res)
        }).catch(err => {
        })

    },[api])


    return (
        <context.Provider value={state}>
            {children}
        </context.Provider>
    )
}

export default Store