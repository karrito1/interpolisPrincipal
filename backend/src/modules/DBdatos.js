import MySQL from "mysql2";
let cnx;
try {
  cnx = MySQL.createConnection({
    host: "localhost",
    user: "root",
    database: "interpolice",
    port: "3306",
  });
  //   console.log("cnx exitosa!");
} catch (error) {
  console.log(`Ah ocurrido un error en la cnx: ${error.message}`);
}
export { cnx };
