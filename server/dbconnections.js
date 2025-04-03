import mysql from 'mysql2/promise';

try {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    port: 3306,
    password: 'Ritesh@123',
  });
  
  console.log('Connected to MySQL database successfully!');
  
 
  const [rows] = await connection.execute('SELECT 1 + 1 AS result');
  console.log('Query result:', rows[0].result);
  

  await connection.end();
  
} catch (err) {
  console.log('Database connection error:', err);
}