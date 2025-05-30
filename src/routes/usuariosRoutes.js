const { criarUsuario } = require("../controller/usuariosController");
const { executarSQL } = require("../services");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await executarSQL("SELECT * FROM usuarios;"));
});
router.post("/", async (req, res) => {
    res.send(await criarUsuario(req.body));
});
router.put("/:id", (req, res) => {
    res.send(`Edita um usuario com o id: ${req.params.id, req.body}`);
});
router.delete("/:id", (req, res) => {
    res.send(`Apaga um usuario com o id: ${req.params.id}`);
});

module.exports = router;