const customExpress = require("./config/customExpress");
const PORT = process.env.PORT || 3000;

// Testa conexão com o pool


const initApp=()=>{
  const app = customExpress();
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}
initApp();