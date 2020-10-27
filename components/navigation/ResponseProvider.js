import React, {createContext} from 'react'

export const ResponseContext = createContext({})

export const ResponseProvider = ({children}) => {
    const [res, setRes] = useState(null)

    return (
        <ResponseContext.Provider
            value= {{
                res,
                setRes,
            }}> 
                {this.props.children}
        </ResponseContext.Provider>
    )
}