import { Router } from 'express';
import { createPublisher, getPublishers, getPublisherById, updatePublisher, deletePublisher } from '../controllers/publisher.controller';

const router = Router();

/**
 * @swagger
 * /publishers:
 *   post:
 *     summary: Cria uma nova editora
 *     tags: [Publishers]
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                  - name
 *                  - address
 *              properties:
 *                name:
 *                  type: string
 *                address:
 *                  type: string
 *     responses:
 *       201:
 *         description: Editora criada com sucesso
 *       400:
 *         description: Erro na criação da editora
 */
router.post('/publishers', createPublisher);

/**
 * @swagger
 * /publishers:
 *   get:
 *     summary: Obtém a lista de editoras
 *     tags: [Publishers]
 *     responses:
 *       200:
 *         description: Lista de editoras
 *       500:
 *         description: Erro ao obter as editoras
 */
router.get('/publishers', getPublishers);

/**
 * @swagger
 * /publishers/{id}:
 *   get:
 *     summary: Obtém uma editora pelo ID
 *     tags: [Publishers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da editora
 *     schema:
 *       type: string
 *     responses:
 *       200:
 *         description: Editora encontrada
 *       404:
 *         description: Editora não encontrada
 *       500:
 *         description: Erro ao obter a editora
 */
router.get('/publishers/:id', getPublisherById);

/**
 * @swagger
 * /publishers/{id}:
 *   put:
 *     summary: Atualiza uma editora pelo ID
 *     tags: [Publishers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da editora
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                  - name
 *                  - address
 *              properties:
 *                name:
 *                  type: string
 *                address:
 *                  type: string
 *     responses:
 *       200:
 *         description: Editora atualizada com sucesso
 *       404:
 *         description: Editora não encontrada
 *       500:
 *         description: Erro ao atualizar a editora
 */
router.put('/publishers/:id', updatePublisher);

/**
 * @swagger
 * /publishers/{id}:
 *   delete:
 *     summary: Remove uma editora pelo ID
 *     tags: [Publishers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da editora
 *     responses:
 *       204:
 *         description: Editora removida com sucesso
 *       404:
 *         description: Editora não encontrada
 *       500:
 *         description: Erro ao remover a editora
 */
router.delete('/publishers/:id', deletePublisher);

export default router;