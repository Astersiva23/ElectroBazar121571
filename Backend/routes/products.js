import express from 'express';
import { deleteProductDetails,
    updateProductDetails,
    getProductDetails,
    getProducts,
    newProducts, 
    createProductreview,
    getProductReviews,
    deleteReview,canUserReview} from '../controllers/productControllers.js';
import { authorizeRoles, isAuthentictedUser } from '../middlewares/authh.js';
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(isAuthentictedUser,authorizeRoles('admin'),newProducts);

router.route("/products/:id").get(getProductDetails);

router.route("/admin/products/:id").put(isAuthentictedUser,authorizeRoles('admin'),updateProductDetails);
router.route("/admin/products/:id").delete(isAuthentictedUser,authorizeRoles('admin'),deleteProductDetails);
router.route("/reviews")
.get(isAuthentictedUser,getProductReviews)
.put(isAuthentictedUser,createProductreview);


router.route("/admin/reviews").delete(isAuthentictedUser,authorizeRoles('admin'),deleteReview)
router.route("/can_review").get(isAuthentictedUser,canUserReview);

export default router;






