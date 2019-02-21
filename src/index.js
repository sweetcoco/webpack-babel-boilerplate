import HelloWorld from 'components/HelloWorld';
import 'main.css';

const main = async () => {
    HelloWorld();
}

main().then(() => console.log('Started'));