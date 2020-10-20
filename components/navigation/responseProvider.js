import React, {createContext} from 'react'

export const ResponseContext = createContext({})

export const responseProvider = ({children}) => {
    const [res, setRes] = useState([])

    return (
        <ResponseContext.Provider
            value= {{
                res,
                setRes,
            }}/>
    )
}