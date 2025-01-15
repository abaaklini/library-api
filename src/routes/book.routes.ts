import { Router } from 'express';
import { createBook, getBooks, getBookById, updateBook, deleteBook } from '../controllers/book.controller';

const router = Router();

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Cria um novo livro
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - publisher
 *               - year
 *               - isbn
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               publisher:
 *                 type: string
 *               year:
 *                 type: integer
 *               isbn:
 *                 type: string
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *       400:
 *         description: Erro na criação do livro
 */
router.post('/books', createBook);

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Obtém a lista de livros
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Lista de livros
 *       500:
 *         description: Erro ao obter os livros
 */
router.get('/books', getBooks);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Obtém um livro pelo ID
 *     tags: [Books]
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: ID do livro
 *     schema:
 *       type: string
 *     responses:
 *       200:
 *         description: Livro encontrado
 *       404:
 *         description: Livro não encontrado
 *       500:
 *         description: Erro ao obter o livro
 */
router.get('/books/:id', getBookById);

/**
 * @swagger
 * /books/{id}:
 *  put:
 *      summary: Atualiza um livro pelo ID
 *      tags: [Books]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - title
 *                          - author
 *                          - publisher
 *                          - year
 *                          - isbn
 *                      properties:
 *                          title:
 *                              type: string
 *                          author:
 *                              type: string
 *                          publisher:
 *                              type: string
 *                          year:
 *                              type: integer
 *                          isbn:
 *                              type: string
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: ID do livro
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: Livro atualizado
 *          404:
 *              description: Livro não encontrado
 *          500:
 *              description: Erro ao atualizar o livro
 */

router.put('/books/:id', updateBook);

/**
 * @swagger
 * /books/{id}:
 *      delete:
 *          summary: Remove um livro pelo ID
 *          tags: [Books]
 *          parameters:
 *                - in: path
 *                  name: id
 *                  required: true
 *                  description: ID do livro
 *          schema:
 *              type: string
 *          responses:
 *              204:
 *                  description: Livro removido
 *              404:
 *                  description: Livro não encontrado
 *              500:
 *                  description: Erro ao remover o livro
 * 
 */
router.delete('/books/:id', deleteBook);

export default router;