import React from 'react';

const page = {
    title: 'D3show',
    css: [
      "/css/visualization/d3show.css"
    ],
    js: [
      "/bower_components/d3/d3.min.js",
      "/js/visualization/textures.min.js",
      "/js/visualization/d3show.js"
    ]
};

class D3show extends React.Component {
    render() {
        return (
            <div>
               111
            </div>
        );
    }
}

D3show.UIPage = page;
export default D3show;
