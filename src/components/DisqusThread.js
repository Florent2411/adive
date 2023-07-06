import React from 'react';
//import { Disqus } from 'disqus-react';
import { DiscussionEmbed } from 'disqus-react';

const DisqusThread = ({ shortname, title, url }) => {
    const disqusConfig = {
        url: url,
        identifier: 'adive-com',
        title: title,
        language: 'fr'
    };

    return <DiscussionEmbed shortname={shortname} config={disqusConfig} />;
};

export default DisqusThread;
