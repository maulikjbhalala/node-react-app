import { useEffect } from 'react'


//hook function name should start with use- parameter
//we can pass parameters also
const useDocTitleHook = (count) => {

    useEffect(() => {
        document.title = 'count' + ' ' + count;
    }, [count])

}

export default useDocTitleHook;
