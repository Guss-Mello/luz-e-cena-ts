import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const useDarkMode = () => {

    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // `mounted` é false no servidor e na renderização inicial do cliente.
    // `isDarkMode` será `false` até que o componente seja montado, evitando o erro de hidratação e o crash.
    const isDarkMode = mounted && resolvedTheme === 'dark';

    // Retornamos também `mounted` e `resolvedTheme` para cobrir os casos de uso do outro hook
    return { isDarkMode, setTheme, mounted, resolvedTheme };
}

export default useDarkMode;