import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {React, useContext} from 'react';
import { ThemeContext } from '..';

function Code ({children, language}) {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className="code">
            <SyntaxHighlighter 
            language={language}
            style={isDark ? materialDark : materialOceanic} 
            wrapLines
            showLineNumbers>
                {children}
            
            </SyntaxHighlighter>

        </div>
    )
}
export default Code;