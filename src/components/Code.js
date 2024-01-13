import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {React, useContext} from 'react';
import { ThemeContext } from '..';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'

function Code ({children, language}) {
    const {isDark} = useContext(ThemeContext);
    SyntaxHighlighter.registerLanguage('jsx', jsx);

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