import numeral from 'numeral';
import {getCats} from "./api/cats";
import './scss/index.scss';


const value = numeral(1000).format('$0,0.00');
console.log(`Value is ${value}`);

getCats().then(result => console.log(result));
