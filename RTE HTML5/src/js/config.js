/**
 * Created by bastuijnman on 02/03/16.
 */
define('application/config', [
    'rofl/config',
    'rofl/lib/utils',
    'rofl/media/source',
    'rofl/lib/object.extend'
], function (
    Config,
    Utils,
    MediaSource
) {
    'use strict';

    var config = {
        route: {
            _default: {
                method: 'push',
                container: 'main',
                component: 'application/components/initialisation'
            },

            initialisation: {
                method: 'push',
                container: 'main',
                component: 'application/components/initialisation'
            },

            promo: {
                method: 'push',
                container: 'main',
                component: 'application/components/promo'
            },

            menu: {
                method: 'show',
                container: 'menu',
                component: 'components/side-menu/src/js/component'
            },

            faq: {
                method: 'push',
                container: 'main',
                component: 'application/components/faq'
            },

            account: {
                method: 'push',
                container: 'main',
                component: 'application/components/account'
            },

            login: {
                method: 'push',
                container: 'main',
                component: 'application/components/login'
            },

            detail: {
                method: 'push',
                container: 'main',
                component: 'application/components/detail'
            },

            player: {
                method: 'push',
                container: 'main',
                component: 'application/components/player'
            },

            moreInfoModal: {
                method: 'show',
                container: 'modal',
                component: 'application/modals/moreinfo'
            },

            browse: {
                method: 'show',
                container: 'main',
                component: 'application/components/browse'
            },

            episodeSelector: {
                method: 'push',
                container: 'main',
                component: 'application/components/serie'
            },

            epgModal: {
                method: 'show',
                container: 'modal',
                component: 'application/modals/epg'
            },

            dialog: {
                method: 'show',
                container: 'modal',
                component: 'application/components/dialog'
            },

            networkerror: {
                method: 'show',
                container: 'modal',
                component: 'application/modals/networkerror'
            },

            search: {
                method: 'push',
                container: 'main',
                component: 'application/components/search'
            },

            watchlist: {
                method: 'push',
                container: 'main',
                component: 'application/components/browse/personal-list',
                args: {
                    id: 'watchlist'
                }
            },

            favourites: {
                method: 'push',
                container: 'main',
                component: 'application/components/browse/personal-list',
                args: {
                    id: 'favourites'
                }
            },

            friends: {
                method: 'push',
                container: 'main',
                component: 'application/components/friends'
            },

            history: {
                method: 'push',
                container: 'main',
                component: 'application/components/history'
            },

            purchaseHistory: {
                method: 'push',
                container: 'main',
                component: 'application/components/purchaseHistory'
            },

            selectProfile: {
                method: 'push',
                container: 'main',
                component: 'application/components/selectprofile'
            },

            profilePin: {
                method: 'push',
                container: 'main',
                component: 'application/components/profilepin'
            },

            pindialog: {
                method: 'show',
                container: 'modal',
                component: 'application/modals/pindialog'
            },

            passworddialog: {
                method: 'show',
                container: 'modal',
                component: 'application/modals/passworddialog'
            },

            mediaLanguageMenu: {
                method: 'show',
                container: 'modal',
                component: 'application/modals/medialanguagemenu'
            },

            connectcode: {
                method: 'push',
                container: 'main',
                component: 'application/components/connectcode'
            },

            connect: {
                method: 'push',
                container: 'main',
                component: 'application/components/connect'
            }
        },
        graylog: {
            enabled: true,
            endpoint: 'https://graylog.24imedia.tv'
        },
        lg: {
            exitLiveTV: false
        },
        iconFont: {
            characters: {
                play: '&#xe01a;',
                pause: '&#xe01b;',
                fastForward: '&#xe01c;',
                rewind: '&#xe019;',
                nextItem: '&#xe022;',
                moreOptions: '&#xe000;',
                previousItem: '&#xe023;',
                startOver: '&#xe025;',
                subtitles: '&#xe01e;'
            }
        },
        timecheck: {
            disabled: false,
            endpoint: 'http://time.24i.com'
        },
        filterTabs: [
            {name: 'all', type: 'all'},
            {name: 'movie', type: 'mediaType'},
            {name: 'serie', type: 'mediaType'},
            {name: 'episode', type: 'mediaType'},
            {name: 'broadcast', type: 'mediaType'},
            {name: 'clip', type: 'mediaType'},
            {name: 'extra', type: 'mediaType'}
        ],
        title: 'RTÉ Player',
        version: '2.1.0',
        pagingOffset: 5,
        dashboardNames: [
            'home',
            'dashboard'
        ],
        defaultAudio: 'English',
        audioLabels: {
            'en': 'English',
            'ad': 'Audio Description',
            'ga': 'Gaelic'
        },
        seeker: {
            interval: 1000
        },
        ads: {
            preferredFormat: MediaSource.MIME_TYPES.mp4,
            lowerBitrate: true
        },
        deeplinking: {
            id: 'showid'
        }
    };

    Utils.each(antie.framework.deviceConfiguration.layouts, function (layout) {
        layout.module = layout.module.replace('appui/', '');
    });

    antie.applicationConfiguration = Object.deepExtend(
        antie.applicationConfiguration,
        config
    );

    return Config;

});