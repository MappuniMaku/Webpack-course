import * as $ from 'jquery';
import Post from '@models/Post';
import Happiness from '@/assets/happiness.png';
import './styles/styles.css';

const post = new Post('Webpack Post Title', Happiness);

$('pre').html(post.toString());