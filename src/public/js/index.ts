// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css';

// font-awesome Regular・Brandsライブラリを使用する場合、onloadでライブラリを追加
import fontawesome from '@fortawesome/fontawesome'
import faSolid from '@fortawesome/fontawesome-free-solid'
//import faRegular from '@fortawesome/fontawesome-free-regular'
//import faBrands from '@fortawesome/fontawesome-free-brands'

import { requestSync } from './lib/XmlHttpRequestSync'
import '../css/style.css';
import '../css/navbar-top-fixed.css';

import vue from 'vue';

var vm = new vue({
    el: '#tickets',
    data: {
        items: [
            {
                name: 'テスト',
                no: 1
            }
        ]
    }
});