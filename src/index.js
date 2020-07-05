import * as $ from 'jquery';
import Post from '@models/Post';
import Happiness from '@/assets/happiness.png';
import './styles/styles.css';
import './styles/less.less';

const post = new Post('Webpack Post Title', Happiness);

$('pre').addClass('code').html(post.toString());