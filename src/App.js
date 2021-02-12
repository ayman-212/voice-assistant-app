import React, { useState, useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from './Components/NewsCards/NewsCards';
import IntroCards from './Components/InfoCards/InfoCards';

const App = () => {
    const [newsArticles, setNewsArticles] = useState(null);

    useEffect(() => {
        alanBtn({
            key: '692ac4c6806c911ff0188fa10729f6b32e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({ command, articles }) => {
                if (command === 'newsHeadlines') {
                    setNewsArticles(articles)
                    console.log(articles)
                }
            }
        });
    }, []);

    return (
        <div >
            <h1>Alan AI news application</h1>
            {newsArticles ?
                <NewsCards articles={newsArticles} />
                :
                <IntroCards />
            }
        </div>
    );
}

export default App;
