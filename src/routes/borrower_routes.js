const express = require("express")
const BorrowerController = require("../controllers/borrower_controllers")

const BorrowerRouter = express.Router()

BorrowerRouter.get("/borrowers", BorrowerController.getAll)
BorrowerRouter.get("/borrower/:id",BorrowerController.getById)
BorrowerRouter.post("/borrower", BorrowerController.create)
BorrowerRouter.put("/borrower/:id", BorrowerController.update)
BorrowerRouter.delete("/borrower/:id", BorrowerController.delete)


module.exports = BorrowerRouter