import * as $ from 'jquery';
import Post from '@models/Post';
import Happiness from '@/assets/happiness.png';
import './babel.js'
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';

const post = new Post('Webpack Post Title', Happiness);

$('pre').addClass('code').html(post.toString());