/**
 * Created by ngm on 2018/4/26.
 */
const path = require( 'path' );

const cwd = process.cwd();
const pkg = require( path.resolve( cwd, 'package.json' ) );
const paths = require( path.resolve( cwd, 'config', 'paths.js' ) );

const bsProxyPort = process.env.PORT || '9525';
const bsPort = parseInt( bsProxyPort, 10 ) + 1;
const bsUIPort = bsPort + 1;

module.exports = {

    banner: [
        '/*!',
        ` * ${ pkg.name } - ${ pkg.description }`,
        ` * @version v${ pkg.version }`,
        ` * @link ${ pkg.homepage }`,
        ' * hi ngm.',
        ' */',
        ''
    ].join('\n'),

    paths: {
        source: {
            frame: path.resolve( cwd, 'frame' ),
            views: path.resolve( cwd, 'views' ),
            components: path.resolve( cwd, 'components' ),
            javascript: path.resolve( cwd, 'public/js' ),
            css: path.resolve( cwd, 'public/css' ),
            image: path.resolve( cwd, 'public/image/**' ),
            bower: path.resolve( cwd, 'public/bower_components/**' ),
            public: path.resolve( cwd, 'public/js/public/**' ),
            store: path.resolve( cwd, 'store/**' ),
            common: path.resolve( cwd, 'common/**' )
        },
        output: paths,
        clean: [
            path.resolve( cwd, 'build' )
        ]
    },

    files: {
        frame: {
            src: 'html.jsx',
            dist: 'html.js'
        },
        components: {
            src: 'index.js',
            dist: 'knowBase.js'
        },
        store: {
            src: 'index.js',
            dist: 'store.js'
        }
    },

    module: {
        frame: {
            global: 'UIApp'
        },
        views: {
            global: 'UIPage'
        },
        components: {
            global: 'KnowBase',
            exports: 'knowBase'
        },
        store: {
            global: 'index',
            exports: 'store'
        }
    },

    debug: {
        browserSync: {
            proxyPort: bsProxyPort,
            port: bsPort,
            uiPort: bsUIPort,
            reloadDelay: 500
        }
    }

};