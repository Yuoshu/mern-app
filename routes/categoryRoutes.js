import express from 'express'
import {categoryControlller,
        createCategoryController,
        deleteCategoryCOntroller,
        singleCategoryController,
        updateCategoryController,
    } from './../controllers/categoryController.js'
import {requireSignIn, isAdmin} from './../middlewares/authMiddlewares.js'

const router = express.Router()



router.post('/create-category', requireSignIn, isAdmin, createCategoryController )

router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
  );

router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router
