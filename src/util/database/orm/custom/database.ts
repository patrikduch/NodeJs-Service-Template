import { createPool } from 'mysql2';

const pool = createPool({
	host: '193.105.159.179',
	user: 'admin',
	database: 'bachelorproject',
	password: '007kokot'
});


const getData = (query: string) => {

}




export default pool;
