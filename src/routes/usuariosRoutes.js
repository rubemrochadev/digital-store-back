const { criarUsuario, buscarUsuarios, buscarUmUsuario, editarUsuario, apagarUsuario } = require("../controller/usuariosController");

// const { executarSQL } = require("../services");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await buscarUsuarios());
});
router.get("/:id", async (req, res) => {
    res.send(await buscarUmUsuario(req.params.id));
});
router.post("/", async (req, res) => {
    res.send(await criarUsuario(req.body));
});
router.put("/:id", async (req, res) => {
    res.send(await editarUsuario(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
    res.send(await apagarUsuario(req.params.id));
});

module.exports = router;