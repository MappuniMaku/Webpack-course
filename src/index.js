import Post from '@models/Post';
import Happiness from './assets/happiness.png';
import './styles/styles.css';

const post = new Post('Webpack Post Title', Happiness);

console.log('Post to string: ', post.toString());