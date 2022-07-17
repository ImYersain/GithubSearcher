import { useState, useEffect } from 'react';

export function useDebounce(value: string, delay = 300): string {
    const [debounced, setDebounced] = useState(value)
    
    useEffect(() => {
        const handler = setInterval(() => setDebounced(value), delay)

        return () => clearInterval(handler)
    }, [value, delay])

    return debounced
}