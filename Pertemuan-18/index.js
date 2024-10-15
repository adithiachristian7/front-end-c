// index.js
import { helloWorld as hello, messages } from './helloworld.js';
import {messages as pesan} from "./helloworld.js"
import { ambilDataUser } from './fetchData.js';
import { DataUserAsync } from './asyncAwaitData.js';
import { DataUserAxios } from './axiosData.js';




pesan();
ambilDataUser();
DataUserAsync();
DataUserAxios();
