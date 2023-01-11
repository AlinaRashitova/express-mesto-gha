const router = require('express').Router();
const {
  getCards, createCard, getCardById, likeCard, dislikeCard,
} = require('../controllers/cards');

router.get('/cards', getCards);
router.post('/cards', createCard);
router.put('/cards/:cardId/likes', likeCard);
router.delete('/cards/:cardId/likes', dislikeCard);
router.delete('/cards/:cardId', getCardById);

module.exports = router;
