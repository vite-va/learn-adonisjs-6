/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'
import { readFileSync } from 'node:fs'

router.on('/').render('pages/home').as('home')

router.get('/movies', () => {}).as('movies.index')

router
  .get('/movies/:slug', async ({ params, view }) => {
    // const url = app.makeURL(`resources/movies/${params.slug}.html`)
    // const movie = await readFileSync(url, 'utf-8')
    return view.render('pages/movies', { movie: params.slug })
  })
  .as('movies.show')

router.get('/movies/create', () => {}).as('movies.create')

router.post('/movies', () => {}).as('movies.store')

router.get('/movies/:slug/edit', () => {}).as('movies.edit')

router.put('/movies/:slug', () => {}).as('movies.update')

router.delete('/movies/:slug', () => {}).as('movies,destroy')
